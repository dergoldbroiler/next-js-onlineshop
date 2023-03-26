-- CreateTable
CREATE TABLE "Products" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "image" VARCHAR(255) NOT NULL,
    "data" JSONB NOT NULL,

    CONSTRAINT "Products_pkey" PRIMARY KEY ("id")
);
