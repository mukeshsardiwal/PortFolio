import React from 'react'

const ContactMe = () => {
  return (
    <div className='bg-black text-white flex flex-col justify-center items-center py-10'>
      {/* Contact Button */}
      <button className='font-bold text-center rounded-full bg-white text-black px-8 py-3 mb-6'>
        CONTACT
      </button>

      {/* Form Section */}
      <div className='w-full max-w-md'>
        <form className='flex flex-col gap-4'>
          {/* Name Input */}
          <input 
            type="text" 
            placeholder="Your Name" 
            className='bg-gray-800 text-white rounded-full px-4 py-2 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500'
          />

          {/* Email Input */}
          <input 
            type="email" 
            placeholder="Your Email" 
            required
            className='bg-gray-800 text-white rounded-full px-4 py-2 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500'
          />

          {/* Phone Number Input */}
          <input 
            type="number" 
            placeholder="Your Phone Number" 
            minLength={10}
            required
            maxLength={10}
            min={0}
            className='bg-gray-800 text-white rounded-full px-4 py-2 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500'
          />

          {/* Message Textarea */}
          <textarea 
            placeholder="Your Message" 
            required
            cols="30" 
            rows="4" 
            className='bg-gray-800 text-white rounded-xl px-4 py-2 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500'
          ></textarea>

          {/* Submit Button */}
          <button 
            className='bg-blue-500 text-white rounded-full px-6 py-3 hover:bg-blue-600 transition-all' 
            type="submit">
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  )
}

export default ContactMe
