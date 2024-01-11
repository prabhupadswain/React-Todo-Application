import React from 'react';

export const Backdrop = (props) => {
  // returns JSX.
  // On onClick attribute calls - parent component attribute via props.
  return <div className='backdrop' onClick={props.onCancel}></div>;
};

// export default Backdrop;
