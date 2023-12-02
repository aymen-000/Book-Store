import React from 'react'
import { useEffect , useState  } from 'react'
import BackBut from '../components/BackBut'
import Loading from '../components/Loading'
import { useNavigate } from 'react-router-dom'
import { useSnackbar } from 'notistack'
import axios from 'axios'
function CreateBook() {
  const [title , setTitle] = useState('')
  const [author , setAuthor] = useState('')
  const [Year ,setYear]  = useState(0)
  const [loading , setLoading] = useState(false)
  const navigate = useNavigate()
  const {enqueueSnackbar} = useSnackbar()
  const handleBook = ()=>{
    const data = {
      title , 
      author , 
      Year 
    }
    console.log(data)
    setLoading(true)
    axios.post("http://localhost:5555/books", data).then(()=>{
      setLoading(false);
      enqueueSnackbar('Book Created succesfully' , {variant: "success"})
      navigate('/')
    }).catch((err)=>{
      setLoading(false)
      enqueueSnackbar('error we cant create a book due to some problemes ', {variant:'error'})
      console.log(err.message)
      console.log("err")
    })
  }
  return (
    <div className='py-4 px-4'> 
      <BackBut/>
      <h1 className='text-2xl text-zinc-700 text-center my-2'> Create a book</h1>
      {loading ? <Loading/> : ''}
      <div className='flex justify-center align-middle '>
        <div className='border-2 border-sky-700  p-4  w-1/3 rounded-xl max-md:w-full'>
          <div className='space-y-2  space-x-3'>
            <label>Title</label> <br/>
            <input className='border-2 border-slate-300 w-full rounded-md py-1 px-1' type='text' onChange={(e)=>setTitle(e.target.value)} required/>
          </div>
          <div className='space-y-2  space-x-3'>
            <label>Author</label><br/>
            <input className='border-2 border-slate-300 w-full rounded-md py-1 px-1' type='text' onChange={(e)=>setAuthor(e.target.value)} required/>
          </div>
          <div className='space-y-2 space-x-3'>
            <label>Year</label><br/>
            <input className='border-2 border-slate-300 w-full rounded-md py-1 px-1' type='number' onChange={(e)=>setYear(e.target.value)} required/>
          </div>
          <button className='w-full bg-sky-500/75 hover:bg-sky-500/90 rounded-lg p-2 m-2 self-center' onClick={handleBook} >Save</button>
        </div>
      </div>
    </div>
  )
}

export default CreateBook