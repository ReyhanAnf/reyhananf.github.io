import React from 'react';
import { motion, useMotionValue, useTransform, animate, calcLength } from "framer-motion";

function Skill() {
    const x = useMotionValue(0);
    const xInput = [-90, 0, 90];
    const opaciter = useTransform(x, xInput, [
        1,
        0.3,
        1
    ])
    const background = useTransform(x, xInput, [
        "linear-gradient(180deg, #ff008c 0%, rgb(211, 9, 225) 100%)",
        "linear-gradient(180deg, #7700ff 0%, rgb(68, 0, 255) 100%)",
        "linear-gradient(180deg, rgb(230, 255, 0) 0%, rgb(3, 209, 0) 100%)"
      ]);
  return (
    <motion.div className={`${opaciter} w-8/10 h-10 flex items-center justify-evenly gap-12 text-ctext py-2 px-1 bg-secondary ring-2 ring-primary rounded-4xl`}
    style={{
        opacity: opaciter,
    }}
    >
        <div>
            Variabel1
        </div>
        <div>
            Variabel2
        </div>
        <motion.div className='w-1/2 h-8 absolute rounded-full bg-primary text-secondary ring-1 ring-primary text-lg text-center items-center'
        style={{x}}
        drag='x'
        dragConstraints={{
            left:-90,
            right: 90,
            top: 0,
            bottom: 0,
        }}
        >
         Variabel
        </motion.div>
    </motion.div>
  )
}

export default Skill