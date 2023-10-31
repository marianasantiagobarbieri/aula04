'use client'
import { useState } from "react";
import handlerAcessUser from "./functions/handlerAcess";
import { useRouter } from "next/navigation";
import './globals.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  
  const { push } = useRouter(); //a função push redireciona o usuário p/ outra página, que nesse caso será a de Dashboard

  const handlerLogin = async (e) => {
    e.preventDefault(); //previnindo o envio do fomrulário
    try {
      const userAuth = await handlerAcessUser(user);
      if (userAuth.token === undefined) {
        toast.error("Erro no e-mail ou na senha! :(");
      }
      push('/pages/dashboard'); //redireciona o usuário p/ que após a ação do if o usuário vá p/ a página de Dashboard
    } catch {
      toast.error("Erro na aplicação!");
    }
  }



  return (
    <div className='LoginBox'>
      <div className='LoginContainer'>

        <h1>Login</h1>

        <form onSubmit={handlerLogin} className='LoginForm'>
         
          <input
            className='LoginInput'
            placeholder='E-mail'
            type="email"
            onChange={(e) => { setUser({ ...user, email: e.target.value }) }}>
          </input>
          <span className='LoginSpam'></span>

          <input
            className='LoginInput'
            placeholder='Senha'
            type='password'
            onChange={(e) => { setUser({ ...user, password: e.target.value }) }}>
          </input>
          <span className='LoginSpam'></span>

          <button className='LoginBotaoCadastrar'>Entrar</button>
        </form>
        
        <ToastContainer />
      </div>
    </div>
  )
}
