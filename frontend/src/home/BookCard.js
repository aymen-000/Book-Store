import React from 'react'
import { FaRegUserCircle } from "react-icons/fa"
import { FaBook } from "react-icons/fa6"
import { IoMdInformationCircleOutline } from "react-icons/io"
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { Link } from 'react-router-dom';
import ShowBook from '../pages/ShowBook';
import BookModel from './BookModel';
import { BiShow } from 'react-icons/bi';
import { useState } from 'react';

function BookCard({books}) {
    const [item , setItem] = useState([])
    const  [show , setShow] = useState(false)
  return (
    <div>
    <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-col-4 gap-y-4 gap-x-4 ml-3'>
        {
            books.map((item)=>{
                return (
                <div className='border-2 border-sky-400 shadow-md rounded-lg p-4 w-fit hover:shadow-xl'>
                    <div className='flex justify-between p-2 space-x-4'>
                        <p>{item._id}</p>
                        <div className='bg-orange-600 text-white rounded-lg p-2'>{item.Year}</div>
                    </div>
                    <div className='flex space-x-3'>
                        <FaRegUserCircle className='text-red-400'/>
                        <p className='text-1xl'>{item.author}</p>
                    </div>
                    <div className='flex space-x-3'>
                        <FaBook className='text-red-400'/>
                        <p className='text-1xl'>{item.title}</p>
                    </div>
                    <div className='flex justify-between w-2/3 pl-20'>
                        <BiShow className='text-2xl text-sky-400 hover:text-black cursor-pointer' onClick={()=>{setShow(true) ; setItem(item)}}/>
                        <Link to={"books/details/" + String(item._id)}>
                            <IoMdInformationCircleOutline className='text-sky-700 hover:text-sky-400 text-2xl '/>
                        </Link>
                        <Link to={'/books/edit/' + String(item._id)}>
                            <CiEdit className='text-yellow-700 hover:text-yellow-400 text-2xl'/>
                        </Link>
                        <Link to={'/books/delete/' + String(item._id)}>
                            <MdDeleteOutline className='text-red-700 hover:text-red-400 text-2xl'/>
                        </Link>
                        
                    </div>    
                </div> 
                )
                
            })
        }
        {show && <BookModel book={item} onClose={()=>{setItem([]) ;  setShow(false)}}/>}
    </div>
    </div>
  )
}

export default BookCard