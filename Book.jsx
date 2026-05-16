import React,{useState,useEffect} from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";
import "./Book.css";

function Book(){

const [books,setBooks]=useState([]);
const [search,setSearch]=useState("");

const [formData,setFormData]=useState({
isbn:"",
title:"",
author:"",
publicationYear:""
});

useEffect(()=>{

getBooks();

},[]);

const getBooks=async()=>{

try{

const response=
await API.get("/books");

setBooks(response.data);

}

catch(error){

console.log(error);

}

};

const handleChange=(e)=>{

setFormData({

...formData,
[e.target.name]:e.target.value

});

};

const addBook=async()=>{

try{

await API.post(
"/books",
formData
);

getBooks();

setFormData({
isbn:"",
title:"",
author:"",
publicationYear:""
});

}

catch(error){

console.log(error);

}

};

const filteredBooks=
books.filter((book)=>

book.isbn.toLowerCase()
.includes(
search.toLowerCase()
)

);

return(

<div className="book-page">

<Navbar/>

<div className="book-container">

<h1>
Books Dashboard
</h1>

<div className="book-form">

<input
placeholder="Search ISBN"
value={search}
onChange={(e)=>
setSearch(
e.target.value
)}
/>

<input
name="isbn"
placeholder="ISBN"
value={formData.isbn}
onChange={handleChange}
/>

<input
name="title"
placeholder="Title"
value={formData.title}
onChange={handleChange}
/>

<input
name="author"
placeholder="Author"
value={formData.author}
onChange={handleChange}
/>

<input
name="publicationYear"
placeholder="Year"
value={formData.publicationYear}
onChange={handleChange}
/>

<button
onClick={addBook}
>
Add Book
</button>

</div>

<div className="cards">

{filteredBooks.map((book,index)=>(

<div
className="book-card"
key={index}
>

<h2>{book.title}</h2>

<p>
<b>ISBN :</b>
{book.isbn}
</p>

<p>
<b>Author :</b>
{book.author}
</p>

<p>
<b>Year :</b>
{book.publicationYear}
</p>

<button className="edit-btn">
Edit
</button>

<button className="delete-btn">
Delete
</button>

</div>

))}

</div>

</div>

</div>

);

}

export default Book;