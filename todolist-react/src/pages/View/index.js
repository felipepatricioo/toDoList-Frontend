import React,{ useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Api from '../../api/api';

const ViewById = () => {

    const { id } = useParams();

    const [notes, setNotes] = useState([]);

    const getNoteById = async () => {
        const request = await Api.fetchGetById(id);
        setNotes(await request.json());
    }

    const handleDelete = async () => {

        
        const noteBackup = { ...notes }
       

        console.log(noteBackup)

        const request = await Api.fetchDelete(id)
        const response = await request.json()
        setNotes(response);
        alert(response.message);
    }

    useEffect(() =>{
        getNoteById()
    }, []);

    return (
            <div>
                <p>
                   {notes.title}
               </p>
               <p>
                   {notes.description}
               </p>
               <p>
                   {notes.priority}
               </p>
               <p>
                   {notes.status}
               </p>
               <p>
                   {notes.deadline}
               </p>
               <div className=" d-flex flex-row-reverse  align-items-end mx-3 my-1">
                   <Link type="button" className="btn btn-danger mx-1" onClick={handleDelete} to={'/'}>Delete</Link>
                   <Link to={`/edit/${notes._id}`} className="btn btn-dark" >Edit</Link>
               </div>
            </div>
    )
}

export default ViewById
