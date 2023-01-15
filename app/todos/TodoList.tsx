import Link from 'next/link'
import React from 'react'
import { Todo } from '../../typings'

const fetchTodods = async() =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/')
    const todos: Todo[] = await res.json()
    // this console will get preneted in the IDE console not in browser
    console.log('this gets called in servoer side', todos)

    return todos
}


//in next 13 you can have asyn fucntional compoenent..
async function TodoList() {

    const todos = await fetchTodods()


  return (
    <div>
        {
            todos.map((item)=>(
                <p key={item.id}>
                    <Link href={`/todos/${item.id}`} >Todo: {item.id}</Link>
                </p>
            ))
        }
    </div>
  )
}

export default TodoList