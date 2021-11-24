import React from "react";
import Api from "../../api/api";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

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

    if (response.error) {
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
              <span className="required">*</span>
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
              <span className="required">*</span>
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
              <label className="form-label">Priority (not required):</label>
              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  name="priority"
                  value="High"
                  id="flexRadioDefault1"
                />
                <label for="Radio" className="form-label">
                  High
                </label>
              </div>
              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  name="priority"
                  value="Medium"
                  id="flexRadioDefault1"
                />
                <label for="Radio" className="form-label">
                  Medium
                </label>
              </div>
              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  name="priority"
                  value="Low"
                  id="flexRadioDefault1"
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
                />
                <label for="Radio" className="form-label">
                  Doing
                </label>
              </div>
              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  name="status"
                  value="Done"
                  id="flexRadioDefault1"
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
              />
            </div>
            <div className=" d-flex flex-row-reverse  align-items-end mx-3 my-1">
              <Link to="/">
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

export default Register;
