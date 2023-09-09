'use client'
import handlerAcessUser from "@/app/functions/handlerAcess";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const metadata = {
    title: 'Alter user',
    description: 'Project for class PTAC'
}


export default async function AlterDashboard() {
     
  const { push } = useRouter(); //a função push redireciona o usuário p/ outra página, que nesse caso será a de Dashboard

  const handlerLoginAlter = async (e) => {
    e.preventDefault(); //previnindo o envio do fomrulário
    try {
      const userAuth = await handlerAcessUser(user);
      if (userAuth) {
        toast.success("Usuário alterado com sucesso :)");
      }
    } catch {
      toast.error("Erro na alteração, tente novamente :(");
    }
  }


    return (
        <div className='LoginBox'>
            <div className='LoginContainer'>
                <h1>Alterar Usuário</h1>
                <form onSubmit={handlerLoginAlter} className='LoginForm'>
                    <input
                        className='LoginInput'
                        placeholder='Nome:'
                        type="nome">
                    </input>
                    <span className='SpamAlter'></span>
                    <input
                        className='LoginInput'
                        placeholder='E-mail:'
                        type="email">
                    </input>
                    <span className='SpamAlter'></span>
                    <input
                        className='LoginInput'
                        placeholder='Senha:'
                        type='password'>
                    </input>
                    <span className='SpamAlter'></span>
                    <button className='LoginBotaoAlterar'>Alterar</button>
                </form>

                <ToastContainer />
            </div>
        </div>
    )
}