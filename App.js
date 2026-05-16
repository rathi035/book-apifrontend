import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Book from "./pages/Book";

function App() {

return (

<BrowserRouter>

    <Routes>

        <Route path="/" element={<Home/>}/>

        <Route path="/login" element={<Login/>}/>

        <Route path="/signup" element={<Signup/>}/>

        <Route path="/books" element={<Book/>}/>

    </Routes>

</BrowserRouter>

);

}

export default App;