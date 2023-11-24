import React  from 'react'
import {Link } from 'react-router-dom'
import {Minus,ClipboardEdit,   } from 'lucide-react'
import { useState ,  useEffect } from 'react'
import axios from 'axios'



function getDate () {
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  return `${date}/${month}/${year}`;
}

export const List = () => {

  const [todos ,setTodos] = useState([])

  useEffect( () => {
    axios.get('http://localhost:3000')
    .then( result => setTodos(result.data) )
    .catch(err => console.log(err))
  },[])
  
 const handleDelete = (id) => {
    axios.delete('http://localhost:3000/deleteTodo/'+id)
   
    .then( res =>{ 
      console.log(res)
      window.location.reload()
    })
    .catch(err => console.log(err))
     
 }

  return (
    <main >
    <div className=' w-full mt-20 flex align-middle justify-center  '>
    <Link to='/Create' className=' flex text-[#3d3b3b] bg-[#f8d4f8bb]  font-serif capitalize font-bold tracking-wider rounded-md  py-4  text-5xl px-24 text-center' >Todo App <span className=' text-4xl'>+</span></Link> 

    </div>
    <div className=' h-[490px] mt-8    rounded-md  overflow-x-hidden'>
   

       {/* Card */}
    { todos.map((todo) => (

     <div className='flex justify-center  '>
      <div className=' rounded-none mb-4  border-slate-500'>
      <div className='bg-[#fefe] py-8 text-[#000000c8]  '>
       <div className='flex justify-between'>
       <h2 className='pb-8 pl-8 text-lg font-pop font-extrabold tracking-wide '>{todo.title}</h2>
       <button onClick={(e) => handleDelete(todo._id)} className=' pr-8 pb-10 '> <Minus  /></button> 
       </div>
       <p className='pb-8 pl-8  text-md font-pop w-[450px] text-left'>{todo.task}</p>
       <div className='flex justify-between pr-8'>
       <h6  className='pl-8 pt-2  text-xs font-pop'>{getDate()}</h6>
       <Link to={`/Modify/${todo._id}`}> <ClipboardEdit /></Link>
       </div>
      </div>
      </div>
      </div>
    ))
}
 



   
    </div>
    </main>
  )
}
