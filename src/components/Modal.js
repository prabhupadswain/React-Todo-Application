import React from 'react';

const Modal = (props) => {
  // Cancel button handler - calls parent component attribute via props
  function cancelHandler() {
    props.onCancel();
  }

  // Confirm button handler - calls parent component attribute via props
  function confirmHandler() {
    props.onConfirm();
  }

  return (
    <div className='modal'>
      <p>Are you sure?</p>
      <button className='btn btn--alt' onClick={cancelHandler}>
        Cancel
      </button>
      <button className='btn' onClick={confirmHandler}>
        Delete
      </button>
    </div>
  );
};

export default Modal;
