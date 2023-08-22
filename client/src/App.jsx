import React, { useState, useEffect } from 'react'
// import { useNavigate } from "react-router-dom";
import axios from 'axios';
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
// import Main from './view/Main';
import AuthorList from './components/AuthorList'
import Update from "./components/Update";
import AuthorForm from './components/AuthorForm';

function App() {

  const [authorList, setAuthorList] = useState([]);
  const [errors, setErrors] = useState({})
  // const navigate = useNavigate();

  useEffect(() => {
      axios.get('http://localhost:8000/api/authors')
          .then(res => {
              setAuthorList(res.data)
          })
          .catch((err)=>console.log(err))

      }, [])

  const removeFromDom = authorId => {
      axios.delete("http://localhost:8000/api/authors/" + authorId)
      .then((res)=>{
          console.log(res);
          console.log(res.data);
          const newAuthorList = authorList.filter((author) => author._id !== authorId)
          setAuthorList(newAuthorList);
      })
      .catch((err)=>console.log(err))
  }

  // const createNewAuthor = authorParam => {
  //     axios.post('http://localhost:8000/api/authors', authorParam)
  //         .then(res => {
  //             // console.log(res);
  //             console.log(res.data)
  //             setAuthorList([...authorList, res.data])
  //         })
  //         .catch((err)=> {
  //           console.log(err);
  //           const errorResponse = err; // Get the errors from err.response.data
  //             const errorArr = []; // Define a temp error array to push the messages in
  //               for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
  //                   errorArr.push(errorResponse[key].message)
  //               }
  //               setErrors(errorArr);
  //         })
  //     navigate("/")
  // }

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<AuthorList  authorList={authorList}  setAuthorList={setAuthorList}  removeFromDom={removeFromDom}/>} path="/" default />
          <Route element={<AuthorForm initialFirstName="" initialLastName="" authorList={authorList} setAuthorList={setAuthorList} setErrors={setErrors} errors={errors}/>} path="/authors" />
          <Route element={<Update  authorList={authorList}  setAuthorList={setAuthorList}  removeFromDom={removeFromDom} initialFirstName="" initialLastName="" />} path="/authors/edit/:id" />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
