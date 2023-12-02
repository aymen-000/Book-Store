import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Loading from '../components/Loading'
import BackBut from '../components/BackBut'
import { useSnackbar } from 'notistack'
function EditBook() {
const [title , setTitle]= useState('')
const [author , setAuthor]= useState('')
const [Year , setYear]= useState('')
const [loading , setLoading] = useState(false)
const navigate = useNavigate()
const {enqueueSnackbar} = useSnackbar()
const {id}= useParams()
console.log("the id : " + id)
useEffect(()=>{
  setLoading(true)
  const link2 = "http://localhost:5555/books/" + id
  axios.get(link2).then((result)=>{
    setAuthor(result.data.renderBook.author)
    setYear(result.data.renderBook.Year)
    setTitle(result.data.renderBook.title)
    setLoading(false)
    enqueueSnackbar('book edited sucessfully', {variant : 'success'})
  }).catch((err)=>{
    setLoading(false)
    enqueueSnackbar('error you have some problemes', {variant : 'error'})
    console.log(err)
  })
  console.log('the data')
  console.log(Year , author , title)
}, [])
const link = "http://localhost:5555/books/"+id
const handleBook =()=>{
  const data = {
    title,
    author , 
    Year
  }
  setLoading(true)
  axios.put(link , data).then(()=>{
    setLoading(false)
    navigate('/')
  }
  ).catch((err)=>{
    setLoading(false)
    console.log(err.message)
  })
}

  return (
    <div>
      <div className='py-4 px-4'> 
      <BackBut/>
      <h1 className='text-2xl text-zinc-700 text-center my-2'> Edit A book</h1>
      {loading ? <Loading/> : ''}
      <div className='flex justify-center align-middle '>
        <div className='border-2 border-sky-700  p-4  w-1/3 rounded-xl max-md:w-full'>
          <div className='space-y-2  space-x-3'>
            <label>Title</label> <br/>
            <input className='border-2 border-slate-300 w-full rounded-md py-1 px-1' type='text' onChange={(e)=>setTitle(e.target.value)} value={title} required/>
          </div>
          <div className='space-y-2  space-x-3'>
            <label>Author</label><br/>
            <input className='border-2 border-slate-300 w-full rounded-md py-1 px-1' type='text' onChange={(e)=>setAuthor(e.target.value)} required  value={author}/>
          </div>
          <div className='space-y-2 space-x-3'>
            <label>Year</label><br/>
            <input className='border-2 border-slate-300 w-full rounded-md py-1 px-1' type='number' onChange={(e)=>setYear(e.target.value)} value={Year} required/>
          </div>
          <button className='w-full bg-sky-500/75 hover:bg-sky-500/90 rounded-lg p-2 m-2 self-center' onClick={handleBook} >Save</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default EditBook