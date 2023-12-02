import React from 'react'
import { useEffect , useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import BackBut from '../components/BackBut'
import Loading from '../components/Loading'
function ShowBook() {
  const [book , setBook] = useState([]) 
  const  [loading , setLoading] = useState(false)
  const {id} = useParams()
  useEffect(()=>{
    setLoading(true)
    const link = "http://localhost:5555/books/"+id
    console.log(link)
    axios.get(link).then((response)=>{
      setBook(response.data.renderBook)
      console.log(response.data.renderBook)
      setLoading(false)}).catch((err)=>{
        console.error(err)
        setLoading(false)
      })
  }, [])
  return (
    <div className="bg-img bg-fixed bg-center bg-no-repeat bg-cover bg-opacity-20 h-[100vh]">
      <BackBut />
      <h1 className='text-3xl my-4 '>Book Information</h1>
      {loading ? <Loading/> : 
          <div className='flex flex-col border-2 border-sky-800  rounded-xl w-fit p-4 mx-4 shadow-2xl align-middle'>
            <div className='my-4'>
              <span className='text-xl mr-4 text-gray-500'>ID</span>
              <span>{book._id}</span>
            </div>
            <div className='my-4'>
              <span className='text-xl mr-4 text-gray-500'>TITLE</span>
              <span>{book.title}</span>
            </div>
            <div className='my-4'>
              <span className='text-xl mr-4 text-gray-500'>AUTHOR</span>
              <span>{book.author}</span>
            </div>
            <div className='my-4'>
              <span className='text-xl mr-4 text-gray-500'>Publish Year</span>
              <span>{book.Year}</span>
            </div>
          </div>
       }
    </div>
  )
}

export default ShowBook