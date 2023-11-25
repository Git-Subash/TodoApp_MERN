import * as React from 'react';
import {Button ,Input ,Textarea,Typography,Card } from "@material-tailwind/react";
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
    <main  className='flex justify-center  font-pop h-[490px] mt-28  rounded-sm  overflow-hidden ' > 
  <Card  className='backdrop-blur-sm rounded-lg bg-white/30 p-4 w-[500px] ' shadow={false} >
    <form onSubmit={Submit} > 
      <Typography variant="h2" className="tracking-wide  flex   justify-center font-wal"  color="purple" >CREATE LIST</Typography>
      <div className="mt-4">
      <label  className='text-black w-full ' >Enter title</label>
      <div className='w-full my-4 text-black  rounded-md'>
      <Input  type="text"  name='title' label="Title"  onChange={(e) => setTitle(e.target.value)} required  /></div>
     
      <label className='text-black w-full' >Enter task</label>
      <div className='w-full my-4  text-black  rounded-md'>
      <Textarea onChange={(e) => setTask(e.target.value)}  label="Add Your list here"
          rows={8}
          name="task"
          required /></div>
          
      <div className='flex gap-4 float-right'>
     <Button  className='px-[18px] ' type='submit' color="purple"   >  Submit </Button>
   
      <Link to='/'  > <Button  className="px-4" color="purple" variant="text">Back </Button> </Link>
      </div>
      </div>
    </form>
    </Card>

    </main>
  )
}
