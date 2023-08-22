import React, {useEffect} from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";
import DeleteButton from './DeleteButton';

const AuthorList = (props) => {
    const {setAuthorList, authorList, removeFromDom} = props;
    // const {authorList, setAuthorList} = props;
    // const navigate = useNavigate();
    
    useEffect(()=>{
        axios.get("http://localhost:8000/api/authors")
            .then((res)=>{
                console.log(res.data);
                setAuthorList(res.data);
	})
        .catch((err)=>{
            console.log(err.res);
        })
    }, [])

    // const removeFromDom = (authorId) => {
    //     const newAuthorList = authorList.filter((author) => author._id !== authorId)
    //         setAuthorList(newAuthorList)
    // })
    //         .catch(err=> console.log(err))
    // }

    return (
        <div>
            <h1>Favorite Authors</h1>
            <Link to ={`/authors`}>Add an author</Link>
            <h3>We have quotes by:</h3>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th scope='col'>Author</th>
                            <th scope='col'>Actions Available</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        authorList && authorList.map((author)=>{
                        return(
                            <tr key={author._id}>
                                <td>{author.firstName} {author.lastName}</td>
                                <td>
                                    <Link to={`/authors/edit/${author._id}`}>Edit</Link>
                                    <DeleteButton authorId={author._id} successCallback={()=> removeFromDom(author._id)}/>
                                </td>
                            </tr>
                        )})
                    }
                    </tbody>
                </table>
        </div>
    )
}
export default AuthorList;