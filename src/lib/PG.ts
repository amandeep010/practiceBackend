import pkg from "pg";
const { Client } = pkg;
import dotenv from "dotenv";
dotenv.config();

class PG {
  public client;
  constructor() {
    this.client = new Client({
      user: process.env.DB_USER as string,
      host: process.env.DB_HOST as string,
      database: process.env.DB_NAME as string,
      password: process.env.DB_PASSWORD as string,
      port: Number(process.env.DB_PORT),
    });
    this.connect = this.connect.bind(this);
  }

  connect = async () => {
    try {
      await this.client.connect();
      console.log("Connected to PostgreSQL database!");
    } catch (err) {
      console.error("Error connecting to the database:", err);
    }
  };
}

export default new PG();
