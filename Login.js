import React,{useState} from "react";
import {useNavigate} from "react-router-dom";
import API from "../services/api";
import "./Auth.css";

function Login(){

const navigate=useNavigate();

const [formData,setFormData]=useState({
    username:"",
    password:""
});

const [error,setError]=useState("");

const handleChange=(e)=>{

    setFormData({
        ...formData,
        [e.target.name]:e.target.value
    });

};

const handleSubmit=async(e)=>{

    e.preventDefault();

    try{

        const response=
        await API.post(
            "/auth/login",
            formData
        );

        console.log(
            response.data
        );

        localStorage.setItem(
            "token",
            response.data.token
        );

        localStorage.setItem(
            "currentUser",
            JSON.stringify({
                username:
                response.data.username
            })
        );

        alert(
            "Login Successful"
        );

        navigate("/books");

    }

    catch(error){

        console.log(error);

        setError(
            "Invalid username or password"
        );
    }

};

return(

<div className="auth-container">

<form
className="auth-box"
onSubmit={handleSubmit}
>

<h1>Login</h1>

{error &&
<p className="error">
{error}
</p>
}

<input
type="text"
name="username"
placeholder="Username"
value={formData.username}
onChange={handleChange}
/>

<input
type="password"
name="password"
placeholder="Password"
value={formData.password}
onChange={handleChange}
/>

<button type="submit">
Login
</button>

<div className="auth-footer">
Don't have account?
<a href="/signup">
Signup
</a>
</div>

</form>

</div>

);

}

export default Login;