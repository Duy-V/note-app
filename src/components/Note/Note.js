import { useEffect, useState, useContext } from "react";

import { DataContext } from "../DataProvider";
import "./Note.css";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import format from "date-fns/format";
import { parseISO } from "date-fns";

function Note({ note }) {
  const { deleteNote, updateNote, notes, setNotes, newNote, setNewNote } =
    useContext(DataContext);
  const convertDateTime = (date) => {
    if (!date) {
      return "";
    }
    return format(parseISO(note?.updatedTime), "dd-MM-yyyy HH:mm:ss");
  };
  return (
    <div className="note" style={{ backgroundColor: note?.backgroundColor }}>
      <input
        className="note_text"
        defaultValue={note.title.toUpperCase()}
        onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
      />

      <textarea
        className="note_text"
        defaultValue={note.text}
        onChange={(e) => setNewNote({ ...newNote, text: e.target.value })}
      />

      <div>{convertDateTime(note.updatedTime)}</div>
    </div>
  );
}

export default Note;
