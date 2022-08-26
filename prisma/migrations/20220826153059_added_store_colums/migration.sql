/*
  Warnings:

  - Added the required column `address` to the `Stores` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Stores` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Stores` ADD COLUMN `address` VARCHAR(191) NOT NULL,
    ADD COLUMN `enabled` BOOLEAN NOT NULL DEFAULT true,
    ADD COLUMN `name` VARCHAR(191) NOT NULL;
