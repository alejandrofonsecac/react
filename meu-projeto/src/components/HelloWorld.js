import Frase from './Frase' //Importamos Frase para pormos usar ele no App.js, assim vai fazendo uma 'escadinha' até chegar no App por via de outros componentes

function HelloWorld (){
    return (
        <div>
            <Frase/>
            <h1>Meu primeiro componente</h1>
            <Frase/>
        </div>
    )
}

export default HelloWorld