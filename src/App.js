import React from "react";
import { Route, Switch } from "react-router-dom";
import { About } from "./About/About";
import "./App.css";
import { Contact } from "./contact/contact";
import { Education } from "./education/education";
import { Experience } from "./experience/experience";
import { Header } from "./headerPhone/header";
import { Home } from "./Home/home";
import { Project } from "./project/project";
import { SideBar } from "./sideBar/sideBar";

function App() {
  return (
    <div className="App">
      <div className="side">
        <SideBar />
      </div>
      <div className="sidePhone">
        <Header/>
        <Switch className="switchPhone">
        <Route path="/Home" component={Home} />
        <Route path="/About_me" component={About} />
        <Route path="/Experience" component={Experience} />
        <Route path="/Contact" component={Contact} />
        <Route path="/Education" component={Education} />
        <Route path="/My-Projects" component={Project}/>
        <Route path="/" component={Home} />
      </Switch>
      </div>
      <div className="switch">
      <Switch >
        <Route path="/Home" component={Home} />
        <Route path="/About_me" component={About} />
        <Route path="/Experience" component={Experience} />
        <Route path="/Contact" component={Contact} />
        <Route path="/Education" component={Education} />
        <Route path="/My-Projects" component={Project}/>
        <Route path="/" component={Home} />
      </Switch>
      </div>
    </div>
  );
}

export default App;
