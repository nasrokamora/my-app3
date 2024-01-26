"use client"

import { useState } from "react"


export default function TodoLists() {

    const [todos, setTodos] = useState([])
    const [inputValue, setInputValue] = useState('')

    //handler input value todos
    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }
    //handler limit
   
    //handler add todos
    const handleAddTodos = () => {
        if(inputValue.trim() !== ''){
            if (todos.length < 6) {
                setTodos([...todos,inputValue])
                setInputValue('')
            }
            return

}

    }
    //handler delete by id
    const handleDeleteTodos = (index) => {
        const newTodos = todos.filter((_, i) => i !== index)
        setTodos(newTodos)
    }

    //hendler reset todos
    const handleReset = (e) => {
        e.preventDefault()
        setTodos([])
    }
    return (
        <div className="cont ">
            <div className="title text-center text-3xl mt-4">
                <h1>Todos App</h1>
            </div>
            <div className=" w-full h-full flex justify-center items-center mt-5 ">
                <div className="  w-2/4 md:w-auto md:p-3 rounded-md bg-cyan-950 shadow-md shadow-slate-900    ">
                    <div className=" bg-cyan-500 space-x-5 pt-4 md:p-4 p-4 rounded-md flex justify-center shadow-md shadow-slate-900 ">

                        <input className="text-black border-black border 
                rounded-md focus-within:outline-red-700 shadow-md shadow-slate-900 "
                            type="text" placeholder="Enter Todos" onChange={handleInputChange} value={inputValue} />

                        <button onClick={handleAddTodos} type="button"
                            className=" border p-1 rounded-lg 
                hover:bg-transparent hover:text-[#] hover:border-[#06b6d4] 
                 duration-500 hover:scale-110 hover:bg-[#06b6d4] hover:shadow-md hover:shadow-slate-900">
                            Add</button>

                        <button onClick={handleReset} type="reset"
                            className=" border p-1 rounded-lg hover:bg-[#3b82ef] hover:text-[#]">Reset</button>

                    </div>
                    <ul className=" mt-4  ">
                        {todos.map((todo, index) => (
                            <div className=" bg-black m-4 rounded-md shadow-md shadow-slate-900  " key={index}>

                                <li  className=" flex justify-around p-1 items-center text-white bg-transparent backdrop:filter">{todo}
                                    <button className=" bg-[#83000c] w-[1.5rem] rounded-full hover:animate-pulse  "
                                        type="button" onClick={() => handleDeleteTodos(index)}>X</button>
                                </li>
                            </div>
                        ))}

                    </ul>
                </div>
            </div>
        </div>
    )
}