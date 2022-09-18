import React, {useEffect} from "react";
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import {AddPost} from "../../redux/action/index";
import PostComponent from "../posts/PostComponent";

const PostListing = () => {
    const posts = useSelector((state) => state);
    const dispatch = useDispatch();

    const fetchPosts = async () =>{
        const response = await axios.get("http://localhost:8080/postapi/v1/posts");
        dispatch(AddPost(response.data));
    }

    useEffect(() =>{
        fetchPosts();
    }, []);
    
    console.log("posts: ", posts);
  return (
    <div className="container mt-3">
        <PostComponent />
    </div>
  )
}

export default PostListing