import React,{useState} from "react";
import {Link,useNavigate} from "react-router-dom";
import "./Auth.css";

function Signup(){

const navigate=useNavigate();

const [formData,setFormData]=useState({
name:"",
email:"",
password:""
});

const handleChange=(e)=>{

setFormData({

...formData,
[e.target.name]:e.target.value

});

};

const handleSubmit=(e)=>{

e.preventDefault();

const users=
JSON.parse(
localStorage.getItem("users")
)||[];

users.push(formData);

localStorage.setItem(
"users",
JSON.stringify(users)
);

alert(
"Signup successful"
);

navigate("/login");

};

return(

<div className="auth-container">

<form
className="auth-box"
onSubmit={handleSubmit}
>

<h1>Create Account</h1>

<input
type="text"
name="name"
placeholder="Name"
value={formData.name}
onChange={handleChange}
/>

<input
type="email"
name="email"
placeholder="Email"
value={formData.email}
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
Signup
</button>

<div className="auth-footer">

Already have account?

<Link to="/login">
Login
</Link>

</div>

</form>

</div>

);

}

export default Signup;