-- CreateTable
CREATE TABLE "Task" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "brandName" TEXT NOT NULL,
    "createTerm" TIMESTAMP(3) NOT NULL,
    "Deadline" TIMESTAMP(3) NOT NULL,
    "budget" INTEGER NOT NULL,
    "form" BOOLEAN NOT NULL,
    "seeding" BOOLEAN NOT NULL,
    "detail" TEXT NOT NULL,
    "storyLine" TEXT NOT NULL,
    "statusId" INTEGER NOT NULL,
    "colorCode" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Task_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_statusId_fkey" FOREIGN KEY ("statusId") REFERENCES "Status"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
