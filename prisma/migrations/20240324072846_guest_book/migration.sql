-- CreateTable
CREATE TABLE "guest_books" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "body" VARCHAR(255) NOT NULL,
    "email" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "guest_books_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "views" (
    "slug" VARCHAR(128) NOT NULL,
    "count" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "views_pkey" PRIMARY KEY ("slug")
);
