import React from 'react'
import { CONTACT } from '../constants'

export default function Contact() {
  return (
    <div className='border-b border-neutral-900 pb-20'>
      <h1 className='my-10 text-center text-4xl text-white'>
        My Contacts
      </h1>
      <div className='text-center tracking-tighter text-white'>
        <p className='my-4'>{CONTACT.address}</p>
        <p className='my-4'>{CONTACT.phoneNo}</p>
        <a href={`mailto:${CONTACT.email}`} className='border-b text-purple-400'>{CONTACT.email}</a>
      </div>
    </div>
  )
}
