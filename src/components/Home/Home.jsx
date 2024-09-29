import React, { useEffect, useState } from 'react'
import "./Home.css"
import { Link } from 'react-router-dom';
const Home = () => {

  const [exclaimation, setExclaimation] = useState("");

  useEffect(() => {
   const key = setInterval(controlExclaimation,700)

   return () => {
    clearInterval(key)
   }
  },[exclaimation])

  const controlExclaimation = () => {
    console.log(exclaimation)
    if(exclaimation.length == 0){
      setExclaimation('.')
    }else if(exclaimation.length == 1){
      setExclaimation('..')
    }else if(exclaimation.length == 2){
      setExclaimation('...')
    }else if(exclaimation.length == 3){
      return (
        setExclaimation(
        <>
          ...<span className='exclaimation-textShadow' >!</span>
        </>)
      );
    }else{
     setExclaimation("")
    }
  }


  return (
    <div className='flex justify-center items-center text-center ' >
       <div className='container  ' >
           <h1 className='home-title outlined-text' >
            Hi, I am <span className=' inline-block ' ><span className='fancy-letter relative top-1 ' >S</span>andesh</span> <span className=' inline-block ' ><span><span className='fancy-letter relative top-2' >K</span>andukuri</span><span className='exclaimation' >{exclaimation}</span></span>
           </h1>
           <h1 className='text-colour' > Full Stack Developer arrayed into range of technologies </h1>
           <div className='mt-4 flex justify-center  ' >
            <Link to={'/portfolio'} >
            <button className='p-3 home-btn flex justify-center items-center ' > <span className='home-btn-text' >See My Projects </span>
              <span class="material-symbols-outlined ml-2 home-arrow">
              arrow_forward
              </span>
            </button>
            </Link>
            <Link to={'./contactme'} >
            <button className='p-3 home-btn flex justify-center items-center ml-5 ' ><span className='home-btn-text' >Contact Me </span>
              <span class="material-symbols-outlined ml-2 home-arrow">
              arrow_forward
              </span>
            </button>
            </Link>
           </div>
       </div>

    </div>
  )
}

export default Home