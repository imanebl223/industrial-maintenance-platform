-- AlterTable
ALTER TABLE "User" ADD COLUMN     "role" TEXT NOT NULL DEFAULT 'technicien',
ALTER COLUMN "updatedAt" DROP DEFAULT;
