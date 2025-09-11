import React from "react";
import { Link } from "react-router-dom";

function Carrinho(){
    return(
    <>
        <h1>Este é o carrinho</h1>
        <ul>
            <p>
                <Link to='carrinho/1'>Item 1</Link>
            </p>
            <p>
                <Link to='carrinho/2'>Item 2</Link>
            </p>
            <p>
                <Link to='carrinho/3'>Item 3</Link>
            </p>
        </ul>
    </>
    )
}

export default Carrinho