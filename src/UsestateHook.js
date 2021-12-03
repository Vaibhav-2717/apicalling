import React,{useState,useEffect} from 'react';
import axios from 'axios';
export default function UsestateHook(){
    const[posts,setPosts]=useState([])
    useEffect(()=>{
      axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response=>{
         console.log(response.data);
         setPosts(response.data)
      })
      .catch(error=>{
        console.log(error);
      })
    })
    return(
        <div>
            <h1>Apicalling using function </h1>
            <ul>
                {
                    posts.map(post=> <li key={post.id}>{post.title}</li>)
                }
            </ul>
        </div>
    )
}