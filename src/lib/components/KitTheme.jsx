import React from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#542574e0',
    },
    secondary: {
      main: '#9fa3a344',
    },
  },
});

const KitTheme = (props) => {
  const { children } = props;
  return (
    <>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  );
};

export default KitTheme;
