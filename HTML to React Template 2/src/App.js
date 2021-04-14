
import './App.css';
import Home from './pages/Home'
import Footer from './components/Footer'
import Header from './components/Header'
import About from './pages/About'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import Seemore from './pages/Seemore'
import Whatwedo from './pages/Whatwedo'
import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
      <Router>
    <Header/>
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route  path="/about" component={About}></Route>
      <Route  path="/gallery" component={Gallery}></Route>
      <Route  path="/contact" component={Contact}></Route>
      <Route  path="/whatwedo" component={Whatwedo}></Route>
      <Route  path="/seemore" component={Seemore}></Route>
    </Switch>
    <Footer/>
    </Router>
    </React.Fragment>
  
  );
}

export default App;
