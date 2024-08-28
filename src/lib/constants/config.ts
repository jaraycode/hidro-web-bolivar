import { config } from "dotenv";

config({ path: ".env" });

export const fetchdir = `${process.env.API_HOST}/${process.env.API_PORT}/${process.env.API_PREFIX}`;
