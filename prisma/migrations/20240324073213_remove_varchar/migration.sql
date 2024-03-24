/*
  Warnings:

  - The primary key for the `views` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "guest_books" ALTER COLUMN "body" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "views" DROP CONSTRAINT "views_pkey",
ALTER COLUMN "slug" SET DATA TYPE TEXT,
ADD CONSTRAINT "views_pkey" PRIMARY KEY ("slug");
