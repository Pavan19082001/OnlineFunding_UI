import { useSelector } from 'react-redux';
import React from 'react';
import "../Home/Home.css";
import PostListing from '../posts/PostListing';

function Home() {
   const isLogged = useSelector((state)=>state.login);
  return (
    <React.Fragment>
        <div className="row">
            <div className="view">
                <img src="https://kettocdn.gumlet.io/media/banner/0/71/image/626a109be777492340e46d013c3cad0857a5da3a.png?w=1536&dpr=1.3" 
                alt='donation' className='col-lg-7 col-md-8 col-sm-6' style={{height: '100%', width: '90%'}}/>
               <div className="fundraise col-lg-5 col-md-4 col-sm-6 mt-4">
                    <h3>Need Funds for the Medical Emergency</h3>
                    <div className="data my-4 col-3 text-center">
                       <span className='display-4'>0%</span>
                       <p className='text-secondary'>PLATFORM FEE</p>
                    <div className='fund col-3 my-4 text-center'>
                       <span className='display-4'>100</span>
                       <p className='text-secondary'>FUNDRAISERS</p>
                    </div>
                    <div className='donate col-3 mx-3'>
                       <span className='display-4'>10</span>
                       <p className='text-secondary'>DONARS</p>
                    </div>
                    </div>
               </div>
            </div>
        </div>
        <div className="seeposts mt-4">
          <h3 className='title'>TRENDING FUNDRAISERS</h3>
          <span>view the fundraisers that are most active right now</span></div>

          <div className="texts">
            <div className='card'>
               <div className='card-body'>
               <div className='card-text'>
                  <span>To start &nbsp; <strong>FUNDRAISING</strong>, </span>
               <div className='card-title'>
                  {isLogged ? <a href='/posts' alt='posts'>CLICK HERE</a> : <a href='/login' alt='login'>CLICK HERE</a>}
               </div>
               </div>
               </div>  
            </div>
          </div>
          <div className='col-lg-6'>
            {<PostListing />}
          </div>
    </React.Fragment>
  )
}

export default Home