-- Run these commands in psql terminal to create 
-- a Database to store our notifications
CREATE DATABASE pushnotif;
CREATE TABLE notif(
  id SERIAL PRIMARY KEY,
  body VARCHAR(255)
);
INSERT INTO notif (body) VALUES("First Notification");