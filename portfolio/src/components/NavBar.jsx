import React from 'react'


const NavBar = () => {
  return (
    <div className='border-b-2 border-purple-500'>
      <div className='bg-black h-[60px] w-full text-white'>
        <ul className=' flex flex-row justify-center mr-10 pt-3 items-center gap-8'>
            <li>About Me</li>
            <li>Skills</li>
            <li>Portfolio</li>
            <li><button className='bg-white text-gray-900 rounded-full font-semibold text-sm px-4 py-2.5'>CONTACT ME</button></li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar
