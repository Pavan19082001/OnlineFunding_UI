import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserLogin } from "../../redux/action";
import { signin } from "../../redux/action";


const Login = () =>{
  const users = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  let login = () =>{
    let userInfo = users.userDetails;
    console.log(userData);

   let res =  userInfo.filter(item =>{
      return (item.username === userData.username && item.password === userData.password);
    }, dispatch(signin()));
    dispatch(UserLogin(res));
    window.localStorage.setItem("Login_Details", JSON.stringify(res));
  };

  const handleChange = (e) =>{
    setUserData({
      ...userData, [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () =>{
    login();
  };



  return (
    <section>
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">Login</button>
        
        <div className="modal" id="exampleModalCenter" tabIndex="-1" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalCenterTitle">Login Form</h5>
                <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                 <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div noValidate>
                  <div className="form-group">
                    <label htmlFor="username">UserName</label>
                    <input type="email" className="form-control" id="username" name='username' placeholder="username" 
                    value={userData.username} onChange={(e) => handleChange(e)}/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" name='password' placeholder="Password" 
                    value={userData.password} onChange={(e) => handleChange(e)}/>
                  </div>
              <div className="modal-footer">
                <button type="submit" className="btn btn-secondary" onClick={handleSubmit}>
                  <a href='/posts' alt='posts'>Login</a>
                </button>
              </div>
             </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login;