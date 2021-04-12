import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

const Note = (props) => {
  const deleteNote = () => {
    props.deleteItem(props.id);
  };

  return (
    <>
      <div className="note">
        <h1>{props.title}</h1>
        <span>{props.content}</span>
        <hr />
        <button onClick={deleteNote}>
          <DeleteIcon></DeleteIcon>
        </button>
      </div>
    </>
  );
};

export default Note;
