"use client"

import { useEffect, useReducer, useRef, useState } from "react"
import { GrSend } from 'react-icons/gr'
import { TbCubeSend } from 'react-icons/tb'


export default function FormContact() {

    const [submitted, setSubmitted] = useState(false)
    const initialState = {
        name: "",
        email: "",
        message: "",
        errors: {},
        submitted: false
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case 'input': return { ...state, [action.field]: action.value }
            case 'SET_ERRORS': return { ...state, errors: action.errors }
            case 'SET_SUBMITTED': return { ...state, submitted: action.submitted }
            case 'reset': return initialState
            default:
                return state

        }
    }
    const handleSubmit = (e) => {
        
        e.preventDefault()
        console.log(state)
        const errors = {}

        if (!state.name) {
            errors.name = "name is reuired"

        }
        if (!state.email) {
            errors.email = "Email is required"
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(state.email)) {
            errors.email = "Invalid email"
        }
        if (!state.message) {
            errors.message = "Message is required"
        } if (Object.keys(errors).length === 0) {
            dispatch({
                type: "SET_SUBMITTED", submitted: true
            })
            setTimeout(() => {
                setSubmitted(false)
                dispatch({
                    type: "reset"
                })
                
            }, 3000)
            setSubmitted(true)
        }
        else {
            dispatch({
                type: "SET_ERRORS", errors
            })
        }
    }



    const handleFormChange = (e) => {
        const { name, value } = e.target
        dispatch({
            type: "input",
            field: name, value
        })
        if (state.errors[name]) {
            dispatch({
                type: "SET_ERRORS",
                errors: {
                    ...state.errors,
                    [name]: ""
                }
            })
        }
    }
    const handleReset = (e) => {
        e.preventDefault()
        dispatch({ type: "reset" })
        return state
    }


    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <form onSubmit={handleSubmit} className=" flex flex-col gap-3 text-sm 2xl:text-lg">
                <label className="md:tracking-[0.1rem] text-slate-900" >Name:</label>
                <input required={true} style={{ border: state.errors.name ? "1px solid #8b0000" : "1px solid transparent" }}
                    type="text" name="name" onChange={handleFormChange} placeholder="Enter your name" value={state.name} className=" md:h-7 text-slate-900  border border-black rounded bg-[#f5b706] placeholder-shown:text-sm placeholder:text-slate-800 pl-1 xl:h-12 2xl:h-12  lg:h-8  shadow-md shadow-slate-700" />
                {state.errors.name && <p className=" text-[#8b0000] ">{state.errors.name}</p>}

                <label className="md:tracking-[0.1rem]" >Email:</label>
                <input style={{ border: state.errors.name ? "1px solid #8b0000" : "1px solid transparent" }}
                    type="text" name="email" onChange={handleFormChange} value={state.email} className=" 2xl:h-12 md:h-7 text-slate-900 shadow-md shadow-slate-700  border border-black rounded bg-[#f5b706] placeholder-shown:text-sm placeholder:text-slate-800 pl-1 xl:h-12 lg:h-8" placeholder="Enter your email" />
                {state.errors.email && <p className=" text-[#8b0000] ">{state.errors.email}</p>}

                <label className="md:tracking-[0.1rem]" > Message:</label>
                <input style={{ border: state.errors.name ? "1px solid #8b0000" : "1px solid transparent" }}
                    type="text" name="message" onChange={handleFormChange} value={state.message} className=" 2xl:h-12 text-slate-900 shadow-md shadow-slate-700  border border-black rounded bg-[#f5b706] placeholder-shown:text-sm placeholder:text-slate-800 pl-1 h-16" placeholder="Message" />
                {state.errors.message && <p className=" text-[#8b0000] "> {state.errors.message} </p>}

                <div className="button-form flex lg:justify-between items-center  justify-evenly ">

                    <button onClick={handleSubmit} className=" flex justify-between items-center shadow-md shadow-slate-950  border-[#f5b706] hover:shadow-md hover:shadow-slate-900  md:tracking-[0.09rem] border hover:border-[#f5b706] hover:bg-[#f5b706] hover:transition-colors hover:text-slate-950 p-1 rounded-lg text-sm bg-transparent">
                        Send <TbCubeSend className=" text-[1.5rem]" /> </button>

                    <button onClick={handleReset}
                        className=" shadow-md shadow-slate-950 md:tracking-[0.09rem] border-[#f5b706] hover:shadow-md hover:shadow-slate-900 border hover:border-[#f5b706] hover:bg-[#f5b706] hover:text-slate-950 p-1 rounded-lg text-sm md:hover:touch-pan-left"> Reset</button>
                </div>
                <div className=" flex justify-center items-center ">

                    {submitted && <p className=" md:text-[1.2rem] lg:text-[1.5rem] xl:text-[2rem] text-[#8b0000] flex justify-normal items-center">Thank you for your message </p>}
                </div>
            </form>
        </div>
    )
}