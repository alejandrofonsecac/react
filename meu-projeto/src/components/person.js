function Person({nome, idade, profissao, foto}){//Ele esta como um objeto mas continua sendo parte do PROPS mas de forma simplificada
    return (
        <div>
            <img src={foto} alt={nome}/>
            <h2>Nome: {nome}</h2>
            <p>Idade: {idade}</p>
            <p>Profissão: {profissao}</p>
        </div>
    )
}

export default Person