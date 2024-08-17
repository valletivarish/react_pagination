import React from "react";
import { useRef } from "react";
import "../../App.css";
import './Login.css'
import axios from "axios";

const Login = () => {
    const handleSubmit=async (e)=>{
        e.preventDefault();
        const email=formRef.current.querySelector("input[type='email']");
        const password=formRef.current.querySelector("input[type='password']");
        try{

            const response = await axios.post(`http://localhost:8080/api/auth/signin`,{
                email:email.value,
                password:password.value
            })
            localStorage.setItem("auth",response.data.accessToken);
            email.value="";
            password.value="";
            window.location.href="/data";
        }
        catch(error){
            alert("invalid email or password. Please try again");
        }
    }
  const formRef = useRef();
  return (
    <div className="container">
      <form className="form" ref={formRef}>
        <p className="form-title">Sign in to your account</p>
        <div className="input-container">
          <input type="email" placeholder="Enter email" />
          <span></span>
        </div>
        <div className="input-container">
          <input type="password" placeholder="Enter password" />
        </div>
        <button type="submit" className="submit" onClick={handleSubmit}>
          Sign in
        </button>
      </form>
    </div>
  );
};

export default Login;
