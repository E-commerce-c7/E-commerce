import React, { useState } from "react";
import ReactDOM from "react-dom";
import FooTer from "./components/footer.jsx";
import Navbar from "./components/navbar.jsx";
import LandingPage from "./components/LandingPage.jsx";
import Card from "./components/cards.jsx";
import Featured from "./components/Featured.jsx";
import OneProduct from "./components/ProductDetails.jsx";
import ProductList from "./components/ProductList.jsx";
const App = () => {
  const [view, setView] = useState('pokedex')
  const changeView = (option) => {
    setView(option)
  }
  const dummyData = [
    {
      "id": 1,
      "photo": "https://demo.evershop.io/assets/catalog/8247/2126/plv1439-White-list.png",
      "name": "White Product 1",
      "price": 19.99
    },
    {
      "id": 2,
      "photo": "https://demo.evershop.io/assets/catalog/7659/2021/plv1120-White-list.png",
      "name": "White Product 2",
      "price": 24.99
    },
    {
      "id": 3,
      "photo": "https://demo.evershop.io/assets/catalog/1441/5452/plv4117-Blue-list.png",
      "name": "Blue Product 1",
      "price": 14.99
    },
    {
      "id": 4,
      "photo": "https://demo.evershop.io/assets/catalog/7599/6547/plv3643-Blue-list.png",
      "name": "Blue Product 2",
      "price": 29.99
    },
    {
      "id": 5,
      "photo": "https://demo.evershop.io/assets/catalog/1034/3600/plv7632-Green-list.png",
      "name": "Green Product",
      "price": 9.99
    },
    {
      "id": 6,
      "photo": "https://demo.evershop.io/assets/catalog/5800/1660/plv5407-Black-list.png",
      "name": "Black Product 1",
      "price": 34.99
    },
    {
      "id": 7,
      "photo": "https://demo.evershop.io/assets/catalog/4477/5876/plv3335-Pink-list.png",
      "name": "Pink Product",
      "price": 19.99
    },
    {
      "id": 8,
      "photo": "https://demo.evershop.io/assets/catalog/5761/1580/plv5236-Black-list.png",
      "name": "Black Product 2",
      "price": 39.99
    }
  ]
  
  return (
    <div style={{  }}>
      <Navbar style={{ width: '50%' }} />
      {/* <LandingPage />
      <Card />
      <div style={{ marginBottom: '20px' }}></div>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold' ,textAlign: 'center', fontFamily: 'Arial', color: 'grey' }}>FEATURED PRODUCTS</h1>
      <div style={{ marginBottom: '20px' }}></div>
      <Featured /> */}
      {/* <OneProduct/> */}
      <ProductList products={dummyData} />
      <FooTer/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("pokemongodb"));
