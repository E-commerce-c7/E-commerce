import React, { useState } from "react";
import ReactDOM from "react-dom";
import FooTer from "./components/footer.jsx";
import Navbar from "./components/navbar.jsx";
import LandingPage from "./components/LandingPage.jsx";
import Card from "./components/cards.jsx";
import Featured from "./components/Featured.jsx";
import OneProduct from "./components/OneProduct.jsx";
const App = () => {
  const [view, setView] = useState('pokedex')
  const changeView = (option) => {
    setView(option)
  }
  
  return (
    <div style={{  }}>
      <Navbar style={{ width: '50%' }} />
      {/* <LandingPage />
      <Card />
      <div style={{ marginBottom: '20px' }}></div>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold' ,textAlign: 'center', fontFamily: 'Arial', color: 'grey' }}>FEATURED PRODUCTS</h1>
      <div style={{ marginBottom: '20px' }}></div>
      <Featured /> */}
      <OneProduct/>
      <FooTer/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("pokemongodb"));
