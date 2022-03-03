import React, { useState, createContext, useEffect } from "react";
import axios from "axios";
export const DataContext = createContext();
const URL = "http://localhost:5000/notes";
export const DataProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  //fetch data from db.json
  useEffect(() => {
    fetchNotes();
  }, []);
  const fetchNotes = async () => {
    const res = await axios.get(URL);
    console.log(res.data);
    setNotes(res.data);
  };
  //add note
  const addNote = async (newNote) => {
    const response = await axios.post(URL, newNote);

    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };
  //delete note
  const deleteNote = async (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      const res = await axios.delete(`${URL}/${id}`);
      const newNotes = notes.filter((note) => note.id !== id);

      setNotes(newNotes);
    }
  };
  return (
    <DataContext.Provider
      value={{
        notes,
        setNotes,
        searchText,
        setSearchText,
        darkMode,
        setDarkMode,
        addNote,
        deleteNote,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
