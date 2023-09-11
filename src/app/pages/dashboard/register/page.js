'use client'
import handlerAcessUser from "@/app/functions/handlerAcess";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const metadata = {
    title: 'Register users',
    description: 'Project for class PTAC',
  }


export default async function RegisterDashboard() {

    const handlerLoginRegister = (e) => {
        e.preventDefault(); //previnindo o envio do fomrulário
        try {
          toast.success("Usuário registrado com sucesso :)");
          
        } catch {
          toast.error("Erro no registro, tente novamente :(");
        }
      }

    return (
        <div className='LoginBox'>
            <div className='LoginContainer'>
                <h1>Registrar Usuário</h1>
                <form className='LoginForm'>
                    <input
                        className='LoginInput'
                        placeholder='Nome:'
                        type="nome">
                    </input>
                    <span className='SpamRegister'></span>
                    <input
                        className='LoginInput'
                        placeholder='E-mail:'
                        type="email">
                    </input>
                    <span className='SpamRegister'></span>
                    <input
                        className='LoginInput'
                        placeholder='Senha:'
                        type='password'>
                    </input>
                    <span className='SpamRegister'></span>
                    <button onClick={handlerLoginRegister} className='LoginBotaoCRegistrar'>Registrar</button>
                </form>

                
                <ToastContainer />

            </div>
        </div>
    )
}