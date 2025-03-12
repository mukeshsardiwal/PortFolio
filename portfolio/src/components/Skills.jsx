import React from 'react'
import { skills } from '../assets/assets'

const Skills = () => {
  return (
    <div className='bg-black text-white py-10 overflow-hidden'>
      {/* Skills Heading */}
      <div className='flex justify-center items-center mb-10'>
        <button className='bg-white text-black rounded-full font-bold px-10 py-3 tracking-wide shadow-lg'>
          SKILLS
        </button>
      </div>

      {/* Using Now Section */}
      <div className='mb-8'>
        <h3 className='text-2xl font-semibold text-center mb-6'>TechStack</h3>
        <div className='relative w-full overflow-hidden'>
          <div className='flex animate-slide items-center gap-10'>
            {
              // Duplicating the skills to create a continuous loop effect
              [...skills.UsingNow, ...skills.UsingNow].map((skill, index) => (
                <div key={index} className="flex flex-col items-center mb-4">
                  <img src={skill.image} alt={skill.name} className="w-14 h-14  mb-2 rounded-sm " />
                  <span className='p-2 text-sm font-sm'>{skill.name}</span>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills;
