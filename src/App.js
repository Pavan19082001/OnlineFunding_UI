import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import SignUp from './pages/Registration/SignUp';
import Post from './pages/posts/Post';
import Contact from './components/Contact/Contact';
import Login from './pages/Login/Login';

function App() {
  return(
    <div className='app'>
      <BrowserRouter>
        <Navbar />
        <Routes>
           <Route path='/' element={<Home />} />
           <Route path='/login' element={<Login />} />
           <Route path='/posts' element={<Post />} />
           <Route path='/contactus' element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
