import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Window = (props) => {
  const note = props.data;

  return (
    <div className="card">
      <div className="card-body ">
        <h5 className="card-title"> Note Title: {note.title} </h5>
      </div>
      <Link
        to={`/${note._id}`}
        type="button"
        className="btn btn-dark mx-3 my-1"
      >
        Go to Note's page:
      </Link>
    </div>
  );
};

export default Window;
