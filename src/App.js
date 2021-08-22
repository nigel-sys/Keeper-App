import React, { useState } from 'react';
import './App.css';
import NewNoteForm from './components/NewNoteForm';
import NotesContainer from './components/NotesContainer';

function App() {
  const [notes, setNotes] = useState([]);

  const onSubmitNoteHandler = (note) => {
    setNotes((prevState) => {
      return [...prevState, note];
    });
  };

  const onDeleteNoteHandler = (deleteID) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((element, i) => {
        return i !== deleteID;
      });
    });
  };

  return (
    <div>
      <header>
        <h1>Keeper</h1>
      </header>
      <NewNoteForm onSubmitNote={onSubmitNoteHandler} />
      <NotesContainer notes={notes} onDeleteNote={onDeleteNoteHandler} />
    </div>
  );
}

export default App;
