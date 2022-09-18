import React from 'react';
import { Link } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {signout} from '../../redux/action/index';
import "../Navbar/Navbar.css";

function Navbar() {
  const dispatch = useDispatch();
  return (
    <React.Fragment>
        <nav className='navbar navbar-dark bg-secondary navbar-expand-sm'>
          <div className="container ml-4">
            <Link to={"/"} className="navbar-brand display-5"> 
            <img src='https://static.thenounproject.com/png/432199-200.png' alt="logo"
            width={60} height={70}/> Fund <span className='text-warning'>Raisers</span> 
            </Link>
            <ul className='pages-list'>
                <Link to={"/"}>
                  <li className='plist'><i className='fa fa-home mr-4'> Home </i></li>
                </Link>
                <Link to={"/register"}>
                  <li className='plist mr-4'><i className="fa fa-registered"> Sign Up </i></li>
                </Link>
                <Link to={"/contactus"}>
                  <li className='plist mr-2'><i className='fa fa-phone'>Contact Us</i></li>
                </Link>
                <Link to={"/admin"}>
                  <li className='plist ml-2 mr-4'>Admin</li>
                </Link>
            </ul>
          </div>
        </nav>
    </React.Fragment>
  )
}

export default Navbar;