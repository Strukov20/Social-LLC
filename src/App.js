import React from 'react';
import './App.scss';
import {Header} from "./components/header/header";
import {Navigation} from "./components/navigation/navigation";
import {Content} from "./components/content/content";
import {AddForm} from "./components/add-form/add-form";
import {Posts} from "./components/posts/posts";

function App() {
  return (
      <div className="wrapper">
          <Header />
          <Navigation/>
          <Content/>
          <AddForm/>
          <Posts/>
      </div>
      );

}

export default App;
