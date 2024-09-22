import React from 'react'
import PortfolioCard from '../sub-components/PortfolioCard/PortfolioCard.jsx';

import guardianImage from '../../assests/Images/guardianImage.png'
import smallcap from '../../assests/Images/smallcap.png'
import rockpaperscissors from '../../assests/Images/rockpaperscissors.png'
import heatpumpdesign from '../../assests/Images/heatpumpdesign.png'

const Portfolio = () => {

  const portfolio1 = {
    data:[
      {name:'Bootstrap',value:'20'},
      {name:'React',value:'30'},
      {name:'Node',value:'30'},
      {name:'MongoDB',value:'20'}
    ],
    title:'Crypto Analysis and Trading Platform',
    link:'https://www.smallcap.ai/',
    img:smallcap,
    description:`This project is centered around a comprehensive cryptocurrency platform that provides users with real-time details on various cryptocurrencies, including price, volume, and market cap. Leveraging the capabilities of the OpenAI API, the platform offers in-depth analyses of each coin, helping users understand market trends and make informed investment decisions.
    In addition to current data, the platform forecasts future price movements, offering predictions across multiple time frames: 1 day, 7 days, and 1 month. This feature aims to empower users with insights that can influence their trading strategies.`
  }

  const portfolio2 = {data:[
    { name: 'Tailwind', value: 15 },
    { name: 'Neumorphism', value: 20 },
    { name: 'React', value: 35 },
    {name:'Firebase',value:30}
  ],
  title:'Healthcare-Oriented Event Management System',
  description:`This project is a comprehensive platform designed to streamline the coordination and management of healthcare services for events. 
            The system provides an intuitive interface for hospital service providers to offer their medical attendants and non-medical 
            staff to assist with event-related healthcare needs. The platform includes features for scheduling, staffing, and real-time 
            updates, ensuring that medical personnel are properly allocated and equipped to handle any emergencies or medical issues during
            events. Additionally, it facilitates communication between event organizers and healthcare providers, enhancing the efficiency
            and reliability of medical support at various events. This system aims to improve response times and optimize resource 
            allocation for large-scale events, contributing to better overall event safety and attendee care.`,
  link:'',
  img:guardianImage
};

const portfolio5 = {
  data:[
    { name: 'Material UI', value: 20 },
  { name: 'React', value: 40 },
  { name: 'Node', value: 40 },
  
],
title:'Heat Pump Designer',
description:`This project provides a comprehensive Heat Pump Designer service, covering all essential aspects of a successful heat pump installation. From selecting the correct ASHP (Air Source Heat Pump) based on the property’s specific heat demand, to generating MCS-certified heat loss calculations in line with EN 12831 standards, we ensure every detail is meticulously handled. Our services also include room-by-room heat loss and radiator sizing reports, noise assessments in accordance with MCS 020, and drafting DNO applications for installation compliance. Let us guide you through the design of an efficient and sustainable heating system.`,
link:'https://heatpumpdesigner.com/',
img:heatpumpdesign
};

const portfolio6 = {data:[
  { name: 'HTML', value: 100 },
  { name: 'CSS', value: 100 },
  { name: 'Javascript', value: 100 },
],
title:'Rock Paper Scissors',
description:`I've developed an interactive rock-paper-scissors game where two players can compete head-to-head. Each round, both players randomly generate either rock, paper, or scissors, and the winner of the round is awarded a point based on classic game rules: rock beats scissors, scissors beats paper, and paper beats rock. If both players choose the same value, the round results in a draw. The game continues until one player reaches 5 points, at which point they are declared the ultimate winner`,
link:'https://rockpaperscissors-eight-khaki.vercel.app/',
img:rockpaperscissors
};

  return (
    <div>
      <PortfolioCard data={portfolio1.data} title={portfolio1.title} link={portfolio1.link} description={portfolio1.description} img={portfolio1.img} />

      <PortfolioCard data={portfolio2.data} title={portfolio2.title} description={portfolio2.description} img={portfolio2.img} />

      <PortfolioCard data={portfolio5.data} title={portfolio5.title} description={portfolio5.description} img={portfolio5.img} />


      <PortfolioCard data={portfolio6.data} title={portfolio6.title} description={portfolio6.description} img ={portfolio6.img} />
    </div>
  )
}

export default Portfolio