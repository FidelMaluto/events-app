import mysql from "mysql2";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({
  path: path.resolve(__dirname, "./.env"),
});

const connection = mysql.createConnection({
  user: process.env.BD_USER,
  host: process.env.BD_HOST,
  password: process.env.BD_PASSWORD,
  database: process.env.BD_DATABASE,
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Conectado ao MySQL.");
});

export default connection;
