import React from 'react';
import ReactDOM from 'react-dom';
import Typography from '@material-ui/core/Typography';
import './index.css';

import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import SearchInput from './SearchInput.js';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Kanit',
      'sans-serif',
    ].join(','),
  },});

function Title() {
    return (
        <ThemeProvider theme={theme}>
            <div id="title">
                <Typography id="title">
                    Palmtree
                </Typography>
            </div>
        </ThemeProvider>

    );
}

function App() {
  return (
    <div>
      <Title/>
      <SearchInput/>
    </div>
  )
}

ReactDOM.render(
      <App/>,
      document.getElementById('root'),
  );
