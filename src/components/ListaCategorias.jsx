import React, { useEffect, useState } from 'react';
import { busca } from '../api/api'
import {Link} from 'react-router-dom'
import '../assets/css/blog.css'
const ListCategorias  = () =>{
    const[categorias, setCategorias] = useState([])

    useEffect(()=>{
        busca('/categorias', setCategorias)
    },[])

    return  (
        <ul className="lista-categorias container flex">
            {
                categorias.map((categoria)=>(
                    <Link to={`/categoria/${categoria.id}`}>
                        <li className={`lista-categorias__categoria lista-categorias__categoria--${categoria.id}`}>
                            {categoria.nome}
                        </li>
                    </Link>
                ))
            }
        </ul> 
    )
}

export default ListCategorias