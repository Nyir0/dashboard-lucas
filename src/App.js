import './App.css';
import Template from './Template';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';

// function App() {
//   return (
//     <BrowserRouter>
//       <Template />
//       <Routes></Routes>
//     </BrowserRouter>
//   );
// }

function App() {
    return (
        <Template />
    );
  }

export default App;
