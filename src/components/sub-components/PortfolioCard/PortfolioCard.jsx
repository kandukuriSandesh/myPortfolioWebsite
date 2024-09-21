import React, { useState } from 'react'

import guardianImage from '../../../assests/Images/guardianImage.png'
import BarChart from '../BarChart/BarChart'

const PortfolioCard = ({img,description,data,link}) => {

  const [hide,setHide] = useState(true)
  
  return (
    <div className='flex p-5 flex-col lg:flex-row container gap-5 transition-transform transform hover:scale-105 border border-[#61dafb] shadow-[0_4px_15px_rgba(97,218,251,0.9)] rounded-lg overflow-hidden' >
        <div className='max-w-[300px]' >
           <img className=' min-h-[200px] min-w-[300px] max-w-[100%] object-cover h-auto' src={img} alt="" /> 
        </div>
        <div className='flex items-start justify-between text-colour border-l-2 border-r-2 border-gray-300 px-4 py-2'>
        <div className='flex-grow'>
          <h1 className='font-bold text-lg'>
            Healthcare-Oriented Event Management System 
            <button className='text-base bg-reverse text-colour-reverse rounded-full ml-2'>
              <a className='p-2' href={link}>Live Link</a>
            </button>
          </h1>
          <p>
            {description}
          </p>
        </div>
      </div>
      
       <div className={`min-w-[300px] min-h-[240px] ${hide ? "flex justify-center items-center" : ''}`}>
         <div>

          <button className={`font-semibold text-colour transition-opacity duration-1000 ease-in-out ${hide ? '':'hidden' }  `} onClick={() => setHide(false)}>
            <span>View</span> my Technology contribution breakdown 
          </button>
         </div>
          <div  className={`text-center mt-2 max-w-[300px] transition-opacity duration-1000 ease-in-out ${hide ? 'opacity-0 h-0 w-0 overflow-hidden' : 'opacity-100 h-auto'}`}>
            <BarChart data={data} />
            <button className='mt-2 pl-2 pr-2 text-base font-bold bg-reverse text-colour-reverse rounded-full ml-2' onClick={() => setHide(true)}>Hide</button>
          </div>
       </div> 
      
    </div>
  )
}

export default PortfolioCard