import React from 'react';

import './KitTextField.scss';

const KitTextField = (props) => {
  const {
    onChange,
    onFocus,
    onBlur,
    placeholder,
    error,
    label,
    type,
    value,
  } = props;

  const renderLabel = () => {
    if (!label) {
      return null;
    }

    return <span className="kit-input-textfield__label">{label}:</span>;
  };

  return (
    <>
      <div className={`kit-input-textfield ${error ? '__error' : ''}`}>
        {renderLabel()}
        <input
          onChange={onChange}
          placeholder={placeholder}
          type={type ?? 'text'}
          value={value}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      </div>
      <span className="kit-input-textfield__error">{error}</span>
    </>
  );
};

export default KitTextField;
