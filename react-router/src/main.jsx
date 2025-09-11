import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import NavBar from './routes/navBar.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/Home.jsx'
import Carrinho from './routes/Carrinho.jsx'
import CarrinhoItems from './routes/CarrinhoItems.jsx'
import ErrorPage from './routes/ErrorPage.jsx'

 {/*const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
  },

  {
    path: 'carrinho',
    element: <Carrinho/>
  }
])
  */}

  const router = createBrowserRouter([
    { //Aqui estamos reaproveitando o que tiver dentro de children, assim podemos usar ele no App
      path: '/',
      element: <App/>,
      errorElement: <ErrorPage/>,
        children: [
          {
            path: 'carrinho',
            element: <Carrinho/>
          },
          {/* --- Rotas unicas (Rotas aninhadas) --- */},
          {
            path: 'carrinho/:id',
            element: <CarrinhoItems/>,
          },

          {
            path: '/home',
            element: <Home/>
          }
        ]
    },
    
  ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
