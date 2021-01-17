import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { Route, Switch, useLocation } from "react-router-dom";

// COMPONENTS
import About from './components/About';
import Contributors from './components/Contributors';
import Home from './components/Home';
import Get from './components/Get';

function App() {
  const location = useLocation();

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <Switch location = { location } key = { location.key }>
          <Route path='/about'>
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
      </AnimatePresence>
    </>
  );
}

export default App;
