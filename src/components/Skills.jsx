import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { RiJavascriptLine } from "react-icons/ri";
import { FaPhp } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { AiOutlinePython } from "react-icons/ai";

export default function Skills() {
  return (
    <div className='border-b border-neutral-800 pb-24'>
      <h1 className='my-20 text-center text-4xl'>Skills</h1>
      <div className='flex flex-wrap items-center justify-center gap-4'>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
            <RiReactjsLine className='text-7xl text-cyan-500'/>
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
            <FaHtml5 className='text-7xl text-orange-600'/>
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
            <FaCss3 className='text-7xl text-blue-500'/>
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
            <RiJavascriptLine className='text-7xl text-yellow-400'/>
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
            <FaPhp className='text-7xl text-indigo-700'/>
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
            <SiMysql className='text-7xl text-blue-500'/>
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
            <FaGitAlt className='text-7xl text-orange-500'/>
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
            <AiOutlinePython className='text-7xl text-yellow-500'/>
        </div>
      </div>
    </div>
  )
}
