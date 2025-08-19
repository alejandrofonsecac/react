function Saudacao({nome}){

    function gerarSaudacao(algumNome){
        return `Olá, ${algumNome}, tudo bem?`
    }
    
    return(
        <>
            {nome ? 
                <p>{gerarSaudacao(nome)}</p>
                :(<p>Insira seu nome</p>)
            }
        </>
    )

}

export default Saudacao;