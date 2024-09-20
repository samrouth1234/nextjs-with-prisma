-- CreateTable
CREATE TABLE "user_db" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "user_db_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "post_db" (
    "id" TEXT NOT NULL,
    "title" VARCHAR(225) NOT NULL,
    "content" VARCHAR(225) NOT NULL,
    "image" TEXT,

    CONSTRAINT "post_db_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_db_email_key" ON "user_db"("email");
