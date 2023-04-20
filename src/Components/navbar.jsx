import React from 'react'

function Navbar() {
    

  return (
    <div className='flex flex-row gap-3 justify-between items-center my-5 px-3'>
        
        <div className='w-[20%] font-semibold h-11 text-center py-2 bg-secondarysm rounded-xl cursor-pointer hover:text-primary active:text-primary hover:scale-105'>
            <a href="#skills">Skills</a>
        </div>
        <div className='w-[20%] font-semibold h-11 text-center py-2 bg-secondarysm rounded-xl cursor-pointer hover:text-primary active:text-primary hover:scale-105'>
            <a href="#project">Projects</a>
        </div>
        <div className='w-[20%] font-semibold h-11 text-center py-2 bg-secondarysm rounded-xl cursor-pointer hover:text-primary active:text-primary hover:scale-105'>
            <a href="#studied">Studied</a>
        </div>
        <div className='w-[20%] font-semibold h-11 text-center py-2 bg-secondarysm rounded-xl cursor-pointer hover:text-primary active:text-primary hover:scale-105'>
           <a href="#about">About</a>
        </div>
    </div>
  )
}

export default Navbar