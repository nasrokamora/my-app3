"use client"

import { useReducer, useState } from "react"


export default function Todo() {
    const [todos,setTodos] = useState([])
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
    // const initialState = {
    //     todos: [],
    //     newTodos: ''
    // }

    // const reducer = (state, action) => {
    //     switch (action.type) {
    //         case 'ADD_TODO': return {
    //             ...state,
    //             todos: [...state.todos,
    //             { text: action.payload }],
    //             newTodos: ''
    //         }
    //         case 'DELETE_TODO': return {
    //             ...state,
    //             todos: state.todos.filter((_,todo) => todo.id !== action.payload)
    //         }
    //         case 'SET_NEW_TODO': return {
    //             ...state,
    //             newTodos: action.payload
    //         }
    //         case 'reset' : return initialState
    //         default: return state
    //     }
    // }


    // const handleReset = (e) => {
    //     dispatch({
    //         type: 'reset'
    //     })
    //     return state
    // }
    // const handlChange = (e) => {
    //     dispatch({
    //         type: 'SET_NEW_TODO',
    //         payload: e.target.value
    //     })
    // }
    // const handleAddTodos = () => {
    //     dispatch({
    //         type: 'ADD_TODO',
    //         payload: newTodos
    //     })
    // }
    // const handleDeleteTodos = (todo,id) => {
    //     dispatch({
    //         type: 'DELETE_TODO',
    //         payload: todo
    //     })
    // }
    // const [state, dispatch] = useReducer(reducer, initialState)
    // const { todos, newTodos } = state
    return (
        <div className="">
            <div className=" text-3xl text-center">
                <h1>Todos App</h1>
            </div>
            <div className="bg-cyan-700 h-[15rem] w-2/4 rounded-md ">

            <div className=" p-5 gap-4 flex justify-center ">
                <input placeholder="Enter Todo" className="text-black rounded-md" type="text" name="name"
                    onChange={handleInputChange} />
                <button className=" p-1 rounded-md bg-cyan-950 hover:bg-blue-600 hover:shadow-md hover:shadow-blue-600 hover:outline-blue-400 outline" onClick={handleAddTodos}>Add</button>
                <button className=" p-1 rounded-md bg-cyan-950 hover:bg-blue-600 hover:shadow-md hover:shadow-blue-600 hover:outline-blue-400 outline" onClick={handleReset}  type="reset" >Reset</button>
            </div>
            <ul className=" mt-4">

                {todos.map((todo,index) => (
                    <li kay={index} className=" flex justify-around items-center bg-slate-900 max-w">
                        {todo}
                        <button className=" bg-blend-darken" onClick={() => handleDeleteTodos(index)}>X</button>
                    </li>
                ))}
            </ul>
                </div>
        </div>
    )
}