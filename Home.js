import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./Home.css";

function Home(){

const navigate=useNavigate();

return(

<div className="home">

    <Navbar/>

    <div className="hero">

        <div className="left">

            <h1>
                Book
                <br/>
                Management
                <br/>
                System
            </h1>

            <p>
                Manage, organize and explore your books
                efficiently with React + Spring Boot
            </p>

            <button
            onClick={()=>
            navigate("/books")
            }
            >
            Explore Books
            </button>

        </div>

        <div className="right">

           <img
  src="https://cdn-icons-png.flaticon.com/512/3145/3145765.png"
  alt="book"
  className="hero-image"
/>

        </div>

    </div>

    <footer className="footer">

        <h2>BookAPI</h2>

        <p>
            Book Management System using
            React + Spring Boot
        </p>

        <p>
            © 2026 All Rights Reserved
        </p>

    </footer>

</div>

);

}

export default Home;