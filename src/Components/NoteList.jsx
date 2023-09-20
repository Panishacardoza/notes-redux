import React from "react";
import "../style/NoteList.css";
import DeleteLogo from "../assets/delete.svg";
import { useDispatch, useSelector } from "react-redux";
import { deleteNote } from "../Redux/noteSlice";
const NotesList = () => {
  const notes = useSelector((state) => state.notes.notes);
  const dispatch = useDispatch();

  const handleDelete = (noteId) => {
    dispatch(deleteNote(noteId));
  };
  return (
    <>
      <div>My Notes</div>
      <div  className="note-list">
        {notes.map((note) => (
          <div key={note.id}>
            <h2>{note.title}</h2>
            <div>{note.content}</div>
            <img
              src={DeleteLogo}
              style={{ cursor: "pointer" }}
              onClick={() => handleDelete(note.id)}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default NotesList;
