import './App.css';
import LoginForm from './Pages/LoginForm';
import RegistrationForm from './Pages/RegistrationForm';
import WithoutLogin from './Pages/WithoutLogin';
import LoggedIn from './Pages/LoggedIn';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Booking from './Pages/Booking';
import Shipping from './Pages/Shipping';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/Registration" element={<RegistrationForm />} />
        <Route path="/preview" element={<WithoutLogin />} />
        <Route path="/DashBoard" element={<LoggedIn />} />
        <Route path="/Booking" element={<Booking />} />
        <Route path="/Shipping" element={<Shipping />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}


export default App;
