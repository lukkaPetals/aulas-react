import { useState } from 'react'

function Form() {

    function cadastrarUsuario(e) {
        //não atualiza a pagina
        e.preventDefault()
        console.log(name)
        console.log(password)
    }

    const [name, setName] = useState()
    const [password, setPassword] = useState()

    return(
        <div>
            <h1>Meu nome é {name}</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" id="name" name="name" placeholder="Digite seu nome" onChange={(e) => setName(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="password">Senha:</label>
                    <input type="password" id="password" name="password" placeholder="Digite sua senha" onChange={(e) => setPassword
                    (e.target.value)}/>
                </div>
                <div>
                    <input type="submit" placeholder="Cadastro"/>
                </div>
            </form>
        </div>
    )
}

export default Form