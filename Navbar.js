import React,{useState} from "react";
import { Link,useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar(){

const navigate=useNavigate();

const [show,setShow]=useState(false);

const user=
JSON.parse(
localStorage.getItem("currentUser")
);

const logout=()=>{

localStorage.removeItem(
"currentUser"
);

navigate("/login");

};


return(

<nav className="navbar">

<div className="logo">

📚 BookAPI

</div>

<div className="nav-links">

<Link to="/">Home</Link>

<Link to="/books">
Books
</Link>

{

!user ?

<>

<Link to="/login">
Login
</Link>

<Link to="/signup">
Signup
</Link>

</>

:

<div
className="profile"
onClick={()=>setShow(!show)}
>

<div className="avatar">

{
user.name
?.charAt(0)
.toUpperCase()
}

</div>


{

show && (

<div className="dropdown">

<p>

<b>
{user.name}
</b>

</p>

<p>
{user.email}
</p>

<button
onClick={logout}
>

Logout

</button>

</div>

)

}

</div>

}

</div>

</nav>

);

}

export default Navbar;