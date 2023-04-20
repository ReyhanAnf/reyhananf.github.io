import React from 'react'
import {motion} from 'framer-motion'

function Kidding(props) {
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
    <div id='studied' ref={props.refApp}>
        <div className='text-primarysm font-bold my-2 '>
            Just Kidding Projects
        </div>
    <div className='flex flex-row flex-wrap w-full gap-4 justify-center my-2'>
        {kiddings['title'].map((kidding, index) => {
        return (

            <div className={`${props.step ? 'opacity-1 translate-y-0' : 'opacity-0 translate-y-24'}  transition-all delay-100 duration-1000 w-[45%] flex px-2 py-2 flex-col rounded-xl bg-gradient-to-bl from-secondary to-primarysm  text-secondary h-52`}>
                <div className='w-full bg-secondaryxl rounded-xl h-1/2'>

                </div>
                <div className='py-2'>
                    <div  className='font-bold'>
                        {kidding}
                    </div>
                    <div className='text-xs'>
                       {kiddings['description'][index]}
                    </div>
                </div>
            </div>

            )
        })}
        
    </div>
    <div className='bg-secondarylg px-4 py-2 rounded-lg w-40 mx-auto text-primary my-8'> Masih Banyak..</div>
    </div>
  )
}

export default Kidding