import { CursosContext } from "@/contexts/CursosContext";
import { useContext } from "react";
// a la hora de ejecutar codigo backend de react, debemos ejecturarlo a traves de los components
// debido a que en el page.js solo ejecuta codigo html directamente.
// por eso es que solo aqui debemos ejecutar los usecontext, usestate, etc.
function getrandom() {
  let mat = Math.random();
  return mat * 10;
}
function CursoDisplay() {
  const { Curso } = useContext(CursosContext);
  return (
    <div>
      <h1>aosdjasj</h1>
      {Curso.map((curso) => (
        <div className="flex justify-center align-middle p-4" key={getrandom()}>
          <h1>{curso.curso}</h1>
          <h1>{curso.division}</h1>
        </div>
      ))}
    </div>
  );
}

export default CursoDisplay;
