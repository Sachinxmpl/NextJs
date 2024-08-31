import './App.css'

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Signup } from './components/Signup.tsx';
import { Signin } from './components/Signin.tsx';
import { User } from './components/User.tsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/signup"} element={<Signup />} />
        <Route path={"/signin"} element={<Signin />} />
        <Route path={"/user"} element={<User />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
