/*
  Warnings:

  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.
  - You are about to alter the column `email` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(64)`.
  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Profile` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `nama_lengkap` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `telepon` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "User_email_key";

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "id",
DROP COLUMN "name",
ADD COLUMN     "id_user" SERIAL NOT NULL,
ADD COLUMN     "nama_lengkap" VARCHAR(32) NOT NULL,
ADD COLUMN     "telepon" TEXT NOT NULL,
ADD COLUMN     "username" VARCHAR(32) NOT NULL,
ALTER COLUMN "email" SET DATA TYPE VARCHAR(64),
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id_user");

-- DropTable
DROP TABLE "Post";

-- DropTable
DROP TABLE "Profile";

-- CreateTable
CREATE TABLE "Barang" (
    "id_barang" SERIAL NOT NULL,
    "id_vendor" INTEGER NOT NULL,
    "id_histori" INTEGER NOT NULL,
    "id_kategori" INTEGER NOT NULL,
    "nama_barang" VARCHAR(128) NOT NULL,
    "kode_produksi" VARCHAR(128) NOT NULL,

    CONSTRAINT "Barang_pkey" PRIMARY KEY ("id_barang")
);

-- CreateTable
CREATE TABLE "Gudang" (
    "id_gudang" SERIAL NOT NULL,
    "id_tipe_gudang" INTEGER NOT NULL,
    "nama_gudang" VARCHAR(32) NOT NULL,
    "alamat" VARCHAR(32) NOT NULL,

    CONSTRAINT "Gudang_pkey" PRIMARY KEY ("id_gudang")
);
