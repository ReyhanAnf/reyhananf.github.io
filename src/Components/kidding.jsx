import { useState, React } from 'react';
import Bigcard from './kiddings/bigcard';
import Buttoncard from './kiddings/buttoncard';
import { AnimatePresence, motion } from 'framer-motion';

function Kidding(props) {
    const [floatit, setFloatit] = useState(null);
    let kiddings = {
        'title': ['Chemistry Name Generator Test', 'Simple Calculator', 'Genetic Permutation', 'Drawing Tool'],
        'description': ['necessary in my class',
                        'Yeah, first try',
                        'Just text doing permutation',
                        'For my class task in school',],
        'image': ['',
                '',
                '',
                '',]
    };
  return (
    <div id='project' ref={props.refApp} className={`${props.step ? 'opacity-1 translate-y-0' : 'opacity-0 translate-y-24'}`}>
        <div className='text-primarysm font-bold my-2 '>
            Project
        </div>
        <Buttoncard state={floatit} setState={setFloatit} items={kiddings}/>
        <AnimatePresence>
            {floatit ? <Bigcard content={floatit} data={kiddings} setContent={setFloatit} /> : null}
        </AnimatePresence>

    <motion.div className='bg-secondarylg px-4 py-2 rounded-lg w-40 mx-auto text-primary my-8'>
         Masih Banyak...
    </motion.div>
    </div>
  )
}

export default Kidding