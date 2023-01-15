import React from 'react'
import { Todo } from '../../../typings'

// type PageProps = {
//     params : {
//         todoid: string
//     }
// }
// {params:{todoid}}: PageProps

const fetchTodo = async(todoId) =>{
    //this only gets called in server - SSR
    // const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`)

    /*
    Next 13 - has updated fetch methods and removed
    Pass these parms to fetch method
    {cache: 'no-cache'} -> enforces SSR , by default
    {cache: 'force-cache'} -> enforces SSG
    {next:{revalidate:60}} -> ISR
    */
   //SSR and ISR won't work if you don't specify how to fetch initial data
   // in thi case, sould it fetch todo list 1-100 or all ?


    //await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`, {cache: 'no-cache'})
    //await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`, {cache: 'force-cache'})
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`, {next:{revalidate:60}})


    const todo: Todo = await res.json()
    // this console will get preneted in the IDE console not in browser
    console.log('this gets called in servoer side', todo)

    return todo
}

async function TodoPage({params:{todoid}}) {

    console.log('props', todoid)
    const todo = await fetchTodo(todoid)
    
  return (
    <div className='p-10 bg-yellow-200 border-2 m-2 shadow w-[30%] transform duration-500 hover:bg-black hover:text-white' >
        <p className='font-semibold text-xl ' >
            #{todo.id} : {todo.title}
        </p>
        <p className='bg-gray-500 text-yellow-50 p-5 inline-block rounded-3xl animate-pulse'>
            Completed: {todo.completed ? 'Yes' : 'No'}
        </p>
        <p className='border-t border-black mt-5 text-right'>
            By User: {todo.userId}
        </p>

    </div>
  )
}

export default TodoPage

//this runs on build time 
//it generates pages by pathParameters
export async function generateStaticParams() {

    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/`)
    const todos: Todo[] = await res.json()

    //prebuilding first few pages during build time 
    //this will make the loading faster for pages containing 1-10 todoids, since they will get cached during build time
    //but it will not generate pages for params above 10 + todoid
    const trommedTodos = todos.splice(0,10)

    return trommedTodos.map((data)=>({
        todoid: data.id.toString(),
    })

}