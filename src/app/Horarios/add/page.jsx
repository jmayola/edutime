import CursoDisplay from "@/components/Cursos/CursoDisplay";
import CursosAñadir from "@/components/Cursos/CursosAñadir";
import Header from "@/components/Index/Header";
function main(children) {
  return (
    <>
      <Header></Header>
      <CursosAñadir />
    </>
  );
}
export default main;
