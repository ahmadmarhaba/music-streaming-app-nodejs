import express from "express";
const { formatBufferTo64 } = require('./services/data-uri');
const { upload } = require('./services/multer');
const { cloudinaryUpload } = require('./services/cloudinary');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const app = express();
app.use(express.json());
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  (res as any).setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.get("/", function (req, res) {
  res.send("Hello World");
});
app.get("/api/artist", async (req, res) => {
  const { id } = req.query;

  const author = await prisma.author.findUnique({
    where: {
      id
    }
  });
  const albums = await prisma.Album.findMany({
    where: {
      authorId: id
    }
  });
  res.json({
    author,
    albums
  });
});
app.get("/api/explore", async (req, res) => {
  const suggest = await prisma.author.findMany({
    include: {
      Albums: {
        take: 1,
        include: {
          Songs: {
            take: 1
          }
        }
      }
    },
  });
  const popular = await prisma.Song.findMany({
    take: 5,
    include: {
      album: {
        include: {
          author: true
        }
      }
    },
  });
  res.json({
    popular,
    suggest
  });
});
app.get('/api/search', async (req, res) => {
  const { text } = req.query;
  const data = await prisma.Song.findMany({
    take: 5,
    where: {
      name: {
        contains: text,
        mode: 'insensitive'
      }
    },
    include: {
      album: {
        include: {
          author: true
        }
      }
    }
  });
  res.json(data);
});
app.get('/api/playlist', async (req, res) => {
  const { id } = req.query;
  const data = await prisma.Album.findUnique({
    where: {
      id
    },
    include: {
      Songs: {
        include: {
          album: {
            include: {
              author: true
            }
          }
        }
      },
      author: true
    }
  });
  res.json(data);
});

const singleUpload = upload.single('song');
const singleUploadCtrl = (req: any, res: any, next: any) => {
  singleUpload(req, res, (error: any) => {
    if (error) {
      return res.status(422).send({ message: 'Audio upload fail!' });
    }

    next();
  })
}

// app.post('/api/upload', singleUploadCtrl, async (req, res) => {
//   try {
//     if (!req.file) { throw new Error('Audio is not presented!'); }

//     console.log("Upload started")
//     const file64 = formatBufferTo64(req.file);
//     const folder = `${req.body.author}/${req.body.album}/`;
//     const uploadResult = await cloudinaryUpload(file64.content, folder);

//     if (!uploadResult.asset_id)
//       return res.status(422).send({ message: uploadResult.message })
//     const data = {
//       songUrl: uploadResult.secure_url,
//       duration: uploadResult.duration,
//       mimeType: uploadResult.format,
//       size: uploadResult.bytes,
//     }
//     // console.log(data)
//     console.log("Uploaded successfully")
//     //success
//     return res.send("Uploaded successfully");
//   } catch (e: any) {
//     console.error(e)
//     return res.status(422).send({ message: e.message })
//   }
// })

app.listen(4000, () => {
  console.log("Listening on port 4000")
});