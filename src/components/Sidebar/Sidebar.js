import React from "react";
import plusIcon from "../../assets/plus.png";
import "./Sidebar.css";
import { useContext } from "react";
import { DataContext } from "../DataProvider";

function Sidebar() {
  const { addNote, listOpen, setListOpen } = useContext(DataContext);
  const colors = ["#fe9b72", "#fec971", " #00d4fe", "#b693fd", "#e4ee91"];

  return (
    <div className="sidebar">
      <img src={plusIcon} alt="Add" onClick={() => setListOpen(!listOpen)} />
      <ul className={`sidebar_list ${listOpen ? "sidebar_list_active" : ""}`}>
        {colors.map((item, index) => (
          <li
            key={index}
            className="sidebar_list_item"
            style={{ backgroundColor: item }}
            onClick={() => addNote(item)}
          />
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
