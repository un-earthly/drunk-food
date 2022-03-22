import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/HomePage/Home";
import NavBar from "./components/Navbar/Navbar";
import Food from "./components/Foods/Food";
import Drink from "./components/Drinks/Drinks";
import Footer from "./components/Footer/Footer.js";
import Pricing from "./components/Pricing/Pricing";
import './app.css'
export default function App() {
    return (
        <div className="bg-dark">
            <NavBar />
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Foods" element={<Food />} />
                    <Route path="/Drinks" element={<Drink />} />
                    <Route path="/Pricing" element={<Pricing />} />
                </Routes>

                <Footer />
            </div>

        </div>
    );
}