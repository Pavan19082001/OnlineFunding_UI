import React, {useState} from 'react';
import "./Post.css";
import axios from "axios";

const Post = () => {
  const [post, setPost] = useState({
    title: '',
    description: '',
  });

  const handleChange = (e) =>{
    e.preventDefault();
    setPost({
      ...post, [e.target.name]: e.target.value,
    });
  }
  
    const user = window.localStorage.getItem("Login_Details");
    let user1 = JSON.parse(user);
    let username = user1.map(user1=>user1.username);

   const handleSubmit = (e)=>{
    e.preventDefault();
    axios.post("http://localhost:8080/postapi/v1/posts/"+username, post).then(res => console.log(res.data));
   }

  return (
    <div className='create-post'>
    <center>
      <div className='card mt-5' style={{width: '20rem'}}>
        <form onSubmit={handleSubmit} autoComplete='off'> 
        <div className='card-body mb-4'>
          <label htmlFor='card-title' className='form-label'><b>Title</b></label> &nbsp; &nbsp;
          <input type='text' className='form-control' id='card-title' name='title' value={post.title} onChange={handleChange} /><br/>
          <label htmlFor='card-text' className='form-label'><b>Description</b></label>
          <input type='text'className='form-control pb-4' id='card-text' name='description' placeholder='post description' value={post.description} onChange={handleChange}/>
        </div>
        <button className='btn btn-primary'>AddPost</button>
        </form>
      </div>
    </center>
    </div>
  )
}

export default Post