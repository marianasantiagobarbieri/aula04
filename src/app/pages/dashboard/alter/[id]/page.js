'use client'
import handlerAcessUser from "@/app/functions/handlerAcess";
import { uptadeUser } from "@/app/functions/handlerAcessAPI";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const metadata = {
    title: 'Alter user',
    description: 'Project for class PTAC'
}


export default function AlterDashboard( {params} ) {
  
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: ''
    });

    const { push } = useRouter();


  const handlerLoginAlter = async (e) => {
    e.preventDefault(); //previnindo o envio do fomrulário
    try {
      toast.success("Usuário alterado com sucesso :)");
      await uptadeUser(user, params.id);
      return push("/pages/dashboard");
    } catch {
      toast.error("Erro na alteração, tente novamente :(");
    }
  }


    return (
        <div className='LoginBox'>
            <div className='LoginContainer'>
                <h1>Alterar Usuário</h1>
                <form className='LoginForm'>
                    <input
                        className='LoginInput'
                        placeholder='Nome:'
                        type="text"
                        value={user.name}
                        onChange={(e) => { setUser({ ...user, name: e.target.value }) }}
                        required  >
                    </input>
                    <span className='SpamAlter'></span>

                    <input
                        className='LoginInput'
                        placeholder='E-mail:'
                        type="email"
                        value={user.email}
                        onChange={(e) => { setUser({ ...user, email: e.target.value }) }}
                        required>
                    </input>
                    <span className='SpamAlter'></span>

                    <input
                        className='LoginInput'
                        placeholder='Senha:'
                        type='password'
                        value={user.password}
                        onChange={(e) => { setUser({ ...user, password: e.target.value }) }}>
                    </input>
                    <span className='SpamAlter'></span>
                    <button onClick={handlerLoginAlter} className='LoginBotaoAlterar'>Alterar</button>
                </form>

                <ToastContainer />
            </div>
        </div>
    )
}