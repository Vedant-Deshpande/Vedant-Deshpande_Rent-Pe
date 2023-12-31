// import logo from "./logo.svg";
import "./App.css";
import Login from "./pages/login/login.component";
import Navbar from "./components/navbar/navbar";
import "bootstrap/dist/css/bootstrap.css";
import SignUp from "./pages/signup/signup.component";
import Form from "./pages/form/form";
import About from "./pages/about/about.js";
import Rent from "./pages/rent/rent";
import Buy from "./pages/buy/buy";
import HowItWorks from "./pages/howItWorks/howItWorks";
import Blog from "./pages/blog/blog";
import Contact from "./pages/contact/contact";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Switch,
} from "react-router-dom";
import NProgress from "nprogress";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "./components/Layout/Layout"
import Listings from "./pages/listing/listing";
import CreateListing from "./components/admin_components/create-listing";


import Home from "./pages/home/home";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/rent" element={<Rent />}></Route>
        <Route path="/buy" element={<Buy />}></Route>
        {/* <Route path='/Contact' element={<Contact />}></Route>
        <Route path='/Jobs' element={<Jobs />}></Route> */}
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/howItWorks" element={<HowItWorks />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/listings" element={<Listings />}></Route>
        <Route path="/createListing" element={<CreateListing />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
