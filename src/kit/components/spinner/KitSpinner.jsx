import React from 'react';

import './KitSpinner.scss';

import CircularProgress from '@material-ui/core/CircularProgress';

const KitSpinner = (props) => {
  const {
    show,
    className,
  } = props;

  return (
    <div className={`kit-spinner ${show ? 'kit-spinner__show' : ''} ${className ?? ''}`}>
      <CircularProgress color="primary" />
    </div>
  );
};

export default KitSpinner;
