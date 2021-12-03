import { Component } from "react";
import axios from "axios";
export class Apicalling extends Component{
    constructor(props){
        super(props)

        this.state={
            posts:[],
        }
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response=>{
        console.log(response.data)
        this.setState({posts:response.data})
        })
        .catch(error=>{
            console.log(console.error())
        })

    }
     render(){
         const{posts}=this.state
         return(
             <div>
                 list of posts{
                posts.length?
              posts.map(post => <div key={post.id}>{post.title}</div>):
              null
                 }   </div>
         )
     }
}