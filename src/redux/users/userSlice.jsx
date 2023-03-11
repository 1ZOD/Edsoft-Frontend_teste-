import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: "1", name: 'Amanda',email: 'amanda@email.com'},
    { id: "2", name: 'john',email: 'john@email.com'}
];

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, action) =>{
            fetch('https://fakestoreapi.com/users',{
            method:"POST",
            body:JSON.stringify(
                {
                    email:'John@gmail.com',
                    username:'johnd',
                    password:'m38rmF$',
                    name:{
                        firstname:'John',
                        lastname:'Doe'
                    },
                    address:{
                        city:'kilcoole',
                        street:'7835 new road',
                        number:3,
                        zipcode:'12926-3874',
                        geolocation:{
                            lat:'-37.3159',
                            long:'81.1496'
                        }
                    },
                    phone:'1-570-236-7033'
                }
            )
        })
            .then(res=>console.log(res,"Resposta do Servidor Adicionado"))
            

        },
        editUser : (state, action) => {
            fetch('https://fakestoreapi.com/users/7',{
            method:"PUT",
            body:JSON.stringify(
                {
                email:'John@gmail.com',
                username:'johnd',
                password:'m38rmF$',
                name:{
                    firstname:'John',
                    lastname:'Doe'
                },
                address:{
                    city:'kilcoole',
                    street:'7835 new road',
                    number:3,
                    zipcode:'12926-3874',
                    geolocation:{
                        lat:'-37.3159',
                        long:'81.1496'
                    }
                },
                phone:'1-570-236-7033'
                }
            )
        })
            .then(res=>console.log(res,"Update Realizado"))

            fetch('https://fakestoreapi.com/users/7',{
                method:"PATCH",
                body:JSON.stringify(
                    {
                        email:'John@gmail.com',
                        username:'johnd',
                        password:'m38rmF$',
                        name:{
                            firstname:'John',
                            lastname:'Doe'
                        },
                        address:{
                            city:'kilcoole',
                            street:'7835 new road',
                            number:3,
                            zipcode:'12926-3874',
                            geolocation:{
                                lat:'-37.3159',
                                long:'81.1496'
                            }
                        },
                        phone:'1-570-236-7033'
                    }
                )
            })
                .then(res=>console.log(res,"Update Realizado"))

            const {id, name, email} = action.payload;
            const existingUser = state.find(user => user.id === id);
            if(existingUser){
                existingUser.name = name;
                existingUser.email = email;
            }
        },
        deleteUser: (state, action) => {
            const { id } = action.payload;
            fetch(`https://fakestoreapi.com/users/${id}`,{
            method:"DELETE"
            })
            .then(res=>res.json())
            .then(json=>console.log(json,"Detelado",id))


            // const existingUser = state.find(user => user.id === id);
            // if(existingUser){
            //     return state.filter(user => user.id !== id);
            // }
        }
    }
})

export const { addUser, editUser, deleteUser } = userSlice.actions
export default userSlice.reducer