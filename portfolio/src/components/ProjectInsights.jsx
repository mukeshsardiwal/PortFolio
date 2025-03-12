import React, { useState } from 'react'
import { assets, projects } from '../assets/assets'

const ProjectInsights = () => {
  // State to track the current project index
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0)

  // Function to handle next project
  const handleNextProject = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projects.length)
  }

  // Function to handle previous project
  const handlePreviousProject = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length)
  }

  // Function to handle direct dot click
  const handleDotClick = (index) => {
    setCurrentProjectIndex(index)
  }

  // Get the current project based on the index
  const currentProject = projects[currentProjectIndex]

  return (
    <div className='bg-gray-900 text-white p-6'>
      <h1 className='text-4xl font-bold mb-6'>Project Insights</h1>
      
      <div className='bg-gray-800 p-6 rounded-lg flex gap-4'>
    <div>
    <img 
          src={currentProject.image} 
          alt={currentProject.name} 
          className='w-[1200px] h-64 object-cover rounded-lg mb-4'  // Added object-cover for proper image fitting
        />
    </div>
       <div>
       <h2 className='text-3xl font-bold mb-2'>{currentProject.name}</h2>
       <p className='text-gray-300 mb-4'>{currentProject.description}</p>
       <p className='text-gray-300 mb-4'>{currentProject.technologies.join(', ')}</p>
       <a href={currentProject.link} target='_blank' rel='noopener noreferrer' className='text-blue-500 hover:text-blue-400'>View Project</a>
       </div>
      </div>

      {/* Dots for each project */}
      <div className='flex justify-center mt-6'>
        {projects.map((_, index) => (
          <div
            key={index}
            onClick={() => handleDotClick(index)} // Added onClick handler
            className={`w-3 h-3 mx-1 rounded-full cursor-pointer ${
              index === currentProjectIndex ? 'bg-blue-500' : 'bg-gray-500'
            } transition-all duration-300`}
          ></div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className='flex justify-between mt-6'>
        <button 
          onClick={handlePreviousProject} 
          className='flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700 transition-all duration-300'
        >
          <img src={assets.backarrow} alt="Previous" className='w-5 h-5' />
          Previous
        </button>

        <button 
          onClick={handleNextProject} 
          className='flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700 transition-all duration-300'
        >
          Next
          <img src={assets.arrow} alt="Next" className='w-5 h-5' />
        </button>
      </div>
    </div>
  )
}

export default ProjectInsights
