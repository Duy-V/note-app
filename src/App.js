import React, { useEffect, useState } from "react";
import "./App.css";
import { DataProvider } from "./components/DataProvider";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import SearchBar from "./components/SearchBar/SearchBar";
import { Button } from "semantic-ui-react";

function App() {
  return (
    <DataProvider>
      <div className="App">
        <Sidebar />
        <div className="action-place">
          <nav>
            <Link to="noteslist">
              <Button color="teal"> Back to Note List</Button>
            </Link>
          </nav>
          <SearchBar placeholder="Enter your note you want to find..." />
        </div>

        <Outlet />
      </div>
    </DataProvider>
  );
}

export default App;
