import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Api from "./../../../../src/api/api"


const ListNotes = () => {

    const [notes, setNotes] = useState([])

    const getNotes = async () => {
        const request = await Api.fetchGetAll()
        setNotes(await request.json())
    }

    useEffect(() => {
        getNotes();
    }, [])

    return (
       notes.map((note) => (
           <Link to={`/${note._id}`} key={note._id}>
               <p>
                   {note.title}
               </p>
               <p>
                   {note.description}
               </p>
               <p>
                   {note.priority}
               </p>
               <p>
                   {note.status}
               </p>
               <p>
                   {note.deadline}
               </p>
           </Link>
    ))
    )
}

export default ListNotes
