import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import Note from "./Note";

const List = [];
const App = (props) => {
  const [oldlist, newlist] = useState({
    title: "",
    content: "",
  });

  const onDelete = (id) => {
    for (var i = 0; i < List.length; i++) {
      if (i == id) {
        List.splice(id, 1);
        break;
      }
    }
    newlist({});
  };
  const data = (val, index) => {
    return (
      <Note
        key={index}
        id={index}
        title={val.title}
        content={val.content}
        deleteItem={onDelete}
      />
    );
  };

  const addNote = (titlet, contentt) => {
    if (titlet != undefined && contentt != undefined) {
      List.push({ title: titlet, content: contentt });
      newlist({});
    } else {
      alert("Enpty not allowed");
    }
  };

  return (
    <>
      <Header />
      <Footer />
      <CreateNote passNote={addNote} />
      <br />
      <br />
      <br />
      {List.map(data)}
    </>
  );
};
export default App;
