import React, { useState } from 'react';
import './Modal.css';

const Modal = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <span className="close" onClick={toggleModal}>
              &times;
            </span>
            <h2>Modal Title</h2>
            <p>This is a sample modal.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
