import React from 'react';
import ReactDOM from 'react-dom';

const Portal = () => {
  return ReactDOM.createPortal(<div>Je suis un portal</div>, 'modal-root');
};

export default Portal;
