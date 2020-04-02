import React from "react";
import "./Component/Navigation";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navigation from "./Component/Navigation";
import Home from "./Component/Home";
import Foto from "./Component/Foto";
import Video from "./Component/Video";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigation></Navigation>

        <Switch>
          <Route path="/home" component={Home} exact strict></Route>
          <Route path="/" component={Home} exact strict></Route>
          <Route path="/foto" component={Foto} exact strict></Route>
          <Route path="/video" component={Video} exact strict></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
