import React,{useState,useEffect} from 'react'

const CartList = ({cart,setCart}) => {
    // const [newCart,setNewCart]=useState([]);

    // useEffect(()=>{
    //     setNewCart(cart);
    // },[cart]);

    const add=(item)=>{
        const addQ=cart.map((value)=>(
            item.id===value.id?{...value,quantity:value.quantity+1}:value
        ))
        setCart(addQ)
    }

    const sub=(item)=>{
        const addQ=cart.map((value)=>(
            item.id===value.id?{...value,quantity:value.quantity > 0? value.quantity-1:0}:value
        ))
        setCart(addQ)
    }

    const remove=(index)=>{
        const filter=cart.filter((value,i)=>{
            return index != i;
        })
        setCart(filter);
    }
  return (
    <div className='m-5'>
        {
            cart.map((item,index)=>(
                <div key={index} className='flex gap-4 m-4'>
                    <div>
                    <img src={item.image} className='w-[50px]' />
                    </div>
                    <div >
                    <span >{item.title}</span>
                    <button onClick={()=>sub(item)}className='bg-[red] px-2 text-white'>-</button>
                    <span className='font-bold m-2'>{item.quantity}</span>
                    <button onClick={()=>add(item)}className='bg-[green] px-2 text-white mr-2'>+</button>
                    <span >${item.price * item.quantity}</span>
                    <button onClick={()=>remove(index)}className='ml-10 bg-[red] text-white p-1'>REMOVE</button>
                    </div>
                </div>
            ))
        }
        <br/>
        <h1>TOTAL:$ 
            {
                cart.map(item=>item.price*item.quantity).reduce((total,value)=>total+value,0).toFixed(2)
            }
        </h1>
    </div>
  )
}

export default CartList;