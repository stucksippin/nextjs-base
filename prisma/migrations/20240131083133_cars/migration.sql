-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_cars" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "model" TEXT NOT NULL,
    "modelYear" INTEGER NOT NULL,
    "make" TEXT NOT NULL,
    "vin" TEXT NOT NULL
);
INSERT INTO "new_cars" ("id", "make", "model", "modelYear", "vin") SELECT "id", "make", "model", "modelYear", "vin" FROM "cars";
DROP TABLE "cars";
ALTER TABLE "new_cars" RENAME TO "cars";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
