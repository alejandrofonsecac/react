import Button from './eventos/Button'

function Event(){

    function meuEvento(){
        window.alert(`Ativando o primeiro evento!`)
    }

    function segundoEvento(){
        console.log('Segundo Evento')
    }

    return(
        <div>
            <p>Clique aqui para disparar um enveto</p>
            <Button event={meuEvento} text='Primeiro Evento' />
            <Button event={segundoEvento} text='Segundo Evento'/>
        </div>
    )
}

export default Event