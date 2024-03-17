import React, { useState } from "react";
import ReactDOM from "react-dom";
import FooTer from "./components/footer.jsx";
import Navbar from "./components/navbar.jsx";
import LandingPage from "./components/LandingPage.jsx";
import Card from "./components/cards.jsx";
import Featured from "./components/Featured.jsx";
const App = () => {
  const [view, setView] = useState('pokedex')
  const changeView = (option) => {
    setView(option)
  }
  
  return (
    <div style={{  }}>
      <Navbar />
      <LandingPage />
      <Card />
      <h1 style={{ fontSize: '24px', fontWeight: 'bold' ,textAlign: 'center', fontFamily: 'Arial', color: 'grey' }}>FEATURED PRODUCTS</h1>
      <Featured />
      <FooTer/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("pokemongodb"));
