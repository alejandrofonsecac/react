import Item from './Item'

function ListCar(){
    return (
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca='BMW' lancamento={1985}/>
                <Item marca='Ferrari' lancamento={1956}/>
                <Item marca='Porshe' lancamento={2001}/>
                <Item />
                <Item />
            </ul>
        </>
    )
}

export default ListCar;