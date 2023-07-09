import mysql from "mysql2";
import {handleClick} from '@/lib/db';
export default async function CursosAñadir() {
  const pool = mysql.createPool({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "juli123",
    database: "horarios",
  });
  const poolAsync = pool.promise();
  let result = (await poolAsync.query("SELECT * FROM cursos"))[0];
  handleClick()
  console.log(result);
  return (
    <>
    <form action="">
      <input type="text" />
      <input type="text" />
    </form>
      <button onclick="{handleClick}">Añadir</button>
    </>
  );
}
