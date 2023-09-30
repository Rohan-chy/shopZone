import React from 'react'
import {NavLink } from 'react-router-dom';

const Body = ({search,dataFetch,loading}) => {
   
  return (
        <div className='grid grid-cols-4 mt-7 p-4'>
            { loading &&  <h1 className='text-center '>LOADING....</h1>}
            {
                dataFetch?.filter((value)=>{
                    return search==" "?value:value.title.toLowerCase().includes(search.toLowerCase());
                }).map((value,item)=>(
                    <div key={value.id} className=' flex flex-col justify-center items-center m-2 h-[350px] shadow shadow-gray-500 hover:scale-105' >
                        
                        <img src={value.image} alt="avatar"className='h-[200px] w-[200px]' />
                        <h3>${value.price.toFixed(2)}</h3>
                        <h3>{value.title}</h3>
                        <NavLink to={`/detail/${value.id}`} style={{background:"green",color:"white",padding:"5px",bottom:"0px"}}><button >ADD TO CART</button></NavLink>
                        
                        
                    </div>
                        
                ))
                
            }
           

        </div>
  )
}

export default Body;