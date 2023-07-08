import mysql from "mysql2";
import Link from "next/link";
export default async function CursoDisplay() {
  const pool = mysql.createPool({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "juli123",
    database: "horarios",
  });
  const poolAsync = pool.promise();
  let result = (await poolAsync.query("SELECT * FROM cursos"))[0];
  return (
    <>
      {result.map((v, index) => {
        return (
          <>
            <div className="grid grid-cols-2 text-center">
              <p>{result[index].curso}</p>
              <p>{result[index].division}</p>
            </div>
            <Link className="text-center" href={`Horarios/${result[index].id}/Añadir`}>añadir</Link>
          </>
        );
      })}
    </>
  );
}
