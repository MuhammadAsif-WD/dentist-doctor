import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { auth } from "../../../firebase.init";
import teeth from "../../../image/dentist-teeth pic/dentistry.png";

const Header = () => {
  const [user] = useAuthState(auth);
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        style={{
          backgroundColor: "#0f172a",
          boxShadow:
            " 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 10px 30px 0 rgba(0, 0, 0, 0.29",
        }}
        variant="dark"
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            <div className="flex gap-1 align-center">
              <div className="text-lg xl:text-2xl ">Dentist Doctor</div>
              <img
                style={{ width: "40px", height: "40px" }}
                src={teeth}
                alt=""
              />
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="text-xs xl:text-xl me-auto">
              <div className="flex gap-3 xl:gap-20">
                <Nav.Link as={Link} to="/" className="xl:ml-96">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/services">
                  Services
                </Nav.Link>
                <Nav.Link as={Link} to="/checkout">
                  Checkout
                </Nav.Link>
                <Nav.Link as={Link} to="/about">
                  About
                </Nav.Link>
                <Nav.Link as={Link} to="/blogs">
                  Blogs
                </Nav.Link>
                {user ? (
                  <button
                    className="text-slate-400"
                    onClick={() => signOut(auth)}
                  >
                    Logout
                  </button>
                ) : (
                  <Nav.Link as={Link} to="/login">
                    Login
                  </Nav.Link>
                )}
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
