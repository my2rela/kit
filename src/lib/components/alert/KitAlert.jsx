import React from 'react';

import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

import './KitAlert.scss';

const KitAlert = (props) => {
  const {
    type,
    children,
    isOpen,
    onClose,
  } = props;

  return (
    <div className="kit-alert">
      <Snackbar open={isOpen} autoHideDuration={6000} onClose={onClose}>
        <Alert onClose={onClose} severity={type}>
          {children}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default KitAlert;
