import React from 'react';

export const AboutMe = () => {
  return (
    <div className='container flex flex-col justify-center items-center text-colour max-w-screen-lg m-3'>
      <h1 className='text-2xl below380:text-xl'>Sandesh Kandukuri</h1>
      <div >
        <div className='flex flex-col items-center justify-center above770:flex-row'>

        <span className='below380:text-sm'>
          kandukurisandesh1998@gmail.com <span className='invisible above770:visible'>/</span>
        </span>
        <a href="www.linkedin.com/in/sandesh-kandukuri-8288b7229" className='below380:text-sm'>
          &nbsp;www.linkedin.com/in/sandesh-kandukuri-8288b7229 <span className='invisible above770:visible'>/</span>
        </a>
        <div className='   below380:text-sm'>+44 7482474542</div>
        </div>
        <div className='mt-1' > 
          <h1 className='font-bold' >EDUCATION</h1>
          <hr />
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
          <hr />
          <div className='flex justify-between gap-5 ' >
            <div>
               <p className='mt-1' > <span className='font-bold' >Programming Language:</span> JavaScript, TypeScript, Node JS </p>
               <p className='mt-1' > <span className='font-bold' >Web Dev:</span> HTML,CSS, Bootstrap,Tailwind CSS, Material UI, React Js. </p>
               <p className='mt-1' > <span className='font-bold' > Area of Interest: </span> Problem SOlving, DSA, Analytical thinking   </p>
            </div>
            <div>
               <p className='mt-1' > <span className='font-bold' >Others:</span> MongoDB,  Firebase, Rest API, GraphQL, NextJS, React Query, Redux ToolKit  </p>
               <p> <span className='font-bold' >Tools:</span> Git, GitHub, VS Code, Sublime Text, Jira, Trello </p>
            </div>
          </div>
        </div>
        <div className="mt-1">
           <h1 className="font-bold"> WORK EXPERIENCE</h1>
           <hr />
           <div class=" ">
            <h2 class="font-bold">Software Development Engineer | QuikieApps | Bangalore | India</h2>
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
        </div>
        </div>
        <div className="mt-1">
           <h1 className="font-bold"> WORK EXPERIENCE</h1>
           <hr />
           <div class=" ">
            <h2 class="font-bold">Software Development Engineer | QuikieApps | Bangalore | India</h2>
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
        </div>
        </div>
      </div>
    </div>
  );
}

