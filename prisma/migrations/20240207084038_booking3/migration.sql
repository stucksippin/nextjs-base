/*
  Warnings:

  - Added the required column `roomsId` to the `booking` table without a default value. This is not possible if the table is not empty.

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
    "totalSum" INTEGER NOT NULL,
    "roomsId" INTEGER NOT NULL,
    CONSTRAINT "booking_roomsId_fkey" FOREIGN KEY ("roomsId") REFERENCES "rooms" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_booking" ("dateFrom", "dateTo", "email", "fio", "guests", "id", "passport", "phone", "totalSum") SELECT "dateFrom", "dateTo", "email", "fio", "guests", "id", "passport", "phone", "totalSum" FROM "booking";
DROP TABLE "booking";
ALTER TABLE "new_booking" RENAME TO "booking";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
