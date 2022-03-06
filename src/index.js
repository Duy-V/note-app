import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NoteContainer from "./components/NoteContainer/NoteContainer";
import NotFound from "./components/NotFound/NotFound";
import NoteDetail from "./components/NoteDetail/NoteDetail";
import "semantic-ui-css/semantic.min.css";
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<App />}>
          <Route path=":noteId" element={<NoteDetail />} />
          <Route path="noteslist" element={<NoteContainer />}></Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,

  document.getElementById("root")
);
