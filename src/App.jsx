import React, { useState } from "react";
import "./App.css";
import NoteContainer from "./Components/NoteContainer/NoteContainer";
import Sidebar from "./Components/Sidebar/Sidebar";

const App = () => {
  const [note, setNote] = useState([
    {
      text: "Hello from Note container",
      time: "10:12 AM October",
      color: "cyan",
    },
    {
      text: "Hello from Note container",
      time: "10:12 AM October",
      color: "yellow",
    },
    {
      text: "Hello from Note container",
      time: "10:12 AM October",
      color: "green",
    },
    {
      text: "Hello from Note container",
      time: "10:12 AM October",
      color: "red",
    },
    {
      text: "Hello from Note container",
      time: "10:12 AM October",
      color: "orange",
    },
    {
      text: "Hello from Note container",
      time: "10:12 AM October",
      color: "pink",
    },
  ]);

  const addNote = (color) => {
    const tempNotes = [...note];
    tempNotes.push({
      text: "",
      time: Date.now(),
      color,
    });
    setNote(tempNotes)
  };
  return (
    <div className="h-[100vh] flex gap-5 p-10">
      <Sidebar addNote={addNote} />
      <NoteContainer note={note} />
    </div>
  );
};

export default App;
