import React from "react";
import { useNavigate } from "react-router-dom"
import Button from "../../components/Button"
import { useDispatch } from "react-redux";
import TextField from "./TextField"
import { editUser } from "./userSlice";

const EditUser = () =>{
    const dispatch = useDispatch();
    
    const navigate = useNavigate();

    const handleEditUser= ()=> {
        dispatch(editUser({}))
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
            <Button onClick={handleEditUser}>Edit</Button>
        </div>
    )
}

export default EditUser