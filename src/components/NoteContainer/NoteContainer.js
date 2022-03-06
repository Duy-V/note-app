import React from "react";
import { useEffect, useContext, useState } from "react";
import Note from "../Note/Note";
import "./NoteContainer.css";
import { DataContext } from "../DataProvider";
import { Link, Outlet } from "react-router-dom";
import { Grid, Image } from "semantic-ui-react";

function NoteContainer() {
  const { notes } = useContext(DataContext);
  console.log(notes);
  // const [newNotes, setNewNotes] = useState([]);
  // let toggle = true;
  // const handleToggle = () => {
  //   if (toggle) {
  //     setNewNotes(notes.sort((a, b) => a.updatedTime > b.updatedTime));
  //     toggle = false;
  //   }
  // };
  return (
    <div className="note-container">
      <div>
        <h1>Note List</h1>
        <nav className="note-container_notes">
          {notes?.length > 0 ? (
            // ((<button onClick={handleToggle()}>Reverse Order</button>),
            notes.map((item) => (
              <Link to={`/home/${item.id}`} key={item.id}>
                <Grid columns={3} divided>
                  <Grid.Row>
                    <Grid.Column>
                      <Note note={item} />
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Link>
            ))
          ) : (
            <h3>No Notes present</h3>
          )}
        </nav>
        <Outlet />
      </div>
    </div>
  );
}

export default NoteContainer;
