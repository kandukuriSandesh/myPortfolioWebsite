import React, { useRef } from 'react';
import contactbg from '../../assests/Images/contactbg.png';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_0dvys3s',  
        'template_81e1nzq',  
        form.current,
        {
          publicKey: 'DJuYAQsoC0dlhuZO3',
        }
      )
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          toast('Email sent successfully!');
        },
        (error) => {
          console.log('FAILED...', error.text);
          toast('Failed to send email. Please try again.');
        }
      );

    // Clear form fields after sending
    e.target.reset();
  };

  return (
    <div className='container  '>
      <div className='flex gap-5 sm:gap-32 flex-col sm:flex-row  justify-center items-center ' >
        <div className=' scale-125  '  >
          <a href="https://github.com/kandukuriSandesh" className='flex  gap-1 justify-center items-center' target="_blank" >
          <FaGithub />
          GitHub
          </a>
        </div>
        <div className=' scale-125  '  >
          <a href="https://linkedin.com/in/sandesh-kandukuri" className='flex  gap-1 justify-center items-center' target="_blank" >
          <FaLinkedin />
          Linkedin
          </a>
        </div>
        <div className=' scale-125  '  >
          <a href="" className='flex  gap-1 justify-center items-center' target="_blank" >
          <FaSquareXTwitter />
          X
          </a>
        </div>
      </div>
      <div
        className="p-4 sm:p-20 mt-10 min-h-[200px] min-w-[300px] max-w-[100%] bg-cover bg-center opacity-70"
        style={{ backgroundImage: `url(${contactbg})` }}
      >
        <form ref={form} onSubmit={sendEmail}>
          <div className='flex flex-col sm:flex-row  gap-5'>
            <input
              type="text"
              name="user_name"
              className="w-full bg-[#0B1D33] border border-[rgba(255,255,255,0.07)] rounded-lg text-white text-base font-normal py-[18px] px-[20px] h-[65px] focus:outline-none focus:ring-2"
              placeholder="Enter your Name"
              required
            />
            <input
              type="email"
              name="user_email"
              className="w-full bg-[#0B1D33] border border-[rgba(255,255,255,0.07)] rounded-lg text-white text-base font-normal py-[18px] px-[20px] h-[65px] focus:outline-none focus:ring-2"
              placeholder="Enter your Email"
              required
            />
          </div>
          <div className='mt-5'>
            <textarea
              name="message"
              className="w-full bg-[#0B1D33] border border-[rgba(255,255,255,0.07)] rounded-lg text-white text-base font-normal py-[18px] px-[20px] focus:outline-none focus:ring-2"
              placeholder="Enter your Message"
              style={{ height: '150px' }}
              required
            />
          </div>
          <div className='text-center'>
            <button
              type="submit"
              className='p-3 border border-[#61dafb] rounded-full mt-4 hover:text-[#61dafb] transition-colors duration-100 hover:border-none hover:shadow-[0_4px_15px_rgba(97,218,251,0.7)]'
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
