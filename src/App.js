import logo from "./logo.svg";
import "./App.css";
import Login from "./Components/Login";
import { Provider } from "react-redux";
import store from "./store";
import LoginForm from "./Components/LoginForm";
import Header from "./Components/Header";
import Registration from "./Components/Registration";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from "./Components/AboutUs";
import EventCreationForm from "./Components/EventForm";
import ProfilePage from "./Components/ProfilePage";
import LandingPage from "./Components/LandingPage";
import EventCard from "./Components/EventCard";
import HomePage from "./Components/HomePage";
import UserProfile from "./Components/UserProfile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>

        <Route path="/header" element={<Header />}></Route>

        <Route path="/registerUser" element={<Registration />}></Route>
        <Route path="/aboutus" element={<AboutUs />}></Route>
        <Route path="/createevent" element={<EventCreationForm />}></Route>
        <Route path="/home" element={<HomePage />}></Route>
        <Route path="/profile" element={<UserProfile />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
