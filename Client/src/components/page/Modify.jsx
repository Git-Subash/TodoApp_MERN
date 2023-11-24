import { Button } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'
import {useParams} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import { useEffect ,useState } from 'react'
import axios from 'axios'

 export const Modify = () => {
     const {id} = useParams()
     const [title ,setTitle] = useState()
     const [task ,setTask] = useState()
     const navigate =useNavigate()

     useEffect(() => {
      axios.get("http://localhost:3000/getTodo/"+id)
   
      .then(result =>{ 
        console.log(result)
        setTitle( result.data.title)
        setTask( result.data.task)      
      })
      
      .catch(err => console.log(err))
     } ,[])

     const Update = (e) =>{
      e.preventDefault();
      axios.put("http://localhost:3000/UpdateTodo/"+id,{title ,task})
      navigate('/')
      .then(result => console.log(result)) 
      .catch(err => console.log(err))
    }

    
  return (
    <main className='flex justify-center h-[490px] mt-8  rounded-md  overflow-x-hidden ' > 
  <div className='bg-[#ffeeffb1] p-4 rounded-md'>
    <form onSubmit={Update} >
      <label  className='text-black w-full'>Enter title</label>
      <input className='w-full my-4 text-black rounded-md' type="text" value={title}  placeholder="Title" onChange={(e) => setTitle(e.target.value)} required  />
      <label className='text-black w-full' >Enter task</label>
      <textarea className='w-full my-4 text-black rounded-md' value={task} onChange={(e) => setTask(e.target.value)}  placeholder="Add Your list here"
          cols="10"
          rows="10"
          type="text"
          
          required />
      <div className='flex gap-4'>
      <Button  className='bg-black' type='submit' > Submit </Button>
      <Link  to='/'  > <Button className='bg-black  '>Back </Button> </Link>
      </div>
    </form>
    </div>

    </main>
  )
}
