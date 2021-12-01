import React from 'react';

import './KitButton.scss';

const KitButton = (props) => {
  const {
    onClick,
    children,
    className,
    disabled,
  } = props;

  return (
    <div className="kit-button">
      <button
        className={`kit-button__ ${className ?? ''}`}
        type="button"
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    </div>
  );
};

export default KitButton;
