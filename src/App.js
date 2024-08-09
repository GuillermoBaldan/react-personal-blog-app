// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogList from './components/BlogList';
import BlogPost from './components/BlogPost';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<BlogList />} />
          <Route path="/post/:id" element={<BlogPost />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
