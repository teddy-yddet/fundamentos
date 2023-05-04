/* eslint-disable react/jsx-no-undef */
/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./App.css";

import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import ComFilhos from "./components/basicos/ComFilhos";
import Card from "./components/layout/Card";
import Repeticao from "./components/basicos/Repeticao";
import Condicional from "./components/basicos/Condicional";
import CondicionalComIf from "./components/basicos/CondicionalComIf";

export default (props) => (
  <div className="App">
    <Card titulo="#06 - Condicional v2">
      <CondicionalComIf numero={10}></CondicionalComIf>
    </Card>
    <Card titulo="#05 - Condicional v1">
      <Condicional numero={11}></Condicional>
    </Card>
    <Card titulo="#04 - Repeticao">
      <Repeticao></Repeticao>
    </Card>
    <Card titulo="#03 - Componente dom Filhos">
      <ComFilhos>
        <ul>
          <li>Ana</li>
          <li>Beatriz</li>
          <li>Carlos</li>
          <li>Roberto</li>
        </ul>
      </ComFilhos>
    </Card>
    <Card titulo="#02 - Componente com Parametro">
      <ComParametro titulo="Esse é o título" subtitulo="Esse é o subtitulo" />
    </Card>
    <Card titulo="# 01 - Primeiro componente">
      <Primeiro />
    </Card>

    {/*<ComFilhos>
  <ul>
    <li>Ana</li>
    <li>Beatriz</li>
    <li>Carlos</li>
    <li>Roberto</li>
  </ul>
</ComFilhos>
<Primeiro />
<ComParametro titulo="Esse é o título" subtitulo="Esse é o subtitulo" />
*/}
  </div>
);
