import React from 'react';
import { motion } from 'framer-motion'

function Bigcard(props) {
    const icontent = props.data['title'].indexOf(props.content);
  return (
    <div>
          <motion.div className='w-[100%] h-full absolute z-30 top-0'
          layout
          initial={{
            opacity: 0.1,
            scale: 0.1
          }}
          animate={{
            opacity: 1,
            scale: 1
          }}
          exit={{
            scale: 0,
            opacity: 0,
            translateY: -100
          }}
          >
                <div className='relative w-full'> </div>
                <div className={`goCard flex flex-col w-full px-2 py-2 rounded-xl bg-gradient-to-bl from-secondary to-primarysm  text-secondary`}>
                    <button onClick={()=>{props.setContent(null)}} className='absolute opacity-50 text-slate-200 text-2xl w-8 h-8 rounded-full right-5 top-5'>X</button>
                    <div className='w-full bg-secondaryxl rounded-xl h-2/3'> </div>
                    <div className='py-2'>
                        <div  className='font-bold'>
                            {props.data['title'][icontent]}
                        </div>
                        <div className='text-xs'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla cumque sunt deleniti.
                        </div>
                    </div>
               </div>
         </motion.div>       
    </div>
  )
}

export default Bigcard