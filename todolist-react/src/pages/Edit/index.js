import React,{ useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from "react-router-dom";
import Api from "../../api/api";

const Edit = () => {

    const navigate = useNavigate();

    const { id } = useParams()

    const [note, setNote] = useState({
        title: '',
        description: '',
        priority: '',
        status: '',
        deadline: ''
    })

    const getNoteById = async () => {
        const request = await Api.fetchGetById(id)
        setNote(await request.json())
    }

    useEffect(() => {
        getNoteById()
    }, []);


    const handleFieldsChange = (event) => {
        const noteEdit = { ...note };

        noteEdit[event.target.name] = event.target.value;

        setNote(noteEdit);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        const request = await Api.fetchPut(note, id);
        const response = await request.json();

        alert(response.message);
        navigate(`/${id}`);
    }

    return (
    <div className="container">
      <div className="card mt-4">
        <div className="card-title">
          <div className="row">
            <div className="col">
              <h2 className="mx-3 my-3">Edit Note:</h2>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <div className="mb-3 mx-3 my-3">
              <label htmlFor="TextInput" className="form-label" >
                Note Title
              </label>
              <span className="required">*</span>
              <input
                type="text"
                id="title"
                className="form-control"
                placeholder="Note Title"
                name="title"
                onChange={handleFieldsChange}
                value={note.title}
                required
              />
            </div>
            <div className="mb-3 mx-3 my-3">
              <label htmlFor="TextInput" className="form-label">
                Note Content
              </label>
              <span className="required">*</span>
              <textarea
                type="text"
                id="description"
                className="form-control"
                placeholder="Note Content"
                name="description"
                value={note.description}
                onChange={handleFieldsChange}
                required
              />
            </div>
            <div className="mb-3 mx-3 my-3">
              <label htmlFor="Select" className="form-label">
                Priority
              </label>
              <select className="form-select" id="priority" name="priority" value={note.priority} onChange={handleFieldsChange}>
                <option disabled defaultValue>
                  Priority
                </option>
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
                <option>None</option>
              </select>
            </div>
            <div className="mb-3 mx-3 my-3">
              <label htmlFor="Select" className="form-label">
                Status
              </label>
              <select className="form-select" id="status" name="status" value={note.status} onChange={handleFieldsChange}>
                <option disabled defaultValue>
                  Status
                </option>
                <option>Not Done</option>
                <option>Doing</option>
                <option>Done</option>
                <option>None</option>
              </select>
            </div>
            <div className="mb-3 mx-3 my-3">
              <label htmlFor="NumberInput" className="form-label">
                Deadline (days)
              </label>
              <input
                type="number"
                id="deadline"
                className="form-control"
                placeholder="Deadline (days)"
                name="deadline"
                value={note.deadline}
                onChange={handleFieldsChange}
              />
            </div>
            <div className=" d-flex flex-row-reverse  align-items-end mx-3 my-1">
              <Link to={`/${note._id}`}>
                <button type="button" className="btn btn-danger mx-1">
                  Cancel
                </button>
              </Link>
              <button type="submit" className="btn btn-dark">
                Submit
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
    )
}

export default Edit
