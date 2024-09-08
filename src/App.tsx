import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../src/components/Home';
import {SpotlightPreview as Signup} from "./components/SignupAnimation";
import {SpotlightPreview as Login} from "./components/LoginAnimation";
import Chat from "./components/Chat";
import Profile from "./components/Profile";


const App: React.FC = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/profile" element={<Profile />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
