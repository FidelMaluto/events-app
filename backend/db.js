import mysql from "mysql2";
import dotenv from 'dotenv';

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
