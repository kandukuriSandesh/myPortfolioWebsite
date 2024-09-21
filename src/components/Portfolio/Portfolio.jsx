import React from 'react'
import PortfolioCard from '../sub-components/PortfolioCard/PortfolioCard.jsx';

import guardianImage from '../../assests/Images/guardianImage.png'

const Portfolio = () => {

  const portfolio2 = {data:[
    { name: 'Tailwind', value: 15 },
    { name: 'Neumorphism', value: 20 },
    { name: 'React', value: 35 },
    {name:'Firebase',value:30}
  ],
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
      <PortfolioCard data={portfolio2.data} description={portfolio2.description} img={portfolio2.img} />
    </div>
  )
}

export default Portfolio