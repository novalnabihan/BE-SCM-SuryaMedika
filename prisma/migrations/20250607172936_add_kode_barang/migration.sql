/*
  Warnings:

  - A unique constraint covering the columns `[kodeBarang]` on the table `Item` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `kodeBarang` to the `Item` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Item" ADD COLUMN     "kodeBarang" TEXT NOT NULL DEFAULT 'TEMP';

-- CreateIndex
CREATE UNIQUE INDEX "Item_kodeBarang_key" ON "Item"("kodeBarang");
