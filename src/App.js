import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import MainForm from './components/Main_form';
import CreateChatroom from "./components/CreateChatroom";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/auth" element={<Login />} />
          <Route path="/mainform" element={<MainForm />} />
          <Route path="/createchatroom" element={<CreateChatroom />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
