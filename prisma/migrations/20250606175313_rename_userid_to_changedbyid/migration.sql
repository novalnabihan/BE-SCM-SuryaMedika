/*
  Warnings:

  - Added the required column `changedById` to the `ItemPriceHistory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vendorId` to the `Transaction` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ItemPriceHistory" ADD COLUMN     "changedById" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Transaction" ADD COLUMN     "vendorId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Vendor" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Vendor_pkey" PRIMARY KEY ("id")
);
