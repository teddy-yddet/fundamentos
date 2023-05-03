import "./index.css";
import React from "react";
import ReactDOM from "react-dom";

import Primeiro from "./components/Primeiro";
import ComParametro from "./components/ComParametro";

ReactDOM.render(
  <>
    <Primeiro />
    <ComParametro titulo="Esse é o título" subtitulo="Esse é o subtitulo" />
  </>,
  document.getElementById("root")
);
