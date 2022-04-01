import React, { createContext, useContext } from "react";
import { Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/HomePage/Home";
import NavBar from "./components/Navbar/Navbar";
import Food from "./components/Foods/Food";
import Drink from "./components/Drinks/Drinks";
import Footer from "./components/Footer/Footer.js";
import Pricing from "./components/Pricing/Pricing";
import FoodDetails from "./components/Foods/FoodDetails";
import Error from "./components/Error/Error";
import './app.css'
import DrinksDetails from "./components/Drinks/DrinksDetails";
export default function App() {

    return (

        <div className="bg-dark">

            <NavBar />
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/foods" element={<Food />} />
                    <Route path="/food/:id" element={<FoodDetails />} />
                    <Route path="/drinks" element={<Drink />} />
                    <Route path="/drink/:id" element={<DrinksDetails />} />
                    <Route path="/pricing" element={<Pricing />} />
                    <Route path="*" element={<Error />} />
                </Routes>

                <Footer />
            </div>

        </div>
    );
}