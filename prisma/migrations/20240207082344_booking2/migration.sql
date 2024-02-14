/*
  Warnings:

  - You are about to drop the column `dataRange` on the `booking` table. All the data in the column will be lost.
  - Added the required column `dateFrom` to the `booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dateTo` to the `booking` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_booking" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "fio" TEXT NOT NULL,
    "dateFrom" DATETIME NOT NULL,
    "dateTo" DATETIME NOT NULL,
    "guests" INTEGER NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "passport" TEXT NOT NULL,
    "totalSum" INTEGER NOT NULL
);
INSERT INTO "new_booking" ("email", "fio", "guests", "id", "passport", "phone", "totalSum") SELECT "email", "fio", "guests", "id", "passport", "phone", "totalSum" FROM "booking";
DROP TABLE "booking";
ALTER TABLE "new_booking" RENAME TO "booking";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
