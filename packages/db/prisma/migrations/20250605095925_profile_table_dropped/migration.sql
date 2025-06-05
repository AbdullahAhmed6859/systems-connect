/*
  Warnings:

  - You are about to drop the `profile` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[email]` on the table `user` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `first_name` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "comment" DROP CONSTRAINT "comment_user_id_fkey";

-- DropForeignKey
ALTER TABLE "follow" DROP CONSTRAINT "follow_followee_id_fkey";

-- DropForeignKey
ALTER TABLE "follow" DROP CONSTRAINT "follow_follower_id_fkey";

-- DropForeignKey
ALTER TABLE "like" DROP CONSTRAINT "like_user_id_fkey";

-- DropForeignKey
ALTER TABLE "post" DROP CONSTRAINT "post_author_id_fkey";

-- DropForeignKey
ALTER TABLE "profile" DROP CONSTRAINT "profile_user_id_fkey";

-- AlterTable
ALTER TABLE "user" ADD COLUMN     "bio" TEXT,
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "first_name" TEXT NOT NULL,
ADD COLUMN     "last_name" TEXT,
ADD COLUMN     "picture" TEXT;

-- DropTable
DROP TABLE "profile";

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- AddForeignKey
ALTER TABLE "post" ADD CONSTRAINT "post_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "follow" ADD CONSTRAINT "follow_follower_id_fkey" FOREIGN KEY ("follower_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "follow" ADD CONSTRAINT "follow_followee_id_fkey" FOREIGN KEY ("followee_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "like" ADD CONSTRAINT "like_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comment" ADD CONSTRAINT "comment_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
