/* Criando (configurando) as rotas */

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './Pages/About.jsx'
import PageNotFound from './Pages/PageNotFound.jsx'
import Home from './Pages/Home.jsx'
import Movies from './Pages/Movies.jsx'
import Contact from './Pages/Contact.jsx'

/*Variavel que vai criar armazenar as rotas */
/* Toda rota se inicia na home, (path: '/') */
/* Atenção aos imports, pois faltando algum a página não pe renderizada. Sempre consultar o console no inspect */
const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {index: true, element: <Home/>},
      {path: 'About', element: <About/>},
      {path: 'Movies', element: <Movies/>},
      {path: 'Contact', element: <Contact/>},
      {path: '*', element: <PageNotFound/>}
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
