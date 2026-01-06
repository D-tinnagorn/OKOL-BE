/*
  Warnings:

  - You are about to drop the column `status` on the `Platform` table. All the data in the column will be lost.
  - Added the required column `platform` to the `Platform` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Platform" DROP COLUMN "status",
ADD COLUMN     "platform" TEXT NOT NULL;
