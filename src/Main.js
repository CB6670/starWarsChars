import React from 'react';
import Home from "./Home";
import {Route, Link} from "react-router-dom";
import ListChars from "./ListChars";

export default class Main extends React.Component {
  render() {
    return (
      <div id = "mainDiv">
        <Link to = "/">Home</Link>
        <Link to = "/characters">Characters</Link>
        <Route exact path = "/" component = {Home}/>
        <Route exact path = "/characters" component = {ListChars}/>
      </div>
    );
  }
}
