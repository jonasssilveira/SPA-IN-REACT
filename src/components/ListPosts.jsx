import React,{useState, useEffect} from 'react';
import {busca } from '../api/api'
import { Link } from 'react-router-dom'
const ListPost = ({url}) =>{

    const [posts, setPosts] = useState([])

    useEffect(()=>{
        console.log(url)
        busca(url, setPosts)
    },[posts]);
    return(
        <section className = 'posts container'> 
            {
                posts.map((post)=>(
                    <Link className={`cartao-post cartao-post--${post.categoria}`} to={`/post/${post.id}`}>
                        <article key={post.id}>
                            <h3 className="cartao-post__titulo"> 
                                {post.title}
                            </h3>
                            <p className='cartao-post__meta'>{post.metadescription}</p>
                        </article>
                    </Link>
                ))
            }
        </section>
    )
}

export default ListPost