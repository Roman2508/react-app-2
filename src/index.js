import './index.css';
import reportWebVitals from './reportWebVitals';
import rerenderEntireTree from './render';
import state from './redux/state'

rerenderEntireTree(state);

/* ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App state={state} addPost={addPost} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
); */

reportWebVitals();
