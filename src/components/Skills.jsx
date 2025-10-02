import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { FaHtml5, FaCss3, FaPhp, FaGitAlt, FaLaravel } from "react-icons/fa";
import { FaPython } from "react-icons/fa6";
import { RiJavascriptLine } from "react-icons/ri";
import { SiMysql, SiDjango } from "react-icons/si";

export default function Skills() {
  return (
    <div className="border-b border-white pb-24">
  <h1 className="my-20 text-center text-4xl text-white">Skills</h1>

  {/* Responsive Grid */}
  <div className="mx-auto max-w-screen-lg grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center">
    <div className="rounded-2xl border-4 border-neutral-300 p-4">
      <FaHtml5 className="text-7xl text-orange-600" />
    </div>
    <div className="rounded-2xl border-4 border-neutral-300 p-4">
      <FaCss3 className="text-7xl text-blue-500" />
    </div>
    <div className="rounded-2xl border-4 border-neutral-300 p-4">
      <RiJavascriptLine className="text-7xl text-yellow-400" />
    </div>
    <div className="rounded-2xl border-4 border-neutral-300 p-4">
      <FaPython className="text-7xl" style={{ color: "#3776AB" }} />
    </div>
    <div className="rounded-2xl border-4 border-neutral-300 p-4">
      <RiReactjsLine className="text-7xl text-cyan-500" />
    </div>
    <div className="rounded-2xl border-4 border-neutral-300 p-4">
      <SiDjango className="text-7xl text-green-500" />
    </div>
    <div className="rounded-2xl border-4 border-neutral-300 p-4">
      <FaLaravel className="text-7xl text-red-500" />
    </div>
    <div className="rounded-2xl border-4 border-neutral-300 p-4">
      <FaPhp className="text-7xl text-indigo-700" />
    </div>
    <div className="rounded-2xl border-4 border-neutral-300 p-4">
      <SiMysql className="text-7xl text-blue-500" />
    </div>
    <div className="rounded-2xl border-4 border-neutral-300 p-4">
      <FaGitAlt className="text-7xl text-orange-500" />
    </div>
  </div>
</div>


  )
}
