import React from 'react';
import axios from "axios";
import { useFormik } from 'formik';
import Login from '../Login/Login';
import * as Yup from "yup";
import "../Registration/SignUp.css";
import userlogo from "../Registration/user.png";
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddUser } from '../../redux/action';
import { useEffect } from 'react';

const SignUp = () => {
    const userList = useSelector((state) => state);
    const dispatch = useDispatch();

    //Get all users data into redux store...
    const fetchUsers = async () =>{
        const response = await axios.get("http://localhost:8080/userapi/v1/users");
        dispatch(AddUser(response.data));
        console.log(response.data);
    }

    useEffect(()=>{
        fetchUsers();
    }, []);
    
    //User registration....
    const [userData, setUserData] = useState({});

    const handleValue = (e) =>{
        e.preventDefault();
        setUserData({
            ...userData, 
            [e.target.name]: e.target.value,
        });
    };

    const validationSchema = Yup.object().shape({
        username: Yup.string().required("username is mandatory..."),
        firstName: Yup.string().required("firstname is required!"),
        emailId: Yup.string().email("Invalid email format").required("required"),
        password: Yup.string().min(5, "week password").max(10, "password too long").required("password must required!"),
        conformPassword: Yup.string().oneOf([Yup.ref("password"), "password should match"]),
    })

    const formik = useFormik({
        userData,
        validationSchema,
    });

    function submit(e) {
        e.preventDefault();
        axios.post("http://localhost:8080/userapi/v1/users", userData).then(res => console.log(res.data));
    }

  return (
    <section className='row'>
    <div className='register mt-5 col-lg-12 col-md-12 col-sm-8'>
        <form onSubmit={formik.handleSubmit} >
            <img src={userlogo} alt={userlogo} />
            <h3 className='user-pro text-center'>USER</h3>
            <label htmlFor='user' className='form-label'>UserName</label>
            <input className='form-control' type='text' name='username' id='user' value={userData.username} onChange={e => handleValue(e)} />
            <p className='error'>{formik.touched.username && formik.errors.username ? formik.errors.username : ""}</p>

            <label htmlFor='fname' className='form-label'>First Name</label>
            <input className='form-control' type='text' name='firstName' id='fname' value={userData.firstName} onChange={e => handleValue(e)} />
            <p className='error'>{formik.touched.firstName && formik.errors.firstName ? formik.errors.firstName : ""}</p>

            <label htmlFor='lname' className='form-label'>Last Name</label>
            <input className='form-control' type='text' name='lastName' id='lname' value={userData.lastName} onChange={e => handleValue(e)} />

            <label htmlFor='email' className='form-label'>Email Id</label>
            <input className='form-control' type='email' name='emailId' id='email' value={userData.emailId} onChange={e => handleValue(e)} />
            <p className='error'>{formik.touched.emailId && formik.errors.emailId ? formik.errors.emailId : ""}</p>

            <label htmlFor='pass' className='form-label'>Password</label>
            <input className='form-control' type='password' name='password' id='pass' value={userData.password} onChange={e => handleValue(e)} />
            <p className='error'>{formik.touched.password && formik.errors.password ? formik.errors.password : ""}</p>

            <label htmlFor='cpwd' className='form-label'>Confirm Password</label>
            <input className='form-control' type='password' name='conformPassword' id='cpwd' value={userData.conformPassword} onChange={e => handleValue(e)} />
            <p className='error'>{formik.touched.conformPassword && formik.errors.conformPassword ? formik.errors.conformPassword : ""}</p>

            <input className='form-check-input' type="checkbox" id="invalidCheck" />
            <label htmlFor="invalidCheck" className='form-check-label'>Agree to terms and conditions</label>
            
            <div className="button">
                <button type='submit' className='btn btn-primary' onClick={(e)=>submit(e)}>SignUp</button>
            </div>
        </form>
        <div className='login'>
            <strong>If user already exists, then &nbsp;</strong>
            <button className='btn btn-primary'>{<Login />}</button>
        </div>
    </div>
    </section>
  )
}

export default SignUp;