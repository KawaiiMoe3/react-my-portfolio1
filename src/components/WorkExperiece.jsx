import React from 'react'
import { EXPERIENCES } from '../constants'

export default function WorkExperiece() {
  return (
    <div className='border-b border-neutral-900 pb4'>
      <h1 className='my-20 text-center text-4xl'>Work Experience</h1>
      <div>
        {EXPERIENCES.map((exp, index)=>(
            <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                <div className='w-full lg:w-1/4'>
                    <p className='mb-2 text-sm'>{exp.year}</p>
                </div>
                <div className='w-full max-w-xl lg:w-3/4'>
                    <h6 className='mb-2 font-semibold'>
                        {exp.role} - <span className='text-sm text-purple-400'>{exp.company}</span>
                    </h6>
                    <p className='mb-4 text-neutral-900'>
                        {exp.description}
                    </p>
                    {exp.technologies.map((tech, index)=>(
                        <span key={index} className='mr-2 mt-4 rounded bg-purple-400 px-2 py-1 text-sm font-medium text-white'>
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}
