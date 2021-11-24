import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Api from "../../api/api";

const ViewById = () => {
  const { id } = useParams();

  const [notes, setNotes] = useState([]);

  const getNoteById = async () => {
    const request = await Api.fetchGetById(id);
    setNotes(await request.json());
  };

  const handleDelete = async () => {
    // const noteBackup = { ...notes }

    // console.log(noteBackup)

    const request = await Api.fetchDelete(id);
    const response = await request.json();
    alert(response.message);
    setNotes(response);
  };

  useEffect(() => {
    getNoteById();
  }, [notes]);

  let checkmark = "";
  if (notes.status === "To do") {
    checkmark =
      "https://www.nicepng.com/png/full/421-4219955_negative-icon-clock-red.png";
    console.log(checkmark);
  } else if (notes.status === "Doing") {
    checkmark = "http://simpleicon.com/wp-content/uploads/pencil.png";
  } else if (notes.status === "Done") {
    checkmark =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Eo_circle_light-green_white_checkmark.svg/2048px-Eo_circle_light-green_white_checkmark.svg.png";
  } else {
    checkmark = "No Status";
  }

  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title"> Note Title: {notes.title} </h5>
          <h5 className="card-text">Note Content: {notes.description}</h5>
          <div>
            <h5 className="card-text">
              Status: {notes.status}
              <img src={checkmark} alt={notes.status} className="icon" />
            </h5>
            <h5 className="card-text">Priority: {notes.priority}</h5>
            <div>
              <h5>
                Deadline(days):
                <h5 className="badge bg-primary">{notes.deadline}</h5>
              </h5>
            </div>
          </div>
        </div>
        <div className=" d-flex flex-row-reverse  align-items-end mx-3 my-1">
          <Link
            type="button"
            className="btn btn-danger mx-1"
            onClick={handleDelete}
            to={"/"}
          >
            Delete
          </Link>
          <Link to={`/edit/${notes._id}`} className="btn btn-dark">
            Edit
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ViewById;
