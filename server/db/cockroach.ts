import pg from "pg";
const { Client } = pg;
import * as dotenv from "dotenv";
dotenv.config();
import { logger } from "../services/logger";

const DB_URL = process.env.DB_URL as string;

class Cockroach {
  private connection_url: string;

  constructor(url: string) {
    this.connection_url = url;
  }

  public connect() {
    const client = new Client(this.connection_url);
    client.connect();

    return client;
  }
}

export const CockroachClient = new Cockroach(DB_URL).connect();
logger.info("CockroachDB Connected");
