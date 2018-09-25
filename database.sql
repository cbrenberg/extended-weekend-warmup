CREATE DATABASE "spooky_things";

CREATE TABLE "costumes" (
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR(50) NOT NULL
);

INSERT INTO "costumes" ("name")
	VALUES ('Skeleton'), ('Pumpkin'), ('Space Pirate');