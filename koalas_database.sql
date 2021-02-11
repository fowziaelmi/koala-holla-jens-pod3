-- CREATE TABLE information for koala database
CREATE TABLE "koalas" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR (250) NOT NULL,
	"age" INTEGER,
	"gender" VARCHAR (1),
  "ready_for_transfer" BOOLEAN DEFAULT FALSE,
  "notes" VARCHAR (1024)
);

-- INSERT INTO informationf for koala database provided
INSERT INTO "koalas" ("name", "gender", "age", "ready_for_transfer", "notes")
VALUES 
('Scotty', 'M', 4, TRUE, 'Born in Guatemala'),
('Jean', 'F', 5, TRUE, 'Allergic to lots of lava'),
('Ororo', 'F', 7, FALSE, 'Loves listening to Paula (Abdul)'),
('Logan', 'M', 15, FALSE, 'Loves to sauna'),
('Charlie', 'M', 9, TRUE, 'Favorite band is Nirvana'),
('Betsy', 'F', 4, TRUE, 'Has a pet iguana');