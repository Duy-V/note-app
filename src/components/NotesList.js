import {useContext} from "react";
import { DataContext } from "./DataProvider";
import Note from "./Note";
import AddNote from "./AddNote";
function  NotesList () {
    const {notes, setNotes}= useContext(DataContext);
    const
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <Note id={note.id} text= {note.text} date={note.date} 
        />
      ))}
      <AddNote handleAddNote={handleAddNote} />
    </div>
  );
};
export default NotesList;
