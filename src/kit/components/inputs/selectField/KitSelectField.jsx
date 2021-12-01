import React from 'react';

const KitSelectField = (props) => {
  const {
    options,
    onChange,
    label,
    value,
  } = props;

  const renderChild = () => options.map((option) => (
    <option value={option.value} key={option.value}>{option.text}</option>
  ));

  const renderLabel = () => {
    if (!label) {
      return null;
    }

    return <span className="kit-input-selectfield__label">{label}:</span>;
  };

  return (
    <>
      <div className="kit-input-selectfield">
        {renderLabel()}
        <select onChange={onChange} value={value}>
          {renderChild()}
        </select>
      </div>
    </>
  );
};

export default KitSelectField;
