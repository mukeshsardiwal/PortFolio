import React from 'react'

const NavBar = () => {
  return (
    <div>
      <div className='bg-black h-[50px] w-full text-white'>
        <ul className=' flex flex-row justify-end mr-10 pt-3 items-center gap-8'>
            <li>About Me</li>
            <li>Skills</li>
            <li>Portfolio</li>
            <li><button className='bg-white text-gray-900 rounded-full font-semibold text-sm px-2 py-1'>CONTACT ME</button></li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar
