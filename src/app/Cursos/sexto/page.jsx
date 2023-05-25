"use client"
import {
  CursoContextProvider
} from "src/contexts/CursosContext.jsx";
import CursoDisplay from "@/components/CursoDisplay";

function main() {
  return <CursoContextProvider>
    <CursoDisplay></CursoDisplay>
  </CursoContextProvider>;
}
export default main;
