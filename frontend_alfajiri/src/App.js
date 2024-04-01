import React from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/common/Navigation";
import Footer from "./components/common/Footer";
import HomePage from "./components/home/HomePage";
import AboutPage from "./components/about/AboutPage";
import ContactPage from "./components/contact/ContactPage";


function App() {
    return (
		<>
			<Navigation />
			<Routes>
				<Route path="/" element={<HomePage />}></Route>
				<Route path="/about" element={<AboutPage />}></Route>
				<Route path="/contact-us" element={<ContactPage />}></Route>
			</Routes>
			<Footer />
		</>
    );
}

export default App;
