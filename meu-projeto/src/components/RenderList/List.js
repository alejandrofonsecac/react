function List({itens}) {
    return (
        <>
            <h3>Algumas coisas</h3>
                { itens.length > 0 ? (//Condição(if)
                    itens.map((item, index) => (
                        <p key={index}>{item}</p>
                ))) : (//Else
                    <p>Não há itens na lista</p>)}
        </>
    )
}
export default List;