export const metadata = {
    title: 'Alter user',
    description: 'Project for class PTAC'
}


export default async function AlterDashboard() {
    return (
        <div className='LoginBox'>
            <div className='LoginContainer'>
                <h1>Alterar Usuário</h1>
                <form /*onSubmit={handlerLogin}*/ className='LoginForm'>
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
            </div>
        </div>
    )
}