import React from 'react';
import cl from './MyModal.module.css';

const MyModal = ({ active, onClose, children }) => {
  const backgroundClick = () => {
    onClose();
  };

  return (
    <div
      className={`${cl.myModal} ${active ? cl.active : ''}`}
      onClick={backgroundClick}
    >
      <div className={cl.myModalContent} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default MyModal;
