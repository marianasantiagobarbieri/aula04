import Link from "next/link";
import React from "react";
import Image from "next/image";
import { resolve } from "styled-jsx/css"

export default async function ListaDeUsuarios({ listaDeUsuarios }) {
  console.log(listaDeUsuarios);
  
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return (
    <div>
      {listaDeUsuarios.map((user, index) => {
        return (

          <div key={index}>

            <Link className="linkModificado" href={`/pages/dashboard/alter/${user.id}`}>
            <p> Nome:<b> {user.name}</b></p>
            </Link>
            
          </div>
        )
      })}
    </div>
  )
}