import React, { useEffect, useState } from 'react'
import {motion, AnimatePresence} from 'framer-motion'

function Project(props) {
    const [selectedId, setSelectedId] = useState(null);
    let Projects = {
        'title': ['Predict News', 'Erentech', 'Text OCR', 'Converter File'],
        'description': ['Prediction a news is hoax or real',
                        'This is my sites, contain articles with niche product wireless',
                        'You can read text from image',
                        'Convert your document to pdf file',],
        'image': ['',
                '',
                '',
                '',]
    };

  return (
    <div id='project' ref={props.refApp}>
        <div className='text-primarysm font-bold my-2 '>
            Project
        </div>
    <div className='flex flex-row flex-wrap w-full gap-4 justify-center my-2'>
        {Projects['title'].map((project, index) => {
        return (
            <motion.div layoutId={index}  className={`${props.step ? 'opacity-1 translate-y-0' : 'opacity-0 translate-y-24'}  transition-all duration-1000 w-[45%] flex px-2 py-2 flex-col rounded-xl bg-gradient-to-bl from-secondary to-primarysm  text-secondary h-52`} onClick={() => setSelectedId(index)}>
                <div className='w-full bg-secondaryxl rounded-xl h-1/2'>

                </div>
                <div className='py-2'>
                    <div  className='font-bold'>
                        {project}
                    </div>
                    <div className='text-xs'>
                       {Projects['description'][index]}
                    </div>
                </div>
            </motion.div>
            
            
            )
        
        })}
    <AnimatePresence>
    {selectedId && (
        <motion.div layoutId={selectedId}  className={`${selectedId ? 'opacity-1' : 'opacity-0'} fixed top-1/3 duration-1000 backdrop:blur-xl transition-all w-[90%] flex px-2 py-2 flex-col rounded-xl bg-gradient-to-bl from-secondary to-primarysm  text-secondary h-96`} >
        <div className='w-full bg-secondaryxl rounded-xl h-1/2'>

        </div>
        <div className='py-2'>
            <div  className='font-bold'>
                {Projects['title'][selectedId]}
            </div>
            <div className='text-xs'>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, dignissimos!
            </div>
        </div>
        <motion.button onClick={() => setSelectedId(null)} className='bg-ctext rounded-full relative top-0 right-0 w-6'> X </motion.button>
    </motion.div>
    )}
    </AnimatePresence>
    </div>
    <div className='bg-secondarylg px-4 py-2 rounded-lg w-40 mx-auto text-primary my-8'> Masih Banyak..</div>
    </div>
  )
}

export default Project