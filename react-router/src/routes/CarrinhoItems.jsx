import React from "react";
import { useParams, useNavigate } from "react-router-dom";

function CarrinhoItems(){

    const { id } = useParams()

    {/* --- Redicionar --- */}
    const navigate = useNavigate()
    const handleContant = () =>{
        return navigate('/')
    }

    return(
        <>
            <p>Detalhes do item: {id}</p>
            <button onClick={handleContant}>Enviar a Mensagem</button>
        </>
    )
}

export default CarrinhoItems