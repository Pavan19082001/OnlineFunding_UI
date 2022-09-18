import React from 'react';
import "./PostComponent.css";
import { useSelector } from 'react-redux';

const PostComponent = () => {
    const posts = useSelector((state) => state.allposts.posts);
    const renderList = (posts && posts.map((post, index) => {
        return(
            <div className='row' key={post.id}>
        <div className = "column">
            <div className='card' style={{width: '18rem', height: '30vh', float: 'right'}}>
                <div className='card-body'>
                    <h5 className='card-title'>{post.title}</h5>
                    <span className='card-text'>{post.description}</span>
                </div>
                <div className='card-bottom'>
                    <i className="fa-solid fa-comment">
                        <a href="#">Comments</a>
                    </i> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    <a href="#" className="btn btn-primary">Donate</a>
                </div>
            </div>
        </div>
    </div>
        )
    }));

    return(
        <div>{renderList}</div>
    );
}

export default PostComponent