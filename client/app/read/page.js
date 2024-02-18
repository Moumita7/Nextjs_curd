"use client"; 
import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';


const Read = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      // const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      const response = await axios.get('http://localhost:5000/posts');
      setPosts(response.data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };
// console.log("read",posts)

let handleDelete=async(id)=>{
// console.log(id)
let check=posts.filter((ele)=>ele.id !=id)
let res=await axios.delete(`http://localhost:5000/posts/${id}`,check)
fetchPosts()
console.log(res)
}
  return (
    <div>
     <div>
      {posts.map((ele)=>(
        <div key={ele.id}>
        <p>{ele.id}</p>
        <p>title : {ele.title}</p>
        <p>body : {ele.body}</p>
        <Link href={`/read/${ele.id}`}><button>update</button></Link> 
        <button onClick={()=>handleDelete(ele.id)}>delete</button>
        <br />
        <hr />

        </div>
      ))}
     </div>
    </div>
  );
}

export default Read;




