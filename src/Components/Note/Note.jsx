import React from "react";

const Note = (props) => {
  return (
    <div
      className="p-[25px] h-[260px] w-[260px] flex flex-col rounded-[30px]"
      style={{ backgroundColor: props.note.color }}
    >
      <textarea
        className="flex-1 resize-none bg-transparent outline-none border-none text-[1rem] leading-[1.875rem] italic "
        defaultValue={props.note.text}
      ></textarea>
      <p>{props.note.time}</p>
    </div>
  );
};

export default Note;
