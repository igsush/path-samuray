import "./index.css";
import store from "./redux/redux-store";

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

let rerenderTree = (state) => {
  
  ReactDOM.render(
    <React.StrictMode>
      
      <App store={store} />
    </React.StrictMode>,
    document.getElementById("root")
  );
};
rerenderTree(store.getState());

store.subscribe(() => {
  let state = store.getState();
  rerenderTree(state);
});
