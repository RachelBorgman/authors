import React from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const DeleteButton = (props) => {
    const { authorId, successCallback } = props;
    const navigate = useNavigate();
    const deleteAuthor = e => {
        axios.delete('http://localhost:8000/api/authors/' + authorId)
            .then(res=>{
                successCallback();
                navigate("/");
            })
    }
    return (
        <button onClick={deleteAuthor}>
            Delete
        </button>
    )
}
export default DeleteButton;