import React from 'react';

import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import Slide from '@material-ui/core/Slide';

import './KitAlert.scss';

const KitAlert = (props) => {
  const {
    type,
    children,
    isOpen,
    onClose,
  } = props;

  const slideTransition = (p) => <Slide {...p} direction="up" />;

  return (
    <div className="kit-alert">
      <Snackbar
        open={isOpen}
        autoHideDuration={6000}
        onClose={onClose}
        TransitionComponent={slideTransition}
      >
        <Alert onClose={onClose} severity={type}>
          {children}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default KitAlert;
