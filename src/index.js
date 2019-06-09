import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';
import {HashRouter} from "react-router-dom";
import "./sw-chars-api";

ReactDOM.render(
<HashRouter><Main /></HashRouter>,
  document.getElementById('app')
);
