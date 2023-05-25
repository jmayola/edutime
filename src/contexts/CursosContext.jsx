"use client"

//creamos un contexto para poder utilizar funciones espeficias para ciertos sectores de el programa
//tambien para importar y exportar variables entre "contextos"
//los contextos son utilizados para acceder directamente a ciertas partes de codigo sin tener que
//hacer un "pasa manos" entre paginas o componentes

import data from '/home/juli/Escritorio/edutime/public/data/Cursos.json'
//importamos funciones de react
import { createContext, useState, useEffect } from "react";

//creamo un contexto
export const CursosContext = createContext();
//creamos el context provider
export function CursoContextProvider({children}) {
const [Curso, setCurso] = useState([]);
const [hola, setHola] = useState("hola")
//creamos una variable para importar entre paginas y que entre ellas se puedan modificar
//creamos un array de objetos, ya que elemento contiene un objeto con propiedades especificas.

useEffect(() => {
  setCurso(data)
},[])
console.log(Curso)

    return(
        <CursosContext.Provider value={{Curso, hola}}>
            <h1>hola mundo</h1>
           {children} 
        </CursosContext.Provider>
    )
}