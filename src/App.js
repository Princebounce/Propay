
import Login from "./components/User/Login";
import Signup from "./components/User/Signup/Signup";
import StepThree from "./components/User/Signup/StepThree";
import StepTwo from "./components/User/Signup/StepTwo";
import FgWord from './components/User/FgWord/FgWord'
import FgWordTwo from './components/User/FgWord/FgWordTwo'
import FgWordThree from './components/User/FgWord/FgWordThree'
import CreateProfile from "./components/Pages/CreateProfile"
import Hero from "./components/LandingPage/Hero"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Hero/>} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/steptwo" element={<StepTwo />} />
      <Route path="/stepthree" element={<StepThree />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-pass" element={<FgWord />} />
      <Route path="/forgot-passwo" element={<FgWordTwo/>} />
      <Route path="/forgot-password" element={<FgWordThree />} />
      <Route path="/welcome" element={<Hero />} />
      <Route path="/create-profile" element={<CreateProfile />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
