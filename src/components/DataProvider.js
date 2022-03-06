import React, { useState, createContext, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { Button, Confirm } from "semantic-ui-react";
export const DataContext = createContext();

const URL = "http://localhost:5000/notes";
export const DataProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);

  const [searchText, setSearchText] = useState("");
  const [listOpen, setListOpen] = useState(false);
  const [tableListOpen, setTableListOpen] = useState(false);
  const [selectedNote, setSelectedNote] = useState({});
  const [newNote, setNewNote] = useState({
    text: "",
    updatedTime: "",
    title: "",
    backgroundColor: "",
  });

  const [open, setOpen] = useState(false);

  const handleConfirm = () => setOpen(false);
  const handleCancel = () => setOpen(false);
  //fetch data from db.json
  useEffect(() => {
    fetchNotes();
  }, []);
  const fetchNotes = async () => {
    const res = await axios.get(URL);
    console.log(res.data);
    setNotes(res.data);
  };
  // Add bookmark
  const addNote = async (color) => {
    console.log(color);
    const newNote1 = {
      id: uuidv4(),
      text: "",
      backgroundColor: color.trim(),
      updatedTime: new Date(),
      title: "",
    };
    console.log(newNote1);

    const response = await axios.post(URL, newNote1);
    console.log(response);
    if (response.status === 201) {
      setNotes([response.data, ...notes]);
    }
  };

  // Delete bookmark
  const deleteNote = async (id) => {
    if (
      (
        <Confirm
          open={open}
          cancelButton="Never mind"
          confirmButton="Let's do it"
          onCancel={handleCancel}
          onConfirm={handleConfirm}
        />
      )
    ) {
      const res = await axios.delete(`${URL}/${id}`);
      if (res.status === 200) {
        setNotes(notes.filter((item) => item.id !== id));
      }
    }
  };
  //selected note
  const searchNotes = notes.filter((note) => {
    if (note.title ? note.title.toLowerCase() : note.title)
      return note.title.toLowerCase().includes(searchText);
  });

  //update note
  const updateNote = async (newNote) => {
    console.log(newNote);
    const response = await axios.put(`${URL}/${newNote.id}`, newNote);
    console.log(response.data);
    setNotes(
      notes.map((item) =>
        item.id === newNote.id ? { ...item, ...response.data } : item
      )
    );
  };

  return (
    <DataContext.Provider
      value={{
        notes,
        setNotes,
        deleteNote,
        addNote,
        updateNote,
        listOpen,
        setListOpen,
        selectedNote,
        setSelectedNote,
        searchText,
        setSearchText,
        searchNotes,
        newNote,
        setNewNote,
        tableListOpen,
        setTableListOpen,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
