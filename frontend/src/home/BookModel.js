import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { BiUserCircle } from "react-icons/bi"
import { FaBook } from 'react-icons/fa'
import { FaRegUserCircle } from 'react-icons/fa'



function BookModel({ book, onClose }) {
    return (
        <div className=' bg-black bg-opacity-60 h-[100vh] w-[100vw] flex justify-center items-center fixed top-0 left-0 right-0 bottom-0' onClick={onClose}>
            <div onClick={(e)=>{e.stopPropagation()}}  className='w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex-col  fixed top-50  left-50 '>
                <AiOutlineClose className='absolute top-6 right-6 text-3xl text-red-600 cursor-pointer' onClick={onClose} />
                <div className='flex-col p-2 space-x-4'>
                    <p>{book._id}</p>
                    <div className='bg-orange-600 text-white rounded-lg p-1 mt-2 ml-1 w-fit'>{book.Year}</div>
                </div>
                <div className='flex space-x-3'>
                    <FaRegUserCircle className='text-red-400' />
                    <p className='text-1xl'>{book.author}</p>
                </div>
                <div className='flex space-x-3'>
                    <FaBook className='text-red-400' />
                    <p className='text-1xl'>{book.title}</p>
                </div>
                <p className='my-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>

            </div>
        </div>
    )
}

export default BookModel