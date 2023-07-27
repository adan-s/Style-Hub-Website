import React, { useState } from "react";
import "../styles/Login.css";
import { Link,useNavigate } from "react-router-dom";

export default function Login() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let navigate=useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/loginuser", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password })
    });

    const json = await response.json()
    console.log(json);

    if (!json.success) {
      alert("Invalid Credentials")
    }
    else{
      localStorage.setItem("userEmail",credentials.email);
      localStorage.setItem("authToken",json.authToken);
      console.log(localStorage.getItem("authToken"));
      navigate("/")
    }
  };

  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value })
  }

  return (
    <div className="p-5 signUpPage" style={{display:"flex", justifyContent:"space-around"}}>
     <div className="signupPortion  w-50 p-5" style={{display: 'flex', justifyContent: 'center', flexDirection:"column"}}>
            <h1>Hello, Friend!</h1>
            <h2>Enter your personal details and start journey with us</h2>
            <Link to='/signup' className="m-3 btn btn-success signup">
                Signup
              </Link>
          </div>
        <div className="loginBg  w-50 h-100">
        <h1 className="heading font-weight-bold font-italic pt-5" style={{display: 'flex', justifyContent: 'center'}}>
            Sign In
        </h1>
          <form onSubmit={handleSubmit} style={{display:'flex',justifySelf:"start", flexDirection:"column"}}>
            <div className="p-5">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="email"
                value={credentials.email}
                onChange={onChange}
              />

              <div id="emailHelp" className="form-text ">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3 p-5 pt-0">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                name="password"
                value={credentials.password}
                onChange={onChange}
              />
            </div>

            <div className="d-flex justify-content-end">
              <button type="submit" className="m-5 mt-3 pl-5 pr-5 btn btn-primary submit">
                Login
              </button>
             
            </div>
          </form>
          </div>
         
       
      </div>
  )
}
