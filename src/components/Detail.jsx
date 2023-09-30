import React, { useEffect, useState } from 'react'
import { useParams,NavLink } from 'react-router-dom';

const Detail = ({clk}) => {
  const {id}=useParams();
  const [detail,setDetail]=useState({});

  useEffect(()=>{
    const detailData=async()=>{
      const response=await fetch(`https://fakestoreapi.com/products/${id}`);
      const jsonData=await response.json();
      setDetail(jsonData);
    }
    detailData();
  },[detail])
  return (
    <section className='flex justify-center items-center gap-10 m-5 '>
      <div className='w-[300px] h-[300px]'>
        <img src={detail.image} alt="avatar" />
      </div >
      <div className='flex flex-col gap-5'>
        <h1 className='font-bold text-2xl'>{detail.category}</h1>
        <h2 className='font-bold text-xl'>{detail.title}</h2>
        <h4>{detail.description}</h4>
        <h4 className='font-bold text-xl text-[green]'>${detail.price}</h4>
        <NavLink to={"/cart"}><button onClick={()=>clk(detail)} className=' flex items-center justify-center w-[100px] bg-[green] text-white font-bold text-xl p-2'>BUY</button></NavLink>
      </div>
    </section>
  )
}

export default Detail;