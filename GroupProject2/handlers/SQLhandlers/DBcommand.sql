CREATE TABLE "users" (
  "id" serial PRIMARY KEY,
  "username" varchar UNIQUE,
  "password" varchar,
  "full_name" varchar,
  "email" varchar UNIQUE,
  "gender" varchar,
  "date_of_birth" varchar,
  "created_at" varchar
);

CREATE TABLE "category" (
  "id" serial PRIMARY KEY,
  "category_name" varchar
);

CREATE TABLE "users_community" (
  "id" serial PRIMARY KEY,
  "users" int,
  "communities_id" int,
  "admin" boolean
);

CREATE TABLE "community" (
  "id" serial PRIMARY KEY,
  "community_name" varchar UNIQUE,
  "category_id" int
);

CREATE TABLE "content" (
  "id" serial UNIQUE ,
  "content" varchar,
  "user_id" int,
  "community_id" int,
  "category_id" int,
  "personal" boolean,
  "txt" boolean,
  "photoandtext" boolean,
  "feed" boolean,
  "comment" boolean
);

ALTER TABLE "users_community" ADD FOREIGN KEY ("users") REFERENCES "users" ("id");

ALTER TABLE "users_community" ADD FOREIGN KEY ("communities_id") REFERENCES "community" ("id");

ALTER TABLE "community" ADD FOREIGN KEY ("category_id") REFERENCES "category" ("id");

ALTER TABLE "content" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "content" ADD FOREIGN KEY ("community_id") REFERENCES "community" ("id");

ALTER TABLE "content" ADD FOREIGN KEY ("category_id") REFERENCES "category" ("id");