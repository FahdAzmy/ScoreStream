-- CreateTable
CREATE TABLE "Game" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "platform" TEXT[],

    CONSTRAINT "Game_pkey" PRIMARY KEY ("id")
);
