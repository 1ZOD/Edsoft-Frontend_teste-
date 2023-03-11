// import { useState } from "react"
import React from "react";
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import Button from "../../components/Button"
import TextField from "./TextField"
import { addUser } from "./userSlice"

const AddUser = () =>{
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleAddUser= ()=> {
        dispatch(addUser({}))
        navigate("/")
    }

    return (
        <div className="mt-10 max-w-xl mx-auto">
            <TextField
                label="Name"
                inputProps={{type: "text", placeholder:'Jhon Doe'}}
            />
            <br/>
            <TextField
                label="Email"
                inputProps={{type: "email", placeholder:'Jhondoe@gmail.com'}}
            />
            <Button onClick={handleAddUser}>Submit</Button>
        </div>
    )
}

export default AddUser