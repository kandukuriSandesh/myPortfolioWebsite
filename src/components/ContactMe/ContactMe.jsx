import React from 'react'
import contactbg from '../../assests/Images/contactbg.png'
const ContactMe = () => {
  return (
    <div  className='container'>
        <div className="p-20 min-h-[200px] min-w-[300px] max-w-[100%] bg-cover bg-center " style={{ backgroundImage: `url(${contactbg})` }}  >
        <div className='flex gap-5 ' >
        <input
            type="name"
            class="w-full bg-[#0B1D33]  rounded-lg text-base font-normal py-[18px] px-[20px] h-[65px] placeholder:text-gray-300 focus:outline-none focus:ring-2  "
            placeholder="Enter name"
            />
        <input
            type="email"
            class="w-full bg-[#0B1D33] border border-[rgba(255,255,255,0.07)] rounded-lg text-white text-base font-normal py-[18px] px-[20px] h-[65px] focus:outline-none focus:ring-2 "
            placeholder="Enter email"
            />
        </div>

        </div>
    </div>
  )
}

export default ContactMe