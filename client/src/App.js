import React, {useState} from 'react'
import Header from "./components/Header";
import Footer from './components/Footer';
import Home from "./screen/Home"
import Detail from './screen/Detail'
import Cart from './screen/Cart';
import Categorie from './screen/Categorie';
import Modal from "./components/Modal"
import Error from './screen/Error';
import {Route, Routes} from "react-router-dom"

function App() {
  const [sideToggle, setSideToggle] = useState(false)
  return (
      <div className="wrapper">
          <Header setSideToggle={setSideToggle} />
          <div className="main">
              <div className="container">
                  <Routes>
                      <Route exact path="/" element={<Home />}  />
                      <Route path="product/:id" element={<Detail/>} />
                      <Route path="/search/categorie/:name" element={<Categorie/>} />
                      <Route path="/cart" element={<Cart/>} />
                      <Route  element={<Error/>} />
                  </Routes>
              </div>
          </div>
          <Footer />
          <Modal sideToggle={sideToggle} setSideToggle={setSideToggle} />
      </div>
  );
}

export default App;
