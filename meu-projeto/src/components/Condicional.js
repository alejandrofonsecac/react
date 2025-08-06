import {useState} from 'react'

function Condicional(){

    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function enviarEmail(e){
        e.preventDefault()
        setUserEmail(email)
        console.log(email)
    }

    return(
        <div>
            <h2>Cadastre o seru email</h2>
            <form>
                <input type='email' placeholder='Digite o seu email...'/>
                <button type='submit' onClick={enviarEmail}>
                    Enviar Email
                </button>
            </form>           
        </div>
    )

}

export default Condicional