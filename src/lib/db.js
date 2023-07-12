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
export const INSERT = async (curso, division) => {
  let result = (await poolAsync.query("SELECT * FROM cursos"))[0];
  await poolAsync.query(
    `INSERT INTO cursos (id, curso, division) VALUES (${result.length + 1}, ${curso}, ${division})`
  );
};
 