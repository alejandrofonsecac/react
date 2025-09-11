import React from "react";
import { Link, Outlet } from "react-router-dom";

function Carrinho(){
    return(
    <>
        <h1>Este é o carrinho</h1>
        <ul>
            <p>
                <Link to='1'>Item 1</Link>
            </p>
            <p>
                <Link to='2'>Item 2</Link>
            </p>
            <p>
                <Link to='3'>Item 3</Link>
            </p>
        </ul>

        <Outlet/>
    </>
    )
}

export default Carrinho