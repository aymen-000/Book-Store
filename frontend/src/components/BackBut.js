import React from 'react'
import { Link } from 'react-router-dom'
import { BsArrowLeft } from 'react-icons/bs'

function BackBut({destination = '/'}) {
  return (
    <div className='flex p-4 '>
        <Link to={destination} className='bg-sky-800  text-white bx-4 by-1 rounded-lg w-fit hover:bg-sky-500'>
            <BsArrowLeft className='text-2xl w-10  h-10'/>
        </Link>
    </div>
  )
}

export default BackBut