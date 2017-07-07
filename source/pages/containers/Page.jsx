import React from ' react';
import {
  Match, //qué debe hacer en cada ruta
  Miss, //qué debe hacer cuando NO encuentre la ruta
  Link, //moverse entre rutas
} from 'react-router';

import Home from './Home.jsx';
import About from './About.jsx'
import Error404 from './Error404'

function Pages() {
  return (
    <main role="application">
      <Match
        pattern="/"
        exactly
        component={Home}
      />
      <Match
        pattern="/about"
        exactly
        component={About}
      />
      <Miss component={Error404}/>
    </main>
  );
}

export default Pages;
