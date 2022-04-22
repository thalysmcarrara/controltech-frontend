import { ColorModeScript } from '@chakra-ui/react';
import * as React from 'react';
import ReactDOM from 'react-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Root from './Root';

ReactDOM.render(
  <React.StrictMode>
    <ColorModeScript />
    <Root />
    <ToastContainer />
  </React.StrictMode>,
  document.getElementById('root'),
);
