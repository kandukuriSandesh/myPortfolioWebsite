import React, { useContext } from 'react';
import './AboutMe.css'
import { toast } from 'react-toastify';
import { ToggleContext } from '../../context/ToggleContext/ToggleContext';
export const AboutMe = () => {

  const {isToggled} = useContext(ToggleContext);

  const handleResumeDownload = () => {
     toast.success('Resume Downloaded')
  }
  return (
    <div className='text-colour max-w-screen-1124 responsive-font ' >
      <div class='' >

      <button onClick={handleResumeDownload} className='mb-2 bg-reverse border border-solid border-[var(--background-color)] text-colour-reverse  border-r-50 rounded-full font-semibold block m-auto hover:scale-95 hover:shadow-[0_10px_20px_var(--text-color),0_6px_6px_var(--text-color)] transition-all duration-300 ' >
      <a className=' block p-4'  href="/SandeshResume.pdf" download>Download Resume</a>
      </button>


      <div className='container flex flex-col justify-center items-center border-page  p-2 after500:p-12 m-0.5 after500:m-3' >
      
      <h1 className='text-2xl below380:text-xl'>Sandesh Kandukuri</h1>
      <div >
        <div className='flex flex-col items-center justify-center lg:flex-row'>

        <span className='below380:text-sm'>
          kandukurisandesh1998@gmail.com <span className='invisible above770:visible font-extrabold '>/</span>
        </span>
        <a href="www.linkedin.com/in/sandesh-kandukuri-8288b7229" className='below380:text-sm'>
          &nbsp; www.linkedin.com/in/sandesh-kandukuri-8288b7229 <span className='invisible above770:visible font-extrabold '>/</span>
        </a>
        <div className='   below380:text-sm'>+44 7482474542</div>
        </div>
        <div className='mt-3 mb-3' >
          Accomplished Software Development Engineer with expertise in React, Node.js, JavaScript, Cloud technologies and Firebase. Skilled in state
management, user authentication, and responsive design. Demonstrates efficiency in optimizing development processes and enhancing user
experience. Dedicated to problem-solving and continuous learning, seeking to drive innovation in a forward-thinking tech environment.
        </div>
        <div className='mt-1' > 
          <h1 className='font-bold' >EDUCATION</h1>
          <hr className={isToggled?'border-0 h-0.5 bg-gray-500':''} />
          <div className='flex justify-between' >
            <div>
               <h2 className=' font-bold' >Masters of Computer Science</h2>
               <p className='mt-1' >York st John University, 1 CloveCres, London</p>
               <h2 className=' mt-1 font-bold' >Bachelors</h2>
               <p className='mt-1' >Bharath Institute of Technology, Ibrahimpatnam, Hyderababd</p>
            </div>
            <div>
               <p> January 2023 - January 2024 </p>
               <p> <span className='font-bold' >CGPA</span> 7.2/10 </p>
               <p><span className='font-bold' >Percentage:</span>76%</p>
            </div>
          </div>
        </div>
        <div className='mt-1' >
          <h1 className='font-bold' >SKILLS</h1>
          <hr className={isToggled?'border-0 h-0.5 bg-gray-500':''} />

          <div className='flex justify-between gap-5 500:flex-col ' >
            <div>
               <p className='mt-1' > <span className='font-bold' >Programming Language:</span> JavaScript, TypeScript, Node JS, SQL, Java </p>
               <p className='mt-1' > <span className='font-bold' >Web Dev:</span> HTML,CSS, Bootstrap,Tailwind CSS, Material UI, React Js Next JS. </p>
               <p className='mt-1' > <span className='font-bold' > Area of Interest: </span> Problem Solving, DSA, Analytical thinking   </p>
            </div>
            <div>
               <p className='mt-1' > <span className='font-bold' >Others:</span> MongoDB,  Firebase, Rest API, GraphQL, NextJS, React Query, Redux ToolKit  </p>
               <p> <span className='font-bold' >Tools:</span> Git, GitHub, VS Code, Sublime Text, Jira, Trello </p>
            </div>
          </div>
        </div>
        <div className="mt-1">
           <h1 className="font-bold"> WORK EXPERIENCE</h1>
           <hr className={isToggled?'border-0 h-0.5 bg-gray-500':''} />

           
           <div class=" ">
            <h2 class="font-bold">Software Development Engineer | 3NS.ai | London</h2>
            <h2 class="mt-2 font-semibold ">Crypto Price Project</h2>
            <p class="mb-2">May 2024 – Present</p>

            <ul class="list-disc pl-5 space-y-2">
                <li>Integrated LiveCoinWatch API for real-time cryptocurrency price data, enabling dynamic and customized tracking of price movements.</li>
                <li>Developed a backend API that requests analysis from ChatGPT API, displaying the analysis dynamically on the frontend.</li>
                <li>Implemented a color-coded UI that reflects price changes (increase or decrease) based on real-time API data.</li>
                <li>Designed, integrated, and rigorously tested authentication APIs for secure user login, including frontend UI development for authentication workflows.</li>
                <li>Created admin features allowing for editing and saving the analysis via the frontend, ensuring updated data is visible to all users.</li>
                <li>Developed an API for storing user profile pictures in AWS S3 and integrated it with the frontend for seamless image upload and display.</li>
                <li>Focused on frontend development to improve the user experience in price display, authentication, and admin interaction.</li>
            </ul>

            <p class=" mt-2 font-semibold ">Web3 Domain Project</p>
            <p class=" mb-2">March 2024 – Present</p>

            <ul class="list-disc pl-5 space-y-2">
                <li>Worked on Firebase Cloud Functions which interact with the web3 packages based on changes in the firestore collection.</li>
                <li> State management was accomplished using Redux Tool Kit allowing efficient handling of the data across application.</li>
                <li>Implemented user authentication and authorization using Firebase Authentication, ensuring secure access to application resources and
                personalized user experience.</li>
                <li>Developed Home Page, Log In/Sign Up pages with mobile first approach ensuring responsive design principles.</li>
                <li>Actively contributed to feature development and troubleshot UI and functionality issues, which led to a 50% reduction in the testing period in Product Development.</li>
                <li>Participated in career-growth workshops on emerging technologies and attended React conferences to stay updated with the latest developments.</li>
            </ul>
        </div>
        <div class=" mt-4 ">
            <h2 class="font-bold">2.Software Development Engineer | QuikieApps | Bangalore | India</h2>
            <p class=" mt-2 font-semibold ">Emergency Medical Services</p>
            <p class=" mb-4">June 2022 – Nov 2022</p>

            <ul class="list-disc pl-5 space-y-2">
                <li>Facilitated seamless interaction among Super Admin, Providers and Para-Medic Staff.</li>
                <li>Implemented Context API for efficient State Management, thereby greatly enhancing code maintainability and scalability.</li>
                <li>Leveraged Google Firebase as the preliminary database technology to minimize errors and later converted to GraphQL, Node, and MongoDB-based backend system.</li>
                <li>Implemented a Component Driven Architecture of React, creating reusable components for common use cases, resulting in a 40% decrease in development time and improved code maintainability.</li>
                <li>Actively contributed to feature development and troubleshot UI and functionality issues, which led to a 50% reduction in the testing period in Product Development.</li>
                <li>Participated in career-growth workshops on emerging technologies and attended React conferences to stay updated with the latest developments.</li>
            </ul>

            <p class=" mt-2 font-semibold "> Customer Support and job portal</p>
            <p class=" mb-4">January 2022 – June 2022</p>

            <ul class="list-disc pl-5 space-y-2">
                <li>Web-based application which streamlines communication between administrators, merchants, and customers.</li>
                <li>Designed the entire customer login and registration UI, managing a team of three developers with a mobile-first approach.</li>
                <li>Successfully integrated third-party APIs to automate UK address entry, minimizing registration time by 30%.</li>
                <li>Utilized Redux as a state management library, and implemented Redux Persist to enable seamless state rehydration, resulting in an enhanced user experience.</li>
                <li>Contributed significantly to the integration of customer login UI and functionality via API, managing JWT tokens for improved security and data protection.</li>
                <li>Integrated visually appealing icons and essential components from Material UI, boosting the overall user experience.</li>
            </ul>
        </div>
      </div>
    </div>
        <p className='mt-5' >1</p>
      </div>
      </div>

      <div className='container mb-10 after500:mb-10 flex flex-col justify-center items-center border-page  p-2 after500:p-12 m-0.5 after500:m-3 mt-5 ' >
      <div>

      <div class=" mt-4 ">
            <h2 class="font-bold">Programmer Analyst | Webmaazix | Hyderabad | India</h2>
            <p class=" mt-2 font-semibold ">E-commerce clothing project</p>
            <p class=" mb-4">January 2021 – December 2021</p>

            <ul class="list-disc pl-5 space-y-2">
              <li>Contributed to the development of a dynamic web application offering a diverse range of clothing for sale.</li>
              <li>Achieved streamlined state management through Redux implementation, resulting in a 25% decrease in bug resolution time.</li>
              <li>Utilized Selectors to enhance performance and mitigate unnecessary re-renders, improving application efficiency.</li>
              <li>Implemented Firebase User Authentication with a focus on Google Sign-In, which resulted in a 30% rise in user registration rates and a 25% decrease in bounce rates.</li>
              <li>Integrated third-party payment gateway providers, enhancing user experience and increasing transaction efficiency by 30%.</li>
              <li>Collaborated with senior UI developers to enhance design and implement code effectively.</li>
          </ul>
      </div>
      <div className='mt-4' >
        <hr className={isToggled?'border-0 h-0.5 bg-gray-500':''} />

        <h1 className='font-bold mt-2 ' >PERSONAL PROJECTS</h1>
        <div className='flex gap-4 500:flex-col' >
          <div>
            <h1 className='font-semibold  mt-2' >NewsPoint | React | HTML | CSS | Javascript </h1>
            <ul className=' list-disc pl-5 space-y-2' >
              <li>Developed a responsive user interface of news application using React framework ensuring seamless User Experience across devices and screen sizes </li>
              <li>Implemented features such as real-time news updates, search functionality, topic related news filter functionality to enhance user engagement.</li>
              <li>Deployed application in heroku web hoisting service.</li>
            </ul>
          </div>
          <div>
            <h1 className='font-semibold mt-2'>Rock Paper Scissor Game | HTML | CSS | Javascript</h1>
            <ul className='list-disc pl-5 space-y-2'>
              <li>Implemented game logic to handle player input and computer-generated choices, ensuring a seamless game flow and fair outcomes.</li>
              <li>Utilized Javascript event handling and DOM manipulation techniques to dynamically update game state.</li>
            </ul>
           </div>
        </div>
        <div className='flex gap-4 500:flex-col mt-5' >

          <div>
            <h1 className='font-semibold mt-2'>Leader of the House @ Bharath Institute of Technology </h1>
            <p className='text-sm'>June 2018 – April 2020 </p>
            <ul className='list-disc pl-5 space-y-2'>
              <li>Founded and headed the premier Cricket Fans Club.</li>
              <li>Won inter-college cricket tournament for the first time.</li>
              <li>Organized trivia and pick-up games for over 45 students weekly.</li>
              <li>Successfully transitioned the house to a powerhouse.</li>
              <li>Provided a discussion forum about technological developments.</li>
              <li>Managed a team of 15 members and created wonderful experiences for all.</li>
              <li>Led the team and participated in all sports events held in school.</li>
            </ul>
          </div>

          <div>
            <h1 className='font-semibold mt-2'> Sports Team Head @ Vijay Public School </h1>
            <p className='text-sm'> June 2011 – April 2013 </p>
            <ul className='list-disc pl-5 space-y-2'>
              <li>Managed a team of 15 members and created wonderful experiences for all.</li>
              <li>Lead the team and participated in all sports games held.</li>
            </ul>
          </div>

        </div>
      </div>
      <div className='mt-4' >
        <hr className={isToggled?'border-0 h-0.5 bg-gray-500':''} />

        <h1 className='font-bold mt-2 mb-2' >VOLUNTEERING</h1>
        <ul class="list-disc pl-5 space-y-2" >
          <li>
            <span class="font-semibold">QuikieApps, Bangalore, India:</span> Assisted the fresher junior developers who joined the company in learning and understanding the React documentation and explained to them about asynchronous behavior of Javascript in detail.
          </li>
          <li>
            <span class="font-semibold">Heart Blood Foundation, Hyderabad, Telangana:</span> Successfully organised the blood donation camp in partnership with the foundation and encouraged fellow students to donate blood by informing and motivating them about the benefits of donating blood.
          </li>
          <li>
            <span class="font-semibold">Bharath Institute of Technology, Version Control Presentation Volunteer:</span> Gave a crash-talk on version control, how to use it, and its importance.
          </li>
        </ul>
      </div>
      <div className='mt-4 mb-2' >
        <hr className={isToggled?'border-0 h-0.5 bg-gray-500':''} />

        <h1 className='font-bold mt-2' >ACHIEVEMENTS AND AWARDS</h1>
        <ul class="list-disc pl-5 space-y-2" >
          <li>
            <span class="font-semibold">Dilsukhnagar Public School - Merit Award:</span> (Awarded by the Principal@DPS to students who receive more than a 9.5/10 CGPA in 10th standard).
          </li>
          <li>
            <span class="font-semibold">Udemy - Certificate for Completion of The Full Stack Web Development:</span>
          </li>
          <li>
            <span class="font-semibold">Coursera - Certificate for Completion of Responsive Web Development and Design:</span>
          </li>
          <li>
            <span class="font-semibold">Merit-based Scholarship - £1000 - York St John University:</span>
          </li>
          <li>
            <span class="font-semibold">Centre for English Language Training - Osmania University - Certification for Completion of Personality Development Course:</span>
          </li>
          <li>
            <span class="font-semibold">NMDC Hyderabad Marathon:</span> Successfully participated and completed India’s second largest marathon in terms of participants.
          </li>
        </ul>
      </div>
      </div>
      <p className='mt-5' >2</p>
      </div>
    
    </div>
  );
}

