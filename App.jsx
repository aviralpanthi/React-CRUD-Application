import { useContext, useState } from "react";
import Create from "./components/Create";
import Show from "./components/Show";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Details from "./components/Details.jsx";
import Edit from "./components/Edit.jsx";
const App = () => {
   
    return (
        <>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/create" element={<Create />} />
                <Route path="/show" element={<Show />}>
                    <Route path="/show/details/:title" element={<Details />} />
                </Route>
                <Route path="/show/edit/:title" element={<Edit />} />
            </Routes>
        </>
    );
};

export default App;