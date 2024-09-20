/*
  Warnings:

  - The `image` column on the `post_db` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "post_db" DROP COLUMN "image",
ADD COLUMN     "image" BYTEA;
