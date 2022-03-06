import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { DataContext } from "../DataProvider";
import deleteIcon from "../../assets/delete.svg";
import PacmanLoader from "react-spinners/PacmanLoader";

function NoteDetail() {
  const { deleteNote, updateNote, newNote } = useContext(DataContext);
  console.log(newNote);
  const { noteId } = useParams();
  let navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [noteDetail, setNoteDetail] = useState({
    text: "",
    date: "",
    title: "",
    backgroundColor: "",
    id: `${noteId}`,
  });
  const URL = "http://localhost:5000/notes";
  console.log(URL);
  useEffect(() => {
    fetchNotes();
  }, [noteId]);
  const fetchNotes = async () => {
    setLoading(true);
    const res = await axios.get(`${URL}/${noteId}`);
    setNoteDetail(res.data);
    setLoading(false);
  };
  console.log(noteDetail);
  let [color, setColor] = useState("teal");

  if (loading) {
    return (
      <div>
        <PacmanLoader
          color={color}
          loading={loading}
          css={{
            display: "block",
            margin: "0 auto",
            borderColor: "teal",
          }}
          size={50}
        />
      </div>
    );
  }
  const handleSave = (e) => {
    e.preventDefault();
    if (noteDetail.id) {
      updateNote({ ...noteDetail, updatedTime: new Date() });
    }
    navigate("/home/noteslist");
  };

  return (
    <div>
      <div
        className="note"
        style={{ backgroundColor: noteDetail?.backgroundColor }}
      >
        <input
          autoFocus
          placeholder="your title"
          className="note_text"
          value={noteDetail.title}
          onChange={(e) =>
            setNoteDetail({ ...noteDetail, title: e.target.value })
          }
        />
        <textarea
          placeholder="your content"
          className="note_text"
          onChange={(e) =>
            setNoteDetail({ ...noteDetail, text: e.target.value })
          }
          value={noteDetail.text}
        />
        <div className="note_footer">
          <img
            src={deleteIcon}
            alt="DELETE"
            onClick={() => (
              deleteNote(noteDetail.id), navigate("/home/noteslist")
            )}
          />

          <button onClick={handleSave}>Save</button>
        </div>
      </div>
    </div>
  );
}

export default NoteDetail;
