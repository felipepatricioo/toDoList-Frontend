import React from "react";
import ListNotes from "./../../components/structure/ListNote/index";

const Home = () => {
  return (
    <>
      <div className="container">
        <h1 className="text-center h1">Welcome to the Online NotePad Maker!</h1>
      </div>
      <ListNotes />
    </>
  );
};

export default Home;
