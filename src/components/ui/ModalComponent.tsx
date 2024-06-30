
"use client";

import React from 'react';

import Modal from 'react-modal';

Modal.setAppElement('#__next'); 

interface ModalComponentProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const ModalComponent: React.FC<ModalComponentProps> = ({ isOpen, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Example Modal"
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      }}
    >
      <h2>Hello, I'm a modal!</h2>
      <button onClick={onRequestClose}>Close Modal</button>
    </Modal>
  );
};

export default ModalComponent;
