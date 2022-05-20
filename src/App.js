import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
//  import { Provider } from "./StoreContext";

const App = (props) => {
  return (
  //   <BrowserRouter>
  // <Provider store={store}>
      <div className="app-wrapper">
        <Header />
        <Nav />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/dialogs" element={<DialogsContainer />} />
            <Route path="/profile" element={<Profile  />} />
            <Route path="/users" element={<UsersContainer/>} />
          </Routes>
        </div>
      </div>
    //   </Provider>
    // </BrowserRouter>
  );
};

export default App;
