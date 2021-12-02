import React from 'react';
import './KitContainer.scss';

const KitContainer = (props) => {
  const { children } = props;

  return (
    <div className="kit-container" {...props}>
      {children}
    </div>
  );
};

export default KitContainer;
