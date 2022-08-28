-- CreateTable
CREATE TABLE "Music" (
    "id" SERIAL NOT NULL,
    "author" TEXT NOT NULL,
    "authorImage" TEXT NOT NULL,
    "albumName" TEXT NOT NULL,
    "songName" TEXT NOT NULL,
    "songImage" TEXT NOT NULL,
    "songUrl" TEXT NOT NULL,
    "songDuration" DOUBLE PRECISION NOT NULL,
    "songSize" DOUBLE PRECISION NOT NULL,
    "songMimeType" TEXT NOT NULL,
    "cloudinaryId" TEXT NOT NULL,

    CONSTRAINT "Music_pkey" PRIMARY KEY ("id")
);
