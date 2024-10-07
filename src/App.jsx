import { useEffect, useState } from 'react'
import { Navbar , Form , Blog } from './components/contants'
import {  BlogProvider  , useBlog } from './context'

function App() {
  const [ blogs , setBlogs] = useState(null)
  const [loading , setLoading]  = useState(true)
  const[re , setRe] = useState(0);

  const { ren } = useBlog();

  const fetchBlogs = () => {
      fetch('http://localhost:3000/blogs')
      .then(res => {
          return res.json();
      })
      .then(data => {
          setBlogs(data)
          setLoading(false)
      })
      .catch(er => {
          setLoading(true)
          console.log(er)
      })
      console.log(re)
  }

  useEffect(()=>{
          fetchBlogs();
  } , [re])

  const updateRen = (inc) => {
        setRe(inc)
  }

  // useEffect(() => {
  //   const interval = setInterval(fetchBlogs, 100); // Poll every 10 seconds
  //   return () => clearInterval(interval); // Cleanup interval on component unmount
  // }, []);

  return (
    <BlogProvider value={{ ren , updateRen }}>
   <>  
   <div className='w-[90%] mx-auto'>
      <Navbar />
      <Form />
      <Blog blogs={blogs} loading={loading} />
   </div>
    </>
    </BlogProvider>
  )
}

export default App
