import React from 'react';
import './KitContainer.scss';

const KitContainer = (props) => {
  const { children, className } = props;

  return (
    <div className={`kit-container ${className ?? ''}`}>
      {children}
    </div>
  );
};

export default KitContainer;
