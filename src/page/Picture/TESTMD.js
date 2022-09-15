
import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import TestPage from '../TestPage';
import ReactModal from 'react-modal';


ReactModal.setAppElement('#root');​

const rootElement = document.getElementById('root');
ReactDOM.render(
  <StrictMode>
    <TestPage />
  </StrictMode>,
  rootElement,
);
