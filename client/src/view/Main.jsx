import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
// import axios from 'axios';
import AuthorList from '../components/AuthorList';
import AuthorForm from '../components/AuthorForm';

const Main = (props) => {
    
    const [authorList, setAuthorList] = useState([]);
    const [errors, setErrors] = useState({})
    const navigate = useNavigate();

    // useEffect(() => {
    //     axios.get('http://localhost:8000/api/authors')
    //         .then(res => {
    //             setAuthorList(res.data)
    //         })
    //         .catch((err)=>console.log(err))

    //     }, [])

    // const removeFromDom = authorId => {
    //     axios.delete("http://localhost:8000/api/authors/" + authorId)
    //     .then((res)=>{
    //         console.log(res);
    //         console.log(res.data);
    //         const newAuthorList = authorList.filter((author) => author._id !== authorId)
    //         setAuthorList(newAuthorList);
    //     })
    //     .catch((err)=>console.log(err))
    // }

    // const createNewAuthor = authorParam => {
    //     axios.post('http://localhost:8000/api/authors', authorParam)
    //         .then(res => {
    //             console.log(res);
    //             console.log(res.data)
    //             setAuthorList([...authorList, res.data])
    //             navigate("/")
    //         })
    //         .catch((err)=>console.log(err))
    //         const errorResponse = err.response.data.errors; // Get the errors from err.response.data
    //             const errorArr = []; // Define a temp error array to push the messages in
    //             for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
    //                 errorArr.push(errorResponse[key].message)
    //             }
                // Set Errors
                // setErrors(errorArr);
        // axios.get('http://localhost:8000/api/authors')
    // }
    
    return (
        <div>
            <AuthorForm onSubmitProp={createNewAuthor} initialFirstName="" initialLastName="" authorList={authorList} setAuthorList={setAuthorList} setErrors={setErrors} errors={errors}/>
            <hr/>
            <AuthorList authorList={authorList}  setAuthorList={setAuthorList}  removeFromDom={removeFromDom}/>
        </div>
    )
}
export default Main;