import React from 'react';
import Home from'./components/HomeScreen';
import {BrowserRouter,Route, Switch, Link} from 'react-router-dom';
import DataModal from './components/DataModal';

function App() {
  return (
    <div>
     <BrowserRouter> 
    <div>
             <Switch>
             <Route path="/" component={Home} exact/> 
             <Route path="/home" component={Home} />  
             <Route path="/modal" component={DataModal} />  
              </Switch> 
          </div>
          </BrowserRouter>
    </div>
  );
}

export default App;
