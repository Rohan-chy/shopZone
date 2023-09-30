import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import { useState,useEffect } from 'react';
import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import Detail from './components/Detail';
import CartList from './components/CartList'


function App() {
  const [search,setSearch]=useState("");
  const [loading,setLoading]=useState(false);
  const [cart,setCart]=useState([]);

  const Url="https://fakestoreapi.com/products";
    const [dataFetch,setDataFetch]=useState([]);

   

    useEffect(()=>{
        const fetchFunc=async()=>{
            try{
                setLoading(true)
                const response=await fetch(Url);
                const data= await response.json();
                setDataFetch(data);
                setLoading(false);
                
            }
            catch(error){
                console.log(error);
            }
        }
        fetchFunc();
        
    },[]);

  const searching=(e)=>{
    setSearch(e.target.value);
  }

  const clk=(value)=>{
    setCart([...cart,{...value,quantity:1}]);
    // console.log(cart);
  }
  
  return (
    <Router>
      <Header searching={searching} count={cart.length}/>
      
      <Routes>
        <Route path='/' element={<Body search={search} dataFetch={dataFetch} loading={loading} />} />
        <Route path='/detail/:id' element={<Detail clk={clk}/>} />
        <Route path='/cart' element={<CartList cart={cart} setCart={setCart}/>} />
        
      </Routes>
    </Router>
  );
}

export default App;
