import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Api from "../../api/api";

const Edit = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const [note, setNote] = useState({
    title: "",
    description: "",
    priority: "",
    status: "",
    deadline: "",
  });

  const getNoteById = async () => {
    const request = await Api.fetchGetById(id);
    setNote(await request.json());
  };

  useEffect(() => {
    getNoteById();
  }, []);

  const handleFieldsChange = (event) => {
    const noteEdit = { ...note };

    noteEdit[event.target.name] = event.target.value;

    setNote(noteEdit);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const request = await Api.fetchPut(note, id);
    const response = await request.json();

    alert(response.message);
    navigate(`/${id}`);
  };

  return (
    <div className="container">
      <div className="card mt-4">
        <div className="card-title">
          <div className="row">
            <div className="col">
              <h2 className="mx-3 my-3">Register a new Note:</h2>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <div className="mb-3 mx-3 my-3">
              <label for="TextInput" className="form-label">
                Note Title
              </label>
              <span class="required">*</span>
              <input
                type="text"
                id="title"
                className="form-control"
                placeholder="Note Title"
                name="title"
                value={note.description}
                onChange={handleFieldsChange}
                required
              />
            </div>
            <div className="mb-3 mx-3 my-3">
              <label for="TextInput" className="form-label">
                Note Content
              </label>
              <span class="required">*</span>
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
              <label className="form-label">Priority (not required):</label>
              <div class="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  name="priority"
                  value="High"
                  id="flexRadioDefault1"
                  onChange={handleFieldsChange}
                />
                <label for="Radio" className="form-label">
                  High
                </label>
              </div>
              <div class="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  name="priority"
                  value="Medium"
                  id="flexRadioDefault1"
                  onChange={handleFieldsChange}
                />
                <label for="Radio" className="form-label">
                  Medium
                </label>
              </div>
              <div class="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  name="priority"
                  value="Low"
                  id="flexRadioDefault1"
                  onChange={handleFieldsChange}
                />
                <label for="Radio" className="form-label">
                  Low
                </label>
              </div>
            </div>
            <div className="mb-3 mx-3 my-3">
              <label className="form-label">Status (not required):</label>
              <div class="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  name="status"
                  value="To do"
                  id="flexRadioDefault1"
                  onChange={handleFieldsChange}
                />
                <label for="Radio" className="form-label">
                  To do
                </label>
              </div>
              <div class="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  name="status"
                  value="Doing"
                  id="flexRadioDefault1"
                  onChange={handleFieldsChange}
                />
                <label for="Radio" className="form-label">
                  Doing
                </label>
              </div>
              <div class="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  name="status"
                  value="Done"
                  id="flexRadioDefault1"
                  onChange={handleFieldsChange}
                />
                <label for="Radio" className="form-label">
                  Done
                </label>
              </div>
            </div>
            <div className="mb-3 mx-3 my-3">
              <label for="NumberInput" className="form-label">
                Deadline (days)
              </label>
              <input
                type="number"
                id="deadline"
                className="form-control"
                placeholder="Deadline (days)"
                name="deadline"
                min="1"
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
  );
};

export default Edit;
