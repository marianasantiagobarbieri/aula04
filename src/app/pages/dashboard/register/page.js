

export const metadata = {
    title: 'Register users',
    description: 'Project for class PTAC',
  }


export default async function RegisterDashboard() {

    return (
        <div className='LoginBox'>
            <div className='LoginContainer'>
                <h1>Registrar Login</h1>
                <form /*onSubmit={handlerLogin}*/ className='LoginForm'>
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
                    <button className='LoginBotaoCRegistrar'>Registrar</button>
                </form>
            </div>
        </div>
    )
}