import React from 'react'
import Loading from '../components/Loading'
import { useEffect , useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'
import BookTable from '../home/BookTable'
import BookCard from '../home/BookCard'
import { MdOutlineAddBox } from 'react-icons/md'
function Home() {
  const [books , setBooks] = useState([])
  const [loading , setLoading] = useState(false)
  const [Type , setType] = useState('table')
  useEffect(()=>{
    setLoading(true)
    axios.get("http://localhost:5555/books").then((response)=>{
      setBooks(response.data)
      setLoading(false)
    }).catch(
      (err) =>{ 
        console.log(err)
        console.log("some error happen")
        setLoading(false)
    }
    )
  }, [])
  const handletable = ()=>{
    setType('table')
  }
  const handlecard  =()=>{
    setType('card')
  }
  console.log(books)
  return (
    <div className='p-4'>
      <div className='flex space-x-2 justify-center'>
        <button className='bg-sky-600 w-fit rounded-lg text-white p-2 hover:bg-sky-400 ' onClick={handletable}>Table</button>
        <button className='bg-sky-600 w-fit rounded-lg text-white p-2 hover:bg-sky-400' onClick={handlecard}>Card</button>
      </div>
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl my-8'>Book list</h1>
        <Link to='/books/create'>
          <MdOutlineAddBox className='text-sky-800 text-xl w-9 h-9 hover:text-sky-600'/>
        </Link>
      </div>
      {loading ? (
        <Loading />
      ) : (Type === 'table' ? <BookTable books={books}/> : <BookCard books={books}/>)}


    </div>
  )
}

export default Home