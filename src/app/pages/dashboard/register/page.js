'use client'
import { postUser } from '@/app/functions/handlerAcessAPI';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { resolve } from 'styled-jsx/css';

export const metadata = {
    title: 'Register users',
    description: 'Project for class PTAC',
  }


export default function RegisterDashboard() {

    const [user, setUser ] = useState({
        name: '',
        email: '',
        password: '',
      });
      const { push } = useRouter();



    const handlerLoginRegister = async (e) => {
        e.preventDefault(); //previnindo o envio do fomrulário
        try {
          await postUser(user);
          await new Promise((resolve) => {
            toast.success("Usuário registrado com sucesso :)");
            setTimeout(resolve, 2000);
          });
          return push("/pages/dashboard");          
        } catch {
          toast.error("Erro no registro, tente novamente :(");
        }
      }

    return (
        <div className='LoginBox'>
            <div className='LoginContainer'>

                <h1>Registrar Usuário</h1>

                <form onSubmit={handlerLoginRegister} className='LoginForm'>
                    <input
                        className='LoginInput'
                        placeholder='Nome:'
                        type="nome"
                        onChange={(e) => { setUser({ ...user, name: e.target.value }) }}>
                    </input>
                    <span className='SpamRegister'></span>

                    <input
                        className='LoginInput'
                        placeholder='E-mail:'
                        type="email"
                        onChange={(e) => { setUser({ ...user, email: e.target.value }) }}>
                    </input>
                    <span className='SpamRegister'></span>

                    <input
                        className='LoginInput'
                        placeholder='Senha:'
                        type='password'
                        onChange={(e) => { setUser({ ...user, password: e.target.value }) }}>
                    </input>
                    <span className='SpamRegister'></span>

                    <button className='LoginBotaoCRegistrar'>Registrar</button>

                </form>

                
                <ToastContainer />

            </div>
        </div>
    )
}