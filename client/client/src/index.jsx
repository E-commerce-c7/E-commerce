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
import Dashboard from "./components/dashboard.jsx";

const App = () => {
  const [view, setView] = useState('main');
  const [product,setProduct] = useState([])
  const [OnePrduct,setOneProduct] = useState({})
  const [key,setKey] = useState('')
  const [id,setId] = useState(0)
  const [user,setUser] = useState({})
  const [error,setError] = useState('')
  const [isLogged,setIsLogged] = useState(false)
  const [cart,setCart] = useState([])

 
  useEffect(()=>{
    fetch()
    getCart(user.id)
  },[isLogged])
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
  const singUp = (obj)=>{
    axios.post('http://localhost:3000/api/user/register',obj).then((res)=>{
      console.log(res.data);
    })
  }

  const login = (obj)=>{
    axios.post('http://localhost:3000/api/user/',obj).then((res)=>{
      console.log(res.data);
      setUser(res.data.user)
      setView('main')
      setError('')
      setIsLogged(true)
      return res
  }).catch((err)=>{
    setError('Invalid email or password')
    return err
  
  })
}
const logout = ()=>{
  setIsLogged(false)
  setUser({})
  setView('login')
}

const addToCart = (obj)=>{
  axios.post(`http://localhost:3000/api/cart/`,obj).then((res)=>{
    console.log(res.data);
}).catch((err)=>{
  console.log(err);
})
}
const addProduct = (obj)=>{
  axios.post(`http://localhost:3000/api/product/`,obj).then((res)=>{
    console.log(res.data);
}).catch((err)=>{
  console.log(err);
})

}
const getCart = (id)=>{
  axios.get(`http://localhost:3000/api/cart/${id}`).then((res)=>{
    console.log('dsq',res.data);
    setCart(res.data)
})
}
const deleteProduct = (id)=>{
  axios.delete(`http://localhost:3000/api/product/${id}`).then((res)=>{
    console.log(res.data);
    fetch()
})
}
  const updateProduct=(id,obj)=>{
    axios.put(`http://localhost:3000/api/product/${id}`,obj).then((res)=>{
      console.log(res.data);
      fetch()
  })
  }
  const destroyCart = (id)=>{
    axios.delete(`http://localhost:3000/api/cart/destroy/${id}`).then((res)=>{
      console.log(res.data);
  })
  }
  const deleteFromCart= (id)=>{
    axios.delete(`http://localhost:3000/api/cart/${id}`).then((res)=>{
      console.log(res.data);
  })
  }

  return (
    <div style={{}}>
      <Navbar style={{ width: '50%' }} logout={logout} user={user} isLogged={isLogged} changeView={changeView} />
    
      {view === 'productList' && <ProductList changeView={changeView} getOne={getOne} name={key} products={product} />}
      {view === 'cart' && <Cart deleteFromCart={deleteFromCart} destroyCart={destroyCart} user={user}  getCart={getCart} cart={cart} />}
      {view === 'main' && <>
        <LandingPage changeView={changeView}/>
        <Card changeView={changeView} />
        <div style={{ marginBottom: '20px' }}></div>
            <h1 style={{ fontSize: '24px', fontWeight: 'bold', textAlign: 'center', fontFamily: 'Arial', color: 'grey' }}>FEATURED PRODUCTS</h1>
            <div style={{ marginBottom: '20px' }}></div>
        <Featured />
        </>
      }
      {view === 'productDetails' && <ProductDetails  isLogged={isLogged} getCart={getCart}  addToCart={addToCart} user={user} changeView={changeView} OnePrduct={OnePrduct} id={id} />}
      {view === 'addProduct' && <PostProduct user={user}  addProduct={addProduct} changeView={changeView} />}
      {view === 'login' && <Login error={error} login={login} changeView={changeView} />}
      {view === 'singup' && <SingUp  changeView={changeView} singUp={singUp}/>}
      {view === 'dashboard' && <Dashboard user={user} updateProduct={updateProduct}  deleteProduct={deleteProduct} product={product} changeView={changeView} singUp={singUp}/>}
      
      <FooTer />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("pokemongodb"));
