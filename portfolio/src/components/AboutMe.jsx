import React from 'react'

const AboutMe = () => {
  return (
    <div className='bg-black text-white pt-10 pb-16 flex justify-center items-center'>
      <div className='text-center max-w-2xl'>
        {/* Button */}
        <button className='text-black bg-white rounded-full font-bold px-10 py-3 tracking-wide transition-all duration-300 hover:bg-gray-300'>
          ABOUT ME
        </button>
        
        {/* About Me Description */}
        <p className='mt-8 text-gray-300 text-lg leading-relaxed'>
          I am a passionate Full-Stack Developer and Cybersecurity Enthusiast. My expertise lies in designing and developing web applications, ensuring they are secure and scalable. With hands-on experience in React, Node.js, and MongoDB, I love crafting robust solutions that solve real-world problems.
          In addition to development, I am deeply invested in web security, proficient in penetration testing, and vulnerability hunting, particularly focusing on IDOR issues and API security. My goal is to bridge the gap between secure, accessible web apps and dynamic user experiences.
        </p>
        
        {/* Skills */}
        <div className='mt-10'>
          <ul className='flex justify-center gap-6 text-xl font-semibold'>
            <li className='bg-gray-700 px-6 py-3 rounded-lg hover:bg-gray-600 transition-all duration-300'>
              Design
            </li>
            <li className='bg-gray-700 px-6 py-3 rounded-lg hover:bg-gray-600 transition-all duration-300'>
              Development
            </li>
            <li className='bg-gray-700 px-6 py-3 rounded-lg hover:bg-gray-600 transition-all duration-300'>
              Maintenance
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
