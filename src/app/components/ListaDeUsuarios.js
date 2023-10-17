import { resolve } from "styled-jsx/css"

export default async function ListaDeUsuarios({ listaDeUsuarios }) {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return (
    <div>
      {listaDeUsuarios.map((user, index) => {
        return (
          <div key={index}>
            <p> Nome: {user.name}</p>
          </div>
        )
      })}
    </div>
  )
}