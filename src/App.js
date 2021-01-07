import React from 'react';
import { Route, Switch } from 'react-router-dom';

// COMPONENTS
import About from './components/About';
import Contributors from './components/Contributors';
import Home from './components/Home';
import Get from './components/Get';

function App() {
  return (
    <>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contributors">
          <Contributors />
        </Route>
        <Route path="/get">
          <Get />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default App;
