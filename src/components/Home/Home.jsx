import React, { useEffect, useState } from 'react'
import "./Home.css"
const Home = () => {

  const [exclaimation, setExclaimation] = useState("");

  useEffect(() => {
   const key = setInterval(controlExclaimation,1000)

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
            Hi, I am <span className='fancy-letter relative top-1 ' >S</span>andesh <span className='fancy-letter relative top-2' >K</span>andukuri<span className='exclaimation' >{exclaimation}</span>
           </h1>
       </div>

    </div>
  )
}

export default Home