import express from "express";
const { formatBufferTo64 } = require('./services/data-uri');
const { upload } = require('./services/multer');
const { cloudinaryUpload } = require('./services/cloudinary');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// const CImage = require('./db/image');
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

app.get('/api/fetch', async (req, res) => {
  const job = await prisma.music.findMany();
  res.json(job);
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

app.post('/api/upload', singleUploadCtrl, async (req, res) => {
  try {
    if (!req.file) { throw new Error('Audio is not presented!'); }

    console.log("Upload started")
    const file64 = formatBufferTo64(req.file);
    const folder = `${req.body.author}/${req.body.albumName}/`;
    const uploadResult = await cloudinaryUpload(file64.content, folder);

    if (!uploadResult.asset_id)
      return res.status(422).send({ message: uploadResult.message })
    const data = {
      cloudinaryId: uploadResult.public_id,
      author: req.body.author,
      authorImage: req.body.authorImage,
      albumName: req.body.albumName,
      songName: req.body.songName,
      songImage: req.body.songImage,
      songUrl: uploadResult.secure_url,
      songDuration: uploadResult.duration,
      songMimeType: uploadResult.format,
      songSize: uploadResult.bytes,
    }
    await prisma.music.create({ data });
    console.log("Uploaded successfully")
    //success
    return res.json(data);
  } catch (e: any) {
    console.log(e)
    return res.status(422).send({ message: e.message })
  }
})

app.listen(4000, () => {
  console.log("Listening on port 4000")
});