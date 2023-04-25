import  { React, useState } from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import Buttoncard from './projects/buttoncard'
import Bigcard from './projects/bigcard';

function Project(props) {
    const [floatit, setFloatit] = useState(null);
    let projects = {
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
    <div id='project' ref={props.refApp} className={`${props.step ? 'opacity-1 translate-y-0' : 'opacity-0 translate-y-24'} transition-all duration-500`}>
        <div className='text-primarysm font-bold my-2 '>
            Project
        </div>
        <Buttoncard state={floatit} setState={setFloatit} items={projects}/>
        <AnimatePresence>
            {floatit ? <Bigcard content={floatit} data={projects} setContent={setFloatit} /> : null}
        </AnimatePresence>

    <motion.div className='bg-secondarylg px-4 py-2 rounded-lg w-40 mx-auto text-primary my-8'>
         Masih Banyak...
    </motion.div>
    </div>
  )
}

export default Project