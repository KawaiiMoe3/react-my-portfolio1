import React from 'react'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'

export default function Navbar() {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
        <div className='flex-1'></div>
        <div className='m-8 flex items-center justify-end gap-4 text-3xl'>
            <a href="https://www.linkedin.com/in/tan-jun-sam-936a8b315/" target='_blank'><FaLinkedin /></a>
            <a href="https://github.com/KawaiiMoe3" target='_blank'><FaGithub /></a>
        </div>
    </nav>
  )
}
