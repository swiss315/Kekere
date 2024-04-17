import React from 'react';
import './App.css';
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import LandingPage from "./Pages/landingPage";
import Register from "./Pages/Register";
import Layout from "./Components/Dashboard/Layout";
import CoownRegister from "./Pages/CoownRegister";
import Login from "./Pages/Login";
import {ProtectedRoutes} from "./Hooks/ProtectedRoutes";
import {ToastProvider} from "./Store/NotificationContext";
import Forgotpassword from "./Pages/Forgetpassword";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import SingleBlog from "./Pages/SingleBlog";


function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <ToastProvider>
          <Routes>
            <Route index element={<LandingPage />} />
            <Route path='register' element={<Register />} />
            <Route path='login' element={<Login />} />
            <Route path='register/co-own' element={<CoownRegister />} />
            <Route path='forgotpassword' element={<Forgotpassword />} />
            <Route path='about' element={<About />} />
            <Route path='blog' element={<Blog />} />
              <Route path='blog/:id' element={<SingleBlog />} />
            <Route element={<ProtectedRoutes />}>
              <Route path='/*' element={<Layout />} />
            </Route>
          </Routes>
        </ToastProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
