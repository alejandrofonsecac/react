import { useState } from "react"

function Form(){

    function cadastrarUsuario(event){
        event.preventDefault()
        console.log(`Usuario ${name} foi cadastrado com a senha: ${password}`)
        window.alert(name)
        window.alert('Cadastrou o usuário!')
    }

    const [name, setName] = useState('Matheus')
    const [password, setPassword] = useState()

    return(
        <div>
            <h1>Meu Cadastro:</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <input type="text" 
                    id="name" 
                    name="name" 
                    placeholder="Digite seu nome" 
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    />
                </div>
                <div>
                    <input 
                    type="password" 
                    id="password" 
                    name="password" 
                    placeholder="Digite sua senha"
                    onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
                <div>
                    <input type="submit" value='Cadastrar' />
                </div>
            </form>

        </div>
    )
}

export default Form