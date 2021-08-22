import React, { useState } from 'react';
import '../components/NewNoteForm.css';
import AddCircleIcon from '@material-ui/icons/AddCircle';

const NewNoteForm = (props) => {
  const [inputTitle, setInputTitle] = useState('');
  const [inputContent, setInputContent] = useState('');

  const onChangeTitle = (event) => {
    setInputTitle(event.target.value);
  };

  const onChangeContent = (event) => {
    setInputContent(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const note = { title: inputTitle, content: inputContent };
    props.onSubmitNote(note);
    setInputTitle('');
    setInputContent('');
  };

  return (
    <div className='form__container'>
      <form onSubmit={onSubmitHandler}>
        <input
          type='text'
          placeholder='Title'
          value={inputTitle}
          onChange={onChangeTitle}
        />
        <textarea
          type='text'
          placeholder='Take a note...'
          value={inputContent}
          onChange={onChangeContent}
        />
        <button className='add__btn' type='submit'>
          <AddCircleIcon />
        </button>
      </form>
    </div>
  );
};

export default NewNoteForm;
