import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./Component/layout/navbar";
import Dashboard from "./Component/dashboard/dashboard";
import projectDetails from "./Component/projects/projectDetails";
import signin from "./Component/Auth/signin";
import signUp from "./Component/Auth/signup";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/project/:id" component={projectDetails} />
          <Route path="/signin" component={signin} />
          <Route path="/signup" component={signUp} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
