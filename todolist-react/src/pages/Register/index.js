import React from "react";
import Api from "../../api/api";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault();

    const title = event.target.title.value;
    const description = event.target.description.value;
    const priority = event.target.priority.value;
    const status = event.target.status.value;
    const deadline = event.target.deadline.value;

    const notes = {
      title,
      description,
      priority,
      status,
      deadline: parseInt(deadline),
    };

    const request = await Api.fetchPost(notes);
    const response = await request.json();

    if (response.error){
      alert(response.message);
    } else {
      alert(response.message);
      navigate("/");
    }

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
                required
              />
            </div>
            <div className="mb-3 mx-3 my-3">
              <label for="Select" className="form-label">
                Priority
              </label>
              <select className="form-select" id="priority" name="priority">
                <option disabled selected>
                  Priority
                </option>
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
                <option>None</option>
              </select>
            </div>
            <div class="mb-3 mx-3 my-3">
              <label for="Select" className="form-label">
                Status
              </label>
              <select className="form-select" id="status" name="status">
                <option disabled selected>
                  Status
                </option>
                <option>Not Done</option>
                <option>Doing</option>
                <option>Done</option>
                <option>None</option>
              </select>
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
              />
            </div>
            <div className=" d-flex flex-row-reverse  align-items-end mx-3 my-1">
              <Link to="/">
                <button type="button" className="btn btn-danger mx-1">
                  Cancel
                </button>
              </Link>
              <button type="submit" class="btn btn-dark">
                Submit
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;
