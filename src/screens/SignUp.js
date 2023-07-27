import React, { useState } from "react";
import "../styles/Signup.css";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [credentials, setcredentials] = useState({
    name: "",
    email: "",
    password: "",
    geolocation: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
        location: credentials.geolocation,
      }),
    });

    const json = await response.json();
    console.log(json);

    if (!json.success) {
      alert("Invalid Credentials");
    }
  };

  const onChange = (event) => {
    setcredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  return (
    // <div className="signUpPage ">
    //   <h1 className="heading font-weight-bold font-italic pt-5 pb-5 text-white" style={{display: 'flex', justifyContent: 'center'}}>
    //         Create a New Account
    //     </h1>
    //   <div className="container ">

    //     <form onSubmit={handleSubmit} className="formbg p-3">

    //       <div className="mb-3">
    //         <label htmlFor="name" className="form-label">
    //           Name
    //         </label>
    //         <input
    //           type="text"
    //           className="form-control"
    //           name="name"
    //           value={credentials.name}
    //           onChange={onChange}
    //         />
    //       </div>

    //       <div className="mb-3">
    //         <label htmlFor="exampleInputEmail1" className="form-label">
    //           Email address
    //         </label>
    //         <input
    //           type="email"
    //           className="form-control"
    //           id="exampleInputEmail1"
    //           aria-describedby="emailHelp"
    //           name="email"
    //           value={credentials.email}
    //           onChange={onChange}
    //         />

    //         <div id="emailHelp" className="form-text ">
    //           We'll never share your email with anyone else.
    //         </div>
    //       </div>
    //       <div className="mb-3">
    //         <label htmlFor="exampleInputPassword1" className="form-label">
    //           Password
    //         </label>
    //         <input
    //           type="password"
    //           className="form-control"
    //           id="exampleInputPassword1"
    //           name="password"
    //           value={credentials.password}
    //           onChange={onChange}
    //         />
    //       </div>
    //       <div className="mb-3">
    //         <label htmlFor="exampleInputAddress1" className="form-label">
    //           Address
    //         </label>
    //         <input
    //           type="text"
    //           className="form-control"
    //           name="geolocation"
    //           value={credentials.geolocation}
    //           onChange={onChange}
    //         />
    //       </div>

    //       <div className="d-flex justify-content-end">
    //       <button type="submit" className="m-3 btn btn-primary pl-5 pr-5">
    //         Submit
    //       </button>
    //       <Link to="/login" className="m-3 btn btn-success pl-3 pr-3">Already a User</Link>
    //       </div>
    //     </form>
    //   </div>
    // </div>

    <div
      className="p-5 signUpPage"
      style={{ display: "flex", justifyContent: "space-around" }}
    >
      <div
        className="signupPortion  w-50 p-5"
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <h1>Welcome Back!</h1>
        <h2>To keep connected with us please login with your personal info</h2>
        <Link to="/login" className="m-3 btn btn-success signup">
          Login
        </Link>
      </div>
      <div className="loginBg  w-50 h-100">
        <h1
          className="heading font-weight-bold font-italic pt-5"
          style={{ display: "flex", justifyContent: "center" }}
        >
          Sign In
        </h1>
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            justifySelf: "start",
            flexDirection: "column",
          }}
        >
          <div className="p-5 pb-1">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={credentials.name}
              onChange={onChange}
            />
          </div>
          <div className="p-5 pt-0 pb-0">
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
          <div className="mb-3 p-5 pt-0 pb-0">
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

          <div className="mb-3 p-5 pt-0 pb-2">
            <label htmlFor="exampleInputAddress1" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              name="geolocation"
              value={credentials.geolocation}
              onChange={onChange}
            />
          </div>

          <div className="d-flex justify-content-end">
            <button
              type="submit"
              className="m-5 mt-3 pl-5 pr-5 btn btn-primary submit"
            >
              Signup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
