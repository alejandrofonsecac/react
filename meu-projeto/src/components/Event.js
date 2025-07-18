function Event({numero}){

    

    function meuEvento(){
        window.alert(`Olá, Fui ativado ${numero}`)
    }
    return(
        <div>
            <p>Clique aqui para disparar um enveto</p>
            <button onClick={meuEvento}>Ativar</button>
        </div>
    )
}

export default Event