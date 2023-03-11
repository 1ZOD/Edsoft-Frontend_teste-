import React from "react";
import { useNavigate } from "react-router-dom"
import Button from "../../components/Button"
import { useDispatch } from "react-redux";
import TextField from "./TextField"
import { editUser } from "./userSlice";

const EditUser = () =>{
    // const params = useParams();
    const dispatch = useDispatch();

    // const users = useSelector(store => store.users)
    
    const navigate = useNavigate();
    // const existingUser = users.filter(user => user.id === params.id)
    // const { name, email} = existingUser[0];
    // const [values, setValues] = useState({
    //     name,
    //     email
    // });

    const handleEditUser= ()=> {
        // setValues({name: '', email:''})
        dispatch(editUser({}))
        navigate("/")
    }

    return (
        <div className="mt-10 max-w-xl mx-auto">
            <TextField
                label="Name"
                // value= ""
                inputProps={{type: "text", placeholder:'Jhon Doe'}}
            />
            <br/>
            <TextField
                label="Email"
                // value= ""
                inputProps={{type: "email", placeholder:'Jhondoe@gmail.com'}}
            />
            <Button onClick={handleEditUser}>Edit</Button>
        </div>
    )
}

export default EditUser