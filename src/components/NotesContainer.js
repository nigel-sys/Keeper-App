import React from 'react';
import Note from './Note';
import './NotesContainer.css';

const NotesContainer = (props) => {
  const onDeleteHandler = (deleteID) => {
    props.onDeleteNote(deleteID);
  };

  return (
    <div className='container'>
      {props.notes.map((element, i) => {
        return (
          <Note
            key={i}
            id={i}
            title={element.title}
            content={element.content}
            onDelete={onDeleteHandler}
          />
        );
      })}
    </div>
  );
};

export default NotesContainer;
