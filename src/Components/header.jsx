import React from 'react'
import Profil from './../assets/reyy.png'
import {motion} from 'framer-motion'

function Header(props) {
  return (
    <div ref={props.refApp} className='flex flex-row my-2 py-3 justify-between items-center w-full'>
      <motion.div className='myname'
      initial={{ opacity: 0, translateX: -100 }}
      animate={{ opacity: 1, translateX: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 50
      }}
      >
        <div className='text-xl font-sans font-bold sm:text-primary'>
          <span>
          Hi I'm 
          </span>
          <motion.span className='ml-1'
           initial={{ color: '#696969', scale: 2 }}
           animate={{ color: '#017365', scale: 1 }}
           transition={{
             type: "spring",
             stiffness: 260,
             damping: 50,
             delay: 1.3
           }}>
             Reyhan
          </motion.span>
        </div>
        <div className='text-sm -mt-2'>Lorem ipsum dolor sit.</div>
      </motion.div>
      <motion.div className='myphoto w-14 h-14 rounded-full ring-primary ring-2 scale-90'
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 50
      }}
      >
        <div>
        <img src={Profil} alt="" srcSet={Profil}/>
        </div>
      </motion.div>
    </div>
  )
}

export default Header
