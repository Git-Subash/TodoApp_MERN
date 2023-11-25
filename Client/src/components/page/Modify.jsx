import { Button ,Input ,Textarea,Typography,Card } from "@material-tailwind/react";
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
      
      axios.get("https://cosmic-lollipop-ad4b8b.netlify.app/getTodo/"+id)
      .then(result =>{ 
        console.log(result)
        setTitle( result.data.title)
        setTask( result.data.task)      
      })
      
      .catch(err => console.log(err))
     } ,[])

     const Update = (e) =>{
      e.preventDefault();
      axios.put("https://cosmic-lollipop-ad4b8b.netlify.app/UpdateTodo/"+id,{title ,task})
      navigate('/')
      .then(result => console.log(result)) 
      .catch(err => console.log(err))
    }

    
  return (
    <main 
  className='flex justify-center h-[490px]  mt-28 rounded-sm   overflow-hidden ' > 
  <Card  className='backdrop-blur-sm rounded-lg bg-white/30 p-4 w-[500px] ' shadow={false}>
    <form onSubmit={Update} >
    <Typography variant="h2" className="tracking-wide  flex   justify-center font-wal"  color="purple" >UPDATE LIST</Typography>
    <div className="mt-4">
      <label  className='text-black w-full'>Enter title</label>
      <div className='w-full my-4 text-black  rounded-md'>
      <Input  type="text" value={title}  label="Title" onChange={(e) => setTitle(e.target.value)} required  /></div>
      <label className='text-black w-full' >Enter task</label>
      <div className='w-full my-4  text-black  rounded-md'>
      <Textarea value={task} onChange={(e) => setTask(e.target.value)}  label="Add Your list here"
          rows={8}
          type="text"
          required /></div>
      <div className='flex gap-4 float-right'>
     <Button  className='px-[18px] ' type='submit' color="purple"  > Submit </Button>
      <Link to='/'  > <Button  className="px-4" color="purple" variant="text">Back </Button> </Link>
      </div>
      </div>
    </form>
    </Card>

    </main>
  )
}
