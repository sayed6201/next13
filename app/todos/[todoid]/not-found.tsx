import React from 'react'


//custom 404 page for todosPage
function NotFound() {
  return (
    <div className='mx-auto w-[50%] h-[300px] flex-column justify-center items-center shadow-2xl bg-slate-200'>
        <p className=' font-semibold font-serif text-blue-600 animate-pulse text-center'>
        404 not found 
        The todo page couldn't be found
       </p>
        
    </div>
  )
}

export default NotFound