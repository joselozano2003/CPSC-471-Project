/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `AppUser` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `AppUser` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "AppUser" ADD COLUMN     "userId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "AppUser_userId_key" ON "AppUser"("userId");

-- AddForeignKey
ALTER TABLE "AppUser" ADD CONSTRAINT "AppUser_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
