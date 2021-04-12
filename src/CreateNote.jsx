import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
// import List from './List';

let titlet, contentt;
const InputEvent = () => {
  titlet = document.getElementById("title").value;
  contentt = document.getElementById("content").value;
};

const CreateNote = (props) => {
  const Add = () => {
    props.passNote(titlet, contentt);
    titlet = document.getElementById("title").value = "";
    contentt = document.getElementById("content").value = "";
  };
  return (
    <>
      <center>
        <div className="main_note">
          <input
            id="title"
            type="text"
            onChange={InputEvent}
            placeholder="Title"
          />
          <br />
          <textarea
            id="content"
            onChange={InputEvent}
            rows="3"
            cols="20"
            placeholder="Write a note..."
          ></textarea>
          <br />
          <button onClick={Add}>
            <AddIcon />
          </button>
        </div>
      </center>
    </>
  );
};

export default CreateNote;
