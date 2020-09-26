import React from 'react';
import './App.scss';
import {Header} from "./components/Header/header";
import {Navbar} from "./components/Navbar/navbar";
import {Profile} from "./components/Profile/Page/profile";
import {Dialogs} from "./components/Dialogs/dialogs";
import {BrowserRouter, Route} from "react-router-dom"
import {News} from "./components/News/news";
import {Music} from "./components/Music/music";
import {Settings} from "./components/Settings/settings";
import {SideBar} from "./components/SideBar/sideBar";


function App(props) {

    return (
        <BrowserRouter>
            <div className="wrapper">
                <Header />
                <div className="content-wrapper">
                    <Navbar />
                    <Route  path='/profile' render={ () => <Profile state={props.state.profilePage}/> }/>
                    <Route  path='/dialogs' render={ () => <Dialogs state={props.state.dialogsPage}/> }/>
                    <Route  path='/news' render={ () => <News/> }/>
                    <Route  path='/audio' render={ () => <Music/> }/>
                    <Route  path='/settings' render={ () => <Settings/> }/>
                    <Route  path='/friends' render={ () => <SideBar state={props.state}/> } />

                </div>
            </div>
        </BrowserRouter>
    );

}

export default App;
