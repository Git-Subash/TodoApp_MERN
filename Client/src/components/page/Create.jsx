import { Button } from 'flowbite-react'
import  { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

 export const Create = () => {
     const [title ,setTitle] = useState()
     const [task ,setTask] = useState()
     const  navigate = useNavigate()
  
    const Submit =  (e) => {

      e.preventDefault();
       axios.post("http://localhost:3000/CreateTodo",{title ,task})
       navigate('/')
       .then(result => {
        console.log(result)
    }).catch(err => console.log(err))
     }
 
  return (
    <main className='flex justify-center h-[490px] mt-8  rounded-md  overflow-x-hidden ' > 
  <div className='bg-[#ffeeffb1] p-4 rounded-md'>
    <form onSubmit={Submit} >
      <label  className='text-black w-full'>Enter title</label>
      <input className='w-full my-4 text-black rounded-md' type="text"  name='title' placeholder="Title" onChange={(e) => setTitle(e.target.value)} required  />
      <label className='text-black w-full' >Enter task</label>
      <textarea className='w-full my-4 text-black rounded-md' onChange={(e) => setTask(e.target.value)}  placeholder="Add Your list here"
          cols="10"
          rows="10"
          type="text"
          name="task"
          required />
      <div className='flex gap-4'>
     <Button  className='bg-black' type='submit' > Submit </Button>
      <Link to='/'  > <Button className='bg-black  '>Back </Button> </Link>
      </div>
    </form>
    </div>

    </main>
  )
}
