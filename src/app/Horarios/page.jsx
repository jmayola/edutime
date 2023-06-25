"use client"
import {
  CursoContextProvider
} from "src/contexts/CursosContext.jsx";
import CursoDisplay from "@/components/Cursos/CursoDisplay";
import Header from "@/components/Index/Header"
function main() {
  return (
  <>
  <Header></Header>
  <CursoContextProvider>
    <CursoDisplay>
    </CursoDisplay>
  </CursoContextProvider>
  </>
  )
}
export default main;
