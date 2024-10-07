

const Blog = (props) => {
    

    return (
    <div className='w-full mt-4 p-2'>
        {
            props.loading ? <div>Loading....</div> : props.blogs.slice().reverse().map((blog) => {
                return <div key={blog.id} className='cursor-pointer active:scale-95 w-full p-2 px-4 my-4 rounded shadow-lg hover:bg-slate-300 transition-all duation-150 hover:rounded-md'>
                <h1 className='text-2xl py-2 font-bold text-gray-600'>{blog.title}</h1>
                <h2 className='text-xl py-2 font-semibold text-blue-500'>{blog.author}</h2>
                <p className='text-md font-normal py-4 text-gray-600 '>{blog.blog}</p>
        </div>
            })
        }
        
    </div>
  )
}

export default Blog