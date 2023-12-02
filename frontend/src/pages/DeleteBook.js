import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect , useState } from 'react'
import axios from 'axios'
import {  useNavigate } from 'react-router-dom'
import Loading from '../components/Loading'
import BackBut from '../components/BackBut'
import { useSnackbar } from 'notistack'
function DeleteBook() {
  const [loading , setLoading] = useState(false)
  const navigate = useNavigate()
  const {id} = useParams()
  const {enqueueSnackbar} = useSnackbar()
  const handledeletebook = ()=>{
    setLoading(true)
    const link = "http://localhost:5555/books/" + id
    axios.delete(link).then(()=>{
      setLoading(false)
      enqueueSnackbar('book deleted sucessfuly', {variant: 'success'})
      navigate("/")
    }).catch((err)=>{
      setLoading(false)
      enqueueSnackbar('error we can not delete this book ' , {variant : 'error'})
      console.log(err.message)
    })
  }
  return (
    <div>
      <BackBut/>
      <h1 className='text-3xl p-2'>Delete A Book</h1>
      {loading ? loading :
      <div className='flex  justify-center pt-5'>
          <div className='flex-col border-2 border-sky-600 p-4 w-[40vw] align-middle space-y-3'>
            <p className='text-center'>Are You Sure You Want To Delete THis Book ?</p>
            <div className='text-center'>
              <button className='bg-red-600 text-white p-3 text-center hover:bg-red-400' onClick={handledeletebook}>Yes , Delete it </button>
            </div>
          </div>  
      </div> 
          }
    </div>
  )
}

export default DeleteBook