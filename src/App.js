import React from 'react';
import './App.scss';
import {Header} from "./components/Header/header";
import {Navbar} from "./components/Navbar/navbar";
import {Content} from "./components/Profile/Page/content";
import {Dialogs} from "./components/Dialogs/dialogs";
import {BrowserRouter, Route} from "react-router-dom"
import {News} from "./components/News/news";
import {Music} from "./components/Music/music";
import {Settings} from "./components/Settings/settings";


function App() {
    return (
        <BrowserRouter>
            <div className="wrapper">
                <Header />
                <div className="content-wrapper">

                    <Navbar />
                    <Route exact path='/profile' component={Content}/>
                    <Route exact path='/dialogs' component={Dialogs}/>
                    <Route exact path='/news' component={News}/>
                    <Route exact path='/audio' component={Music}/>
                    <Route exact path='/settings' component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );

}

export default App;
