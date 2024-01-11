import React, { useState } from 'react';

import Modal from './Modal';
import { Backdrop } from './Backdrop';

const Todo = (props) => {
  // React Hooks - Using useState()
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // Delete button handler to change state of application.
  // Open modal & backdrop component
  // Modify state of application via useState().
  function deleteHandler() {
    setModalIsOpen(true);
  }

  // Modify state of application.
  // Close modal & backdrop component.
  // Using react hook useState().
  function closeModalHandler() {
    setModalIsOpen(false);
  }

  return (
    <div className='card'>
      <h2>{props.text}</h2>
      <div className='actions'>
        <button className='btn' onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {modalIsOpen && (
        <Modal onConfirm={closeModalHandler} onCancel={closeModalHandler} />
      )}
      {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
    </div>
  );
};

export default Todo;
