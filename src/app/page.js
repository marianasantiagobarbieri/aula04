'use client'
import { useState } from "react";
import handlerAcessUser from "./functions/handlerAcess"
import { useRouter } from "next/navigation";
import './globals.css';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/react-toastify.css';

export default function Login() {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const { push, refresh } = useRouter();

  const handlerLogin = async (e) => {
    e.preventDefault();
    try {
      await handlerAcessUser(user);
      push('/pages/dashboard');
    } catch {
      refresh();
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
      </div>
    </div>
  )
}
