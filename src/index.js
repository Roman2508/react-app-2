import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

let posts = [
  { id: 1, message: 'Hello, how are you?', likesCount: '15' },
  { id: 2, message: "It's my first project.", likesCount: '20' },
];

let dialogs = [
  { name: 'Dimych', id: 1 },
  { name: 'Andrey', id: 2 },
  { name: 'Viktor', id: 3 },
  { name: 'Aleksandr', id: 4 },
  { name: 'Dmitry', id: 5 },
];

let messages = [
  { message: 'Hi', id: 1 },
  { message: 'How are you', id: 2 },
  { message: 'Yo', id: 3 },
];

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App posts={posts} dialogs={dialogs} messages={messages} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
