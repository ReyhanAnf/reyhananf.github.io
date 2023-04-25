import React from 'react';
import { motion } from 'framer-motion';

function Buttoncard(props) {
    let items = props.items;
  return (
    <div className='flex flex-row flex-wrap w-full gap-4 justify-center my-2'>
        {items['title'].map((project, index) => {
        return (
            <motion.div layoutId={index} key={'a'+index} className='w-[45%] h-auto'
            onClick={()=>{
                props.setState(project)
            }}
            whileTap={{
                scale: 0.9
            }}
            >
                <div className='relative w-full'> </div>
                <div className={`flex flex-col w-full px-2 py-2 rounded-xl bg-gradient-to-bl from-secondary to-primarysm  text-secondary h-52`}>
                    <div className='w-full bg-secondaryxl rounded-xl h-1/2'> </div>
                    <div className='py-2'>
                        <div  className='font-bold'>
                            {project}
                        </div>
                        <div className='text-xs'>
                        {items['description'][index]}
                        </div>
                    </div>
               </div>
            </motion.div>            
            )  
        })}
    </div>
  )
}

export default Buttoncard