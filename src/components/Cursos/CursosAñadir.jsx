"use client";
import { INSERT } from "@/lib/db";
import { useState } from "react";
// import {handleClick} from '@/lib/db';
export default function CursosAñadir() {
  const [curso, setCurso] = useState();
  const [division, setDivision] = useState();

  function handleClick() {
    INSERT(curso, division);
  }
  return (
    <>
      <form
        action=""
        className="bg-slate-800 p-10 m-10 flex flex-col gap-9 text-black"
      >
        <h1 className="text-black">Curso</h1>
        <input
          className="border-gray-950 text-center border text-black"
          type="number"
          onChange={(e) => {
            setCurso(e.target.value);
          }}
        />
        <h1>Division</h1>
        <input
          className="border-gray-950 border text-center text-black"
          type="number"
          onChange={(e) => {
            setDivision(e.target.value);
          }}
        />
        <button className="bg-gray-600 p-5" onClick={handleClick}>
          Validar Y Añadir
        </button>
      </form>
    </>
  );
}
