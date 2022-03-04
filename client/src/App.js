import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import Header from "./components/Header";
import Footer from './components/Footer';
import Home from "./screen/Home"
import Detail from './screen/Detail'
import Cart from './screen/Cart';
import Categorie from './screen/Categorie';
import Modal from "./components/Modal"
import Error from './screen/Error';
import {Route, Routes} from "react-router-dom"
import fecthProducts from './redux/product/action';
import SignIn from './screen/SignIn';
import SignUp from './screen/SignUp';

function App({ getproducts }) {
    const [sideToggle, setSideToggle] = useState(false);

    useEffect(() => {
        getproducts();
    }, []);

    return (
        <div className="wrapper">
            <Header setSideToggle={setSideToggle} />
            <div className="main">
                <div className="container">
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route path="product/:id" element={<Detail />} />
                        <Route path="/search/categorie/:name" element={<Categorie />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/signin" element={<SignIn />} />
                        <Route path="/signup" element={<SignUp />} />
                        <Route element={<Error />} />
                    </Routes>
                </div>
            </div>
            <Footer />
            <Modal sideToggle={sideToggle} setSideToggle={setSideToggle} />
        </div>
    );
}

const mapDispatchToProps = (dispatch) => ({
    getproducts: () => dispatch(fecthProducts()),
});

export default connect(null, mapDispatchToProps) (App);
