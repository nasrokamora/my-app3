"use client"

import { useReducer, useState } from "react"

export default function TodoList(){
    
    const [todos,setTodos] =  useState([])
    const [inputValue,setInputValue] = useState('')




    const handleInputChange = (e)=>{
        setInputValue(e.target.value)
    }
    const handleAddTodos = ()=>{
        setTodos([...todos, inputValue, ])
        setInputValue('')

    }
    const handleReset =()=>{
        setTodos(!todos)
    }

    const handleDeleteTodos = (index)=>{
        const newTodos = todos.filter((_,i) => i !== index)
        setTodos(newTodos)
    }


    return(
        <div className=" ">
            <div className=" text-3xl text-center m-4">
                <h1>Todos App</h1>
            </div>
            <div className=" flex justify-center items-center">
            <div className=" relative  bg-cyan-900 h-[30rem] gap-3 w-2/4  p-2 justify-center flex items-start rounded-md">
                <input type="text" className=" rounded-md text-black mt-1 focus-within:outline-orange-700" placeholder="Enter Todo" onChange={handleInputChange}  />
                <button className=" border p-1 rounded-md hover:border-orange-700 hover:text-yellow-500 transition-colors" onClick={handleAddTodos}>Add</button>
                <button className=" border p-1 rounded-md hover:border-orange-700 hover:text-yellow-500 transition-colors" onClick={handleReset}>Reset</button>
                </div>
                </div>
            {todos.map((todo,index)=>(
                <ul className="absolute">
                    <li key={index} className="  flex flex-col">
                        {todo}
                    </li>
                    <button type="button" onClick={()=>handleDeleteTodos(index)}>x</button>
                </ul>
            ))}
        </div>
    )
}