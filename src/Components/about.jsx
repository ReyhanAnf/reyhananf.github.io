import React from 'react'
import IG from '../assets/instagram.png'
import FB from '../assets/facebook.png'
import Git from '../assets/github.png'
import Email from '../assets/email.png'
import Rec from "../assets/react.svg"
import Tailw from "../assets/tailwind.png"
import Motion from "../assets/motion.png"
import Chart from "../assets/chartjs.png"

function About(props) {
    function link(x){
        window.location.href = x;
    }
  return (
    <div id='about' ref={props.refApp} className={`${props.step ? 'opacity-1 translate-y-0': 'opacity-0 translate-y-24'} transition-all delay-100 duration-700`}>
        <div className='text-primarysm font-bold text-lg'>About</div>
        <div className='text-sm my-2 p-2 text-ctext'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis inventore et repudiandae culpa, voluptatem praesentium corporis ea, incidunt, asperiores a dolorum nulla nostrum quas. Delectus ut ea fugit laboriosam libero sint modi quasi dignissimos neque earum perspiciatis, eligendi dolore a corrupti facere sunt explicabo unde ex debitis alias accusantium saepe!
        </div>
        <div>
            <div>
                <div className='text-primarysm font-bold text-lg'>
                    Find Me On
                </div>
            </div>
            <div className='flex justify-between my-4 py-2 px-3'>
                <div className='w-[8%]'>
                    <a href="https://www.instagram.com/@reyhan.anf_/"><img src={IG} alt="" srcSet={IG} /></a>
                </div>
                <div className='w-[8%]'>
                   <a href="https://web.facebook.com/reyhan.kenzem.9/?_rdc=1&_rdr"><img src={FB} alt="" srcSet={FB} /></a>
                </div>
                <div className='w-[8%]' >
                    <a href="https://github.com/reyhananf"><img src={Git} alt="" srcSet={Git} /></a>
                </div>
                <div className='w-[8%]'>
                    <a href="mailto:reihan676590@gmail.com"><img src={Email} alt="" srcSet={Email} /></a>
                </div>
               <a href="https://www.kaggle.com/reyhanandreafirdaus"> <div className='w-[8%]text-center flex items-center text-[#87DEE7] text-xl'>
                    Kaggle
                </div></a>
            </div>
        </div>
        <div>
            <div className='text-primarysm font-bold text-lg'>
                Web Technology
            </div>
            <div className='flex justify-between items-center my-4 py-2 px-3'>
                <div className='w-[12%]'>
                    <img src={Rec} alt="" srcSet={Rec} />
                </div>
                <div className='w-[12%]'>
                    <img src={Tailw} alt="" srcSet={Tailw} />
                </div>
                <div className='w-[12%]'>
                    <img src={Motion} alt="" srcSet={Motion} />
                </div>
                <div className='w-[12%]'>
                    <img src={Chart} alt="" srcSet={Chart} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default About