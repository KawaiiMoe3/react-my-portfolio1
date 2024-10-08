import React from 'react'
import { PROJECTS } from '../constants'

export default function Projects() {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <h1 className='my-20 text-center text-4xl'>
        Projects
      </h1>
      <div>
        {PROJECTS.map((project, index) => (
            <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                <div className='w-full max-w-xl lg:w-3/4'>
                    <h6 className='mb-2 font-semibold'>{project.title}</h6>
                    <p className='mb-4'>{project.description}</p>
                    <div className='flex flex-wrap'>
                      {project.technologies.map((tech, index) =>(
                          <span key={index} className='mr-2 mb-2 rounded bg-purple-400 px-2 py-1 text-sm font-medium text-white'>
                              {tech}
                          </span>
                      ))}
                    </div>
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}
