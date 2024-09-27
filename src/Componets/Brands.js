import React from 'react'
import Subscribe from './Subscribe'

const Brands = () => {
  return (
    <section className='bg-gray-800 p-10'>
     
   <div className='w-full' >
    <h1 className='text-white font-bold text-center text-3xl' >Our Partners</h1>
   </div>
   <div className="flex flex-wrap justify-center pt-7 items-center text-white">
   <div  className='bg-green-700 w-48 h-28  flex justify-center items-center m-2 p-4 rounded-3xl'>
    <p className='text-2xl'>Zomato</p>
    </div>
    <div  className='bg-green-700 w-48 h-28  flex justify-center items-center m-2 p-4 rounded-3xl'>
    <p className='text-2xl '>Flipcart</p>
    </div> 
    <div  className='bg-green-700 w-48 h-28  flex justify-center items-center m-2 p-4 rounded-3xl'>
    <p className='text-2xl'>GrasryToday</p>
    </div> 
    <div  className='bg-green-700 w-48 h-28  flex justify-center items-center m-2 p-4 rounded-3xl'>
    <p className='text-2xl'>JustForYou</p>
    </div>
    <div  className='bg-green-700 w-48 h-28  flex justify-center items-center m-2 p-4 rounded-3xl'>
    <p className='text-2xl'>Zepto</p>
    </div>

   </div>

    </section>  
  )
}

export default Brands