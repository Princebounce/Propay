
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
import Sidebar from "./components/Pages/Sidebar";
import PaymentDetails from "./components/User/Payment/PaymentDetails";
import Payment from "./components/Pages/Payment";
import Invoice from "./components/Pages/Invoice";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Hero/>} />
      <Route path="/niche" element={<Signup />} />
      <Route path="/signup" element={<StepTwo />} />
      <Route path="/stepthree" element={<StepThree />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-pass" element={<FgWord />} />
      <Route path="/forgot-passwo" element={<FgWordTwo/>} />
      <Route path="/forgot-password" element={<FgWordThree />} />
      <Route path="/dashboard" element={<Sidebar />} />
      <Route path="/create-profile" element={<CreateProfile />} />
      <Route path="/payment-details" element={<PaymentDetails />} />
      <Route path="/invoice" element={<Invoice />} />
      <Route path="/payment" element={<Payment/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
