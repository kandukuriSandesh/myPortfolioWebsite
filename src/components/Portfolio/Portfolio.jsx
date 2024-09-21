import React from 'react'
import PortfolioCard from '../sub-components/PortfolioCard/PortfolioCard.jsx';

import guardianImage from '../../assests/Images/guardianImage.png'
import smallcap from '../../assests/Images/smallcap.png'

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

  return (
    <div>
      <PortfolioCard data={portfolio1.data} title={portfolio1.title} link={portfolio1.link} description={portfolio1.description} img={portfolio1.img} />

      <PortfolioCard data={portfolio2.data} title={portfolio2.title} description={portfolio2.description} img={portfolio2.img} />
    </div>
  )
}

export default Portfolio