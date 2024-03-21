import React, { useState,useEffect } from "react";
import ReactDOM from "react-dom";
import FooTer from "./components/footer.jsx";
import Navbar from "./components/navbar.jsx";
import LandingPage from "./components/LandingPage.jsx";
import Card from "./components/cards.jsx";
import Featured from "./components/Featured.jsx";
import ProductDetails from "./components/ProductDetails.jsx";
import ProductList from "./components/ProductList.jsx";
import PostProduct from "./components/PostProduct.jsx";
import Cart from "./components/Cart.jsx";
import axios from 'axios'
import Login from "./components/login.jsx";
import SingUp from "./components/singUp.jsx";

const App = () => {
  const [view, setView] = useState('login');
  const [product,setProduct] = useState([])
  const [OnePrduct,setOneProduct] = useState({})
  const [key,setKey] = useState('')
 
  const [id,setId] = useState(0)

 
  useEffect(()=>{
    
    fetch()
  },[])
  const changeView = (option,id,key) => {
    setKey(key)
    setId(id)
    setView(option)
  };
  const fetch = ()=>{
    axios.get('http://localhost:3000/api/product/').then((res)=>{
      console.log(res.data);
      setProduct(res.data)
    })
  }
  const getOne = (id)=>{
    axios.get(`http://localhost:3000/api/product/${id}`).then((res)=>{
      console.log(res.data);
      setOneProduct(res.data)
    })
  }



  return (
    <div style={{}}>
      <Navbar style={{ width: '50%' }} changeView={changeView} />
    
      {view === 'productList' && <ProductList changeView={changeView} getOne={getOne} name={key} products={product} />}
      {view === 'cart' && <Cart />}
      {view === 'main' && <>
        <LandingPage changeView={changeView}/>
        <Card changeView={changeView} />
        <div style={{ marginBottom: '20px' }}></div>
            <h1 style={{ fontSize: '24px', fontWeight: 'bold', textAlign: 'center', fontFamily: 'Arial', color: 'grey' }}>FEATURED PRODUCTS</h1>
            <div style={{ marginBottom: '20px' }}></div>
        <Featured />
        </>
      }
      {view === 'productDetails' && <ProductDetails changeView={changeView} OnePrduct={OnePrduct} id={id} />}
      {view === 'addProduct' && <PostProduct />}
      {view === 'login' && <Login changeView={changeView} />}
      {view === 'singup' && <SingUp />}
      
      <FooTer />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("pokemongodb"));
