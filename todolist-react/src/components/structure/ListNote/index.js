import React, { useState, useEffect } from "react";
import Api from "./../../../../src/api/api";
import Window from "./../DraggableWindow/index";

const ListNotes = () => {
  const [notes, setNotes] = useState([]);

  const getNotes = async () => {
    const request = await Api.fetchGetAll();
    setNotes(await request.json());
  };

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <div className="container">
      <div className="card   ">
        <div className=" row row-cols-1 row-cols-md-3  g-3 mx-3 my-1">
          {notes.map((note) => (
            <Window data={note} key={note._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListNotes;
