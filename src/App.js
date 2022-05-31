import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Content from './components/Content/Content';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="App">
        <div class="wrapper">
          <Header />
          <Navbar />
          <div className="wrapper-content">
            <Routes>
              <Route
                path="/profile"
                element={<Content state={props.state.contentPage} dispatch={props.dispatch} />}
              />
              <Route
                path="/dialogs/*"
                element={<Dialogs state={props.state.dialogsPage} dispatch={props.dispatch} />}
              />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
