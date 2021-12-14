import { Routes, Route } from 'react-router-dom';
import axios from 'axios';

import Navbar from 'components/Navbar';
import routes from 'config/routes';
import React, { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    console.log('test axios');
    axios.get('localhost:8080/api');
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        {routes.map((route) => (
          <Route key={route.title} path={route.path} element={route.element} />
        ))}
      </Routes>
    </div>
  );
};

export default App;
