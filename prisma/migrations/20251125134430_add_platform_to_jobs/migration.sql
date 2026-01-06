-- CreateTable
CREATE TABLE "_JobsToPlatform" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_JobsToPlatform_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_JobsToPlatform_B_index" ON "_JobsToPlatform"("B");

-- AddForeignKey
ALTER TABLE "_JobsToPlatform" ADD CONSTRAINT "_JobsToPlatform_A_fkey" FOREIGN KEY ("A") REFERENCES "Jobs"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_JobsToPlatform" ADD CONSTRAINT "_JobsToPlatform_B_fkey" FOREIGN KEY ("B") REFERENCES "Platform"("id") ON DELETE CASCADE ON UPDATE CASCADE;
