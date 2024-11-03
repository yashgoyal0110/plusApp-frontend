import { useEffect, useContext } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Slot from './pages/Slot.jsx'
import AboutUs from "./pages/AboutUs";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import { Context } from "./main";
import axios from "axios";
import Footer from "./components/Footer";
import CourseDetails from "./pages/CourseDetails";

function App() {
  const { isAuthenticated, setIsAuthenticated, setUser } = useContext(Context);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/v1/user/student/me",
          { withCredentials: true }
        );
        setIsAuthenticated(true);
        setUser(response.data.user);
      } catch (error) {
        setIsAuthenticated(false);
        setUser({});
        console.log(error);
      }
    };
    fetchUser();
  }, [isAuthenticated]);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="slot" element={<Slot />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="details/:id" element={<CourseDetails/>}/>
        </Routes>
        <ToastContainer position="top-center" />
        <Footer />
      </Router>
    </>
  );
}

export default App;
