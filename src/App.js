// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BlogList from './components/BlogList';
import BlogPost from './components/BlogPost';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={BlogList} />
          <Route path="/post/:id" component={BlogPost} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
