import React from 'react'
import { BsInfoCircle } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import {AiOutlineEdit} from "react-icons/ai"
import {MdOutlineAddBox, MdOutlineDelete} from "react-icons/md"
function BookTable({books}) {
    return (
        <div>
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead>
                    <tr className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <th className='px-6 py-3 max-md:hidden'>Number</th>
                        <th className="px-6 py-3">Title</th>
                        <th className='px-6 py-3 max-md:hidden'>Author</th>
                        <th className="px-6 py-3 max-md:hidden" >Puplish Year</th>
                        <th className='px-6 py-3'>Operation</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        books.map((item, index) => {
                            return <tr key={item._id} className='odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700'>
                                <td className='px-6 py-4 max-md:hidden'>{index + 1}</td>
                                <td className='px-6 py-4'>{item.title}</td>
                                <td className='px-6 py-4 max-md:hidden'>{item.author}</td>
                                <td className='px-6 py-4 max-md:hidden'>{item.Year}</td>
                                <td className='px-6 py-4'>
                                    <div className='flex justify-center gap-x-4'>
                                        <Link to={'/books/details/' + String(item._id)}>
                                            <BsInfoCircle className='text-2xl text-green-800 hover:text-green-600 ' />
                                        </Link>
                                        <Link to={'/books/edit/' + String(item._id)}>
                                            <AiOutlineEdit className='text-2xl text-yellow-800 hover:text-yellow-600' />
                                        </Link>
                                        <Link to={'/books/delete/' + String(item._id)}>
                                            <MdOutlineDelete className='text-2xl text-red-800 hover:text-red-600' />
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default BookTable