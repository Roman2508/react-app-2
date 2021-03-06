import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
// import state from './redux/state';
import { addPost, updateNewPostText } from './redux/state';

function rerenderEntireTree(state) {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root'),
  );
}

export default rerenderEntireTree;
