import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const AuthorForm = (props) => {
    const {setAuthorList, authorList, initialFirstName, initialLastName, setErrors, errors} = props;
    const [firstName, setFirstName] = useState(initialFirstName);
    const navigate = useNavigate();
    const [lastName, setLastName] = useState(initialLastName);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        // const newProduct = {title: title, price: price, description: description};
        // console.log("New Product: ", newProduct)
        axios.post('http://localhost:8000/api/authors', ({firstName, lastName}))
            .then(res => {
                    // console.log(res);
                console.log(res.data)
                setAuthorList([...authorList, res.data])
                })
            .catch((err)=> {
            console.log("this is the err:", err);
            console.log("this is the err.message:", err.message);
            const errorResponse = err.message; // Get the errors from err.response.data
                    // const errorArr = []; // Define a temp error array to push the messages in
                    //   for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    //     errorArr.push(errorResponse[key].message)
                    // }
            setErrors(errorResponse);
            navigate("/authors")
            })
        navigate("/")
            
    };

    return(
        <div>
            <h1>Add an Author</h1>
            <form onSubmit={onSubmitHandler}>
                <div>
                    <label>First Name</label>
                    <input type="text" name="firstName" value={firstName} onChange={ (e) => setFirstName(e.target.value)}/>
                    {errors.message ? <p>{errors.message}</p> : null}
                </div>
                <br></br>
                <div>
                    <label>Last Name </label>
                    <input type="text" name="lastName" value={lastName} onChange={ (e) => setLastName(e.target.value)}/>
                    {errors.message ? <p>{errors.message}</p> : null}
                </div>
                <br></br>
                    <input type="submit" value="Submit" />
            </form>
        </div>
    )
};

export default AuthorForm;