import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import AllBeers from './Components/AllBeers';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/allbeers" component={AllBeers}></Route>
        <Route exact path="/" component={Home}></Route>
      </Switch>
    </div>
  );
}

export default App;
