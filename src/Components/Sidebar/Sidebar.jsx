import React, { useState } from "react";
import plus from "../../assets/plus.png";

const Sidebar = (props) => {
  const colors = ["#fe9b72", "#fec971", "#00d4fe", "#b693fd", "#e4ee91"];
  const [listOpen, setListOpen] = useState(false); // Initialize state as false (list is closed)

  // Toggle the list visibility
  const toggleList = () => {
    setListOpen((prevState) => !prevState); // Toggle between true and false
  };

  return (
    <div className="flex flex-col gap-10 mt-14">
      {/* Plus Icon to Toggle the List */}
      <img
        src={plus}
        alt="plus_icon"
        className="w-28 cursor-pointer"
        onClick={toggleList} // On click, toggle the list visibility
      />

      {/* Color List - Only display if listOpen is true */}
      <ul
        className={`flex flex-col gap-5 items-center transition-all duration-300 ${
          listOpen ? "opacity-100 max-h-[200px]" : "opacity-0 max-h-0"
        } overflow-hidden`}
      >
        {colors.map((item, index) => (
          <li
            key={index}
            style={{ backgroundColor: item }}
            className="w-7 h-7 rounded-full cursor-pointer"
            onClick={()=>props.addNote(item)}
          />
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
