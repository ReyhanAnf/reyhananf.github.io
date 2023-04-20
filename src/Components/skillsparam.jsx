import React, { useState } from 'react'
import {
    Chart as ChartJS,
    LineElement,
    PointElement,
    Tooltip,
    Legend,
    RadialLinearScale,
    Filler
} from 'chart.js';
import { Radar } from 'react-chartjs-2'

ChartJS.register(
    LineElement,
    PointElement,
    Tooltip,
    Legend,
    RadialLinearScale,
    Filler
)


function Skillsparam(props) {
let [modeSkill, setModeSkill] = useState('skl1');

const data1 = {
    labels: ['Web Development', 'Data Science', 'Machine Learning', 'Design', 'Analysis', 'Deep Learning'],
    datasets: [{
        label: 'Now Skill',
        data: [7.5, 6.8, 6.5, 6.7, 5.5, 6],
        fill: true,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 99, 132)'
      },{
        label: 'Expected Skill',
        data: [7.5, 7.4, 7.45, 8.5, 7.4, 7.44],
        fill: true,
        backgroundColor: 'rgba(160, 255, 255, 0.2)',
        borderColor: 'rgb(160, 255, 255)',
        pointBackgroundColor: 'rgb(160, 255, 255)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(160, 255, 255)'
      }]
}

const data2 = {
  labels: ['Python', 'Javascripts', 'Excel', 'Figma', 'Tableau', 'Powerpoint'],
  datasets: [{
      label: 'Now Skill',
      data: [7, 6.9, 7.5, 7.7, 6, 7],
      fill: true,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgb(255, 99, 132)',
      pointBackgroundColor: 'rgb(255, 99, 132)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 99, 132)'
    },{
      label: 'Expected Skill',
      data: [8.5, 7.9, 8.45, 8, 8.5, 8],
      fill: true,
      backgroundColor: 'rgba(160, 255, 255, 0.2)',
      borderColor: 'rgb(160, 255, 255)',
      pointBackgroundColor: 'rgb(160, 255, 255)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(160, 255, 255)'
    }]
}

const options = {
    elements: {
        line: {
          borderWidth: 1,
          tension: 0,
          spanGaps: 1,
          borderColor: '#fff',
        },
      },
      scales : {
        r: {
          grid : {
            color : '#fff',
            beginAtZero: true,
            min: 0,
            max : 5,
          }
        }
      }
    }


function checkS(x){
  let y = modeSkill;
  let yq = document.querySelector('.'+y);
  let xq = document.querySelector('.'+x);
  let hq = document.querySelector('.hov');
  if(x == 'skl1'){
    hq.classList.remove('kanan')
    hq.classList.add('kiri')
    yq.classList.remove('active');
    xq.classList.add('active');
  }else if(x == 'skl2'){
    hq.classList.remove('kiri')
    hq.classList.add('kanan')
    yq.classList.remove('active');
    xq.classList.add('active');
  } 
  }

let data = '';

  return (
    <div ref={props.refApp} id='skills' className={`${props.step ? 'opacity-1 translate-y-0': 'opacity-0 translate-y-24'} skills transition-all delay-100 duration-700`}>
        <div className='text-primarysm font-bold'>
            Skills
        </div>
        <div className='flex rounded-lg justify-evenly my-3'>

          <div className='skl1 cursor-pointer px-2 py-1 text-sm  active' 
          onClick={()=>{
            setModeSkill('skl1');
            checkS('skl1');
          }}
          >Fondation</div>
          <div className='skl2 cursor-pointer px-2 py-1 text-sm'
           onClick={()=>{
            setModeSkill('skl2');
            checkS('skl2');
          }}
          >Tools & Others</div>

         


        </div>
        <div className='hov relative w-2/5 h-9 bg-primarysm rounded-lg -z-10 kiri'></div>
        <div className='wrap w-[100%] h-auto rounded-xl bg-secondary my-2 '>
            <div className=''>
           
              <Radar
              data = {modeSkill == 'skl1' ? data1 : data2}
              options={options}
              ></Radar>
                
            </div>
        </div>
    </div>
  )
}

export default Skillsparam