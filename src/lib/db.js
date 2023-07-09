"use server";
import mysql from "mysql2";
const pool = mysql.createPool({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "juli123",
  database: "horarios",
});
const poolAsync = pool.promise();
export const handleClick = async () => {
  await poolAsync.query(
    `INSERT INTO cursos (curso, division) VALUES (2, 3)`
  );
};
