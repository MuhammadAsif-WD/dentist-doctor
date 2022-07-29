import { Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./Components/Pages/Home/Home";
import Header from "./Components/Pages/Header/Header";
import Footer from "./Components/Pages/Footer/Footer";
import Services from "./Components/Pages/Services/Services";
import Checkout from "./Components/Pages/Checkout/Checkout";
import Login from "./Components/LOG/Login/Login";
import Notfound from "./Components/Notfound/Notfound";
import Register from "./Components/LOG/Register/Register";
import About from "./Components/Pages/About/About";
import Blogs from "./Components/Pages/Blogs/Blogs";
import Logout from "./Components/LOG/Logout/Logout";
import RequireAuth from "./Components/RequredAuth/RequireAuth";

function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route
          path="/service/:CheckoutId"
          element={
            <RequireAuth>
              <Checkout />
            </RequireAuth>
          }
        />
        <Route
          path="/checkout"
          element={
            <RequireAuth>
              <Checkout />
            </RequireAuth>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
