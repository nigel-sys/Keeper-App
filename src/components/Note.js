import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import '../components/Note.css';

const Note = (props) => {
  const onClickDeleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <div className='note'>
      <h2>{props.title}</h2>
      <p>{props.content}</p>
      <button onClick={onClickDeleteHandler}>
        {' '}
        <DeleteIcon />{' '}
      </button>
    </div>
  );
};

export default Note;
