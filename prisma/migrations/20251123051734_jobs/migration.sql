/*
  Warnings:

  - You are about to drop the `Task` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Task" DROP CONSTRAINT "Task_statusId_fkey";

-- DropForeignKey
ALTER TABLE "Task" DROP CONSTRAINT "Task_userId_fkey";

-- DropTable
DROP TABLE "Task";

-- CreateTable
CREATE TABLE "Jobs" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "brandName" TEXT NOT NULL,
    "createTerm" TEXT NOT NULL,
    "deadline" TEXT NOT NULL,
    "budget" INTEGER NOT NULL,
    "form" BOOLEAN NOT NULL,
    "seeding" BOOLEAN NOT NULL,
    "detail" TEXT NOT NULL,
    "storyLine" TEXT NOT NULL,
    "statusId" INTEGER NOT NULL,
    "colorCode" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Jobs_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Jobs" ADD CONSTRAINT "Jobs_statusId_fkey" FOREIGN KEY ("statusId") REFERENCES "Status"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Jobs" ADD CONSTRAINT "Jobs_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
