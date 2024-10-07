import React, { useState } from 'react'
import { useBlog } from '../../context'

const Form = () => {
    const[title , setTitle] = useState('')
    const[author , setAuthor] = useState('')
    const[blog , setBlog] = useState('')
    const[inc , setInc] = useState(1)
    // console.log(render)

    const { ren ,  updateRen } = useBlog();

    const update  = (e) => {
        e.preventDefault();
        updateRen(inc)
    }   

    const createBlog = (e) => {
        e.preventDefault();
        const sendBlog = {
            id : Date.now(),
            title : title,
            author : author,
            blog : blog
        }
        fetch('http://localhost:3000/blogs' , {
            method : 'POST',
            header : { 'Content-Type' : 'application/json'},
            body : JSON.stringify(sendBlog)
        })
        .then(res => {
            // if(res.ok){
            //     setInc(inc + 1)
            //     console.log(inc)
            // }
        })
        .then(data => console.log(data))
        .catch(err => console.log(err))
     
     
        setTitle('')
        setAuthor('')
        setBlog('')


        setTimeout(() => {
        setInc(inc + 1)
        console.log(inc)            
        }, 100);        
    }


  return (
    <div className='w-full mx-auto px-4  border shadow-lg '>
        <form action="#" className='flex flex-col'>
            <h1 className='text-center text-2xl pt-4 uppercase font-semibold text-blue-600'>Blog Fever</h1>
        <label htmlFor="title" className='p-2'>Title</label>
        <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} name='title' id='title' required className='p-2 border focus:outline outline-gray-600' placeholder='Enter title for blog' />

        <label htmlFor="author" className='p-2'>Author</label>
        <input type="text" onChange={(e) => setAuthor(e.target.value)} value={author} name='author' id='author' required className=' border p-2 focus:outline outline-gray-600' placeholder='Enter your Name' />

        <label htmlFor="blog" className='p-2'>Blog</label>
        <textarea name="blog" onChange={(e) => setBlog(e.target.value)} value={blog} id="blog"  required rows={5} className=' border p-2 resize-none focus:outline outline-gray-600'></textarea>
        <button type='submit' onClick={(e)=>{ 
            createBlog(e);
            update(e);
        }} className='bg-blue-600 py-[4px] rounded-sm my-[10px] text-white font-semibold text-xl hover:bg-white hover:text-blue-600 hover:border border-blue-600 transition-all duration-200'>Create Blog</button>
        </form>
    </div>
  )
}

export default Form