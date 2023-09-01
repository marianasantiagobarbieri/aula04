import ListaDeUsuarios from "@/app/components/ListaDeUsuarios";
import { getUsers } from "@/app/functions/handlerAcessAPI";
import { Suspense } from "react";

export default async function Dashboard() {
    const listar = getUsers();

    return (
        <div>
          <h1>Usuários Cadastrados:</h1>
          <Suspense fallback={<p>Carregando...</p>}>
           <ListaDeUsuarios listar={listar}/>
           </Suspense>
        </div>
    )
}