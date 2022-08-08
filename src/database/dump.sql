CREATE DATABASE "shortlyDB";

CREATE TABLE "users" (
    "id" SERIAL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT UNIQUE NOT NULL,
    "password" TEXT NOT NULL
);

CREATE TABLE "session" (
    "id" SERIAL PRIMARY KEY,
    "userId" INTEGER NOT NULL,
    "token" TEXT NOT NULL
);

CREATE TABLE "urls" (
    "id" SERIAL PRIMARY KEY,
    "url" TEXT NOT NULL, 
    "urlToken" TEXT NOT NULL,
    "userId" INTEGER NOT NULL REFERENCES "users"("id"),
    "view" INTEGER NOT NULL DEFAULT 0
);