import { resolve } from "styled-jsx/css"

export default async function ListaDeUsuarios({ listar }) {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return (
    <div>
      {listar.map((user, index) => {
        return (
          <div key={index}>
            <p> Nome: {user.name}</p>
          </div>
        )
      })}
    </div>
  )
}