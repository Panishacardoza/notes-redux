import React from "react";
import { useState } from "react";
import "../style/CreateNote.css";
import { addNote } from "../Redux/noteSlice";
import { useDispatch } from "react-redux";

const CreateNote = () => {
  const dispatch = useDispatch();
  const [note, setNote] = useState({ title: "", content: "" });
  const [title, setTitle] = useState("");

  // handle Add note
  const handleAddNote = () => {
    const id = Date.now();
    dispatch(addNote({ id, ...note }));
    setNote({ title: "", content: "" });
  };

  return (
    <>
      <div className='create-container'>
        <h1 className='note-text'>Add a Note</h1>
        <input
          type='text'
          placeholder='Title'
          className='title-input'
          value={note.title}
          onChange={(e) => setNote({...note, title: e.target.value})}
        />
        <textarea
          placeholder='Take Notes'
          className='take-notes'
          value={note.content}
          onChange={(e) => setNote({...note, content: e.target.value})}
        />
        <button className='add-btn' onClick={handleAddNote}>
          Add Notes
        </button>
      </div>
    </>
  );
};

export default CreateNote;
