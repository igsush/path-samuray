import store from "./redux/redux-store";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import StoreContext from "./StoreContext";

const App = (props) => {
  return (
    <BrowserRouter>
  <StoreContext.Provider value={store}>
      <div className="app-wrapper">
        <Header />
        <Nav />
        <div class="app-wrapper-content">
          <Routes>
            <Route path="/dialogs" element={<DialogsContainer />} />
            <Route path="/profile" element={<Profile  />} />
          </Routes>
        </div>
      </div>
      </StoreContext.Provider>
    </BrowserRouter>
  );
};

export default App;
