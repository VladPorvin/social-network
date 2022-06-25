import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Content from './components/Content/Content';


import {BrowserRouter, Route, Routes} from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";


const App = (props) => {

    return (
        <BrowserRouter>
            <div className="App">
                <div className="wrapper">
                    <Header/>
                    <Navbar/>
                    <div className="wrapper-content">
                        <Routes>
                            <Route
                                path="/profile"
                                element={<Content/>}
                            />
                            <Route
                                path="/dialogs/*"
                                element={<DialogsContainer/>}
                            />
                            <Route path="/users"
                                   element={<UsersContainer/>}/>
                        </Routes>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
