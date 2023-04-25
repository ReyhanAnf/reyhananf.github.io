import React from 'react';
import Hrey from '../assets/hrey.jpg';
import { motion } from 'framer-motion'

function Highlight() {
  return (
    <div className='my-2 py-1'>
        <div className='font-bold text-primarysm'>
            Highlight
        </div>
        <div className='wrap w-[100%] h-40 rounded-xl bg-secondarylg my-2  overflow-scroll'>
            <motion.div className='flex flex-row w-[400%] h-full' layout>
                <div className='w-full h-full rounded-xl bg-secondarysm '>
                  <img src={Hrey} alt="" srcSet={Hrey} className='h-40 w-full object-none object-right'/>
                </div>
                <div className='w-full h-full rounded-xl bg-[#a5a5a5] '>
                <img src={Hrey} alt="" srcSet={Hrey} className='h-40 w-full object-none object-center' />
                </div>
                <div className='w-full h-full rounded-xl bg-red-500'>
                    <img src={Hrey} alt="" srcSet={Hrey} className='h-40 w-full object-none object-bottom'/>
                </div>
                <div className='w-full h-full rounded-xl bg-[#ccc]'>
                 <img src={Hrey} alt="" srcSet={Hrey} className='h-40 w-full object-none object-left'/>
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default Highlight