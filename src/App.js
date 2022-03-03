import { useState, useEffect } from "react";
import NotesList from "./components/NotesList";
import { v4 as uuidv4 } from "uuid";
import format from "date-fns/format";
import { parseISO } from "date-fns";
import Search from "./components/Search";
import Header from "./components/Header";
import {DataProvider} from "./components/DataProvider";
const App = () => {
  // const [notes, setNotes] = useState([
  //   {
  //     id: uuidv4(),
  //     text: "This is my first note",
  //     date: "15/04/2021",
  //   },
  //   {
  //     id: uuidv4(),
  //     text: "This is my second note",
  //     date: "15/04/2021",
  //   },
  //   {
  //     id: uuidv4(),
  //     text: "This is my third note",
  //     date: "15/04/2021",
  //   },
  // ]);
  // const [searchText, setSearchText] = useState("");
  // const [darkMode, setDarkMode] = useState(false);
  // useEffect(() => {
  //   const saveNotes = JSON.parse(localStorage.getItem("react-notes-app-data"));
  //   if(saveNotes) {
  //     setNotes(saveNotes);
  //   }
  // }, []);
  // useEffect(() => {
  //   localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
  // }, [notes]);
  // const addNote = (text) => {
  //   const date = new Date();
  //   const newNote = {
  //     id: uuidv4(),
  //     text: text,
  //     date: date.toLocaleDateString(),
  //   };
  //   const newNotes = [...notes, newNote];
  //   setNotes(newNotes);
  // };
  // const deleteNote = (id) => {
  //   const newNotes = notes.filter((note) => note.id !== id);
  //   setNotes(newNotes);
  // };
  return (
    <DataProvider>

<div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText)
          )}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>

    </DataProvider>
    
  );
};
export default App;
