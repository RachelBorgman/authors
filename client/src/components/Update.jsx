import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams, Link } from "react-router-dom";
import DeleteButton from './DeleteButton';
// import AuthorForm from '../components/AuthorForm';
// import AuthorList from './AuthorList';
// import DeleteButton from './DeleteButton';

const Update = (props) => {
    const {removeFromDom} = props;
    const { id } = useParams();
    const [authorFN, setAuthorFN] = useState("");
    const [authorLN, setAuthorLN] = useState("");
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState({});
    const [authorNA, setAuthorNA] = useState("")
    const navigate = useNavigate();
    // retrieve the current values for this person so we can fill
    // in the form with what is in the db currently
    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/' + id)
            .then(res => {
                console.log("this is the get response:", res)
                // setTitle(res.data.title);
                // setPrice(res.data.price);
                // setDesc(res.data.description);
                setAuthorFN(res.data.firstName)
                setAuthorLN(res.data.lastName)
                setLoaded(true);
            })
            .catch((err) => {
                console.log(err.response);
                setAuthorNA(`Author not available with input ID`);
            });
    }, []);

    const updateAuthor = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/authors/${id}`, {firstName: authorFN, lastName: authorLN}) 
            .then(res => {
                console.log("this is the put response:", res);
                navigate("/"); // this will take us back to the Main.js
            })
            .catch((err) => {
                console.log(err)
                setErrors(err)
            })
    }

    return (
        <div>
            <h1>Update Author</h1>
            {
            loaded && (
                <>
                    <form onSubmit={updateAuthor}>
                        {authorNA ? 
                            <>
                            <h3>{authorNA}</h3>
                            <Link to="/authors/new">Add Author</Link>
                            </>
                        : null }
                        <Link to="/">Author List</Link>
                        <div>
                            <label htmlFor='firstName'>First Name</label>
                            <input type="text" name="firstName" value={authorFN} onChange={ (e) => setAuthorFN(e.target.value)}/>
                            {errors.authorFN ? <p>{errors.firstName}</p> : null}
                        </div>
                        <br></br>
                        <div>
                            <label htmlFor='lastName'>Last Name </label>
                            <input type="text" name="lastName" value={authorLN} onChange={ (e) => setAuthorLN(e.target.value)}/>
                            {errors.authorLN ? <p>{errors.lastName}</p> : null}
                        </div>
                        <br></br>
                        <input type="submit" value="Submit" />
                    </form>
                    <DeleteButton authorId={id} successCallback={()=> removeFromDom(id)}/>
                </>
            )}
        </div>
    )
}
export default Update;