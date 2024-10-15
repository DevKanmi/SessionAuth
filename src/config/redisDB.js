import { createClient } from "redis";

import { config } from "dotenv";
config();

export const clientConnect = async() => {
  const client = createClient({
    password: process.env.REDIS_PASS,
    socket: {
      host: process.env.REDIS_HOST,
      port: process.env.REDIS_PORT,
    },
  });

  client.on("connect", () => {
    console.log("Connected to Redis Cloud");
  });

  client.on("error", (err) => {
    console.log("Redis connection error:", err);
  });

  await client.connect();
  return client
};
