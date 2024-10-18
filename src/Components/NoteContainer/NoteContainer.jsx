import React from "react";
import Note from "../Note/Note";

const NoteContainer = (props) => {
  const reverseArray = (arr) => {
    const array = [];
    for (let i = arr.length - 1; i >= 0; --i) {
      array.push(arr[i]);
    }
    return array;
  };

  const notes = reverseArray(props.note) 
  return (
    <div className="h-full overflow-y-scroll scrollbar-thin scrollbar-thumb-lightgray scrollbar-track-transparent scrollbar-thumb-rounded-full scrollbar-thumb-hover:bg-gray">
      <h2 className="text-4xl font-bold ml-20">Notes</h2>
      <div className="flex flex-wrap gap-5 h-[90%] mt-10 ml-20">
        {notes.map((item, index) => (
          <Note key={index} note={item} />
        ))}
      </div>
    </div>
  );
};

export default NoteContainer;
