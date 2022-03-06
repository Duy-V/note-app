import React, { useState } from "react";
import "./SearchBar.css";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import { useContext } from "react";
import { DataContext } from "../DataProvider";
import { Link } from "react-router-dom";
import { List } from "semantic-ui-react";

function SearchBar({ placeholder }) {
  const {
    notes,

    setSearchText,
  } = useContext(DataContext);
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = notes.filter((note) => {
      if (note.title ? note.title.toLowerCase() : note.title) {
        return note.title.toLowerCase().includes(searchWord.toLowerCase());
      }
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setSearchText([]);
    setWordEntered("");
    setFilteredData([]);
  };

  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>
      {filteredData.length !== 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            console.log(value);
            return (
              <Link to={`/home/${value.id}`} className="dataItem">
                <List divided relaxed>
                  <List.Item>
                    <List.Icon name="edit" size="large" color="teal" />
                    <List.Content>
                      <List.Header as="a">{value.title}</List.Header>
                    </List.Content>
                  </List.Item>
                </List>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
