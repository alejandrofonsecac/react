import {useState} from 'react'

function Condicional(){

    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function enviarEmail(e){
        e.preventDefault()
        setUserEmail(email)
        console.log(userEmail)
    }

    return(
        <div>
            <h2>Cadastre o seru email</h2>
            <form>
                <input type='email' placeholder="Digite o seu email..." onChange={(e) => setEmail(e.target.value)}/>
                <button type='submit' onClick={enviarEmail}>
                    Enviar Email
                </button>
                {userEmail && (//Essa linha vai fazer o que esta entre chaves se for TRUE
                    <div>
                        <p>O email do usuário é: {userEmail}</p>
                    </div>
                )}
            </form>           
        </div>
    )

}

export default Condicional