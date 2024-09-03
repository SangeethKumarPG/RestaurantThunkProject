import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "/logonew.png";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { searchRestaurants } from "../redux/restaurantSlice";
function Header() {
  const dispatch = useDispatch();
  return (
    <>
      <Navbar variant="dark">
        <Container>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Navbar.Brand href="/">
              <img
                alt="logo"
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top me-2"
              />{" "}
              Food<span className="text-warning">Circle</span>
            </Navbar.Brand>
          </Link>
          <Nav>
            <Nav.Link>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Search by neighborhood"
                style={{ width: "40%", marginRight: "20rem" }}
                onChange={(e) => dispatch(searchRestaurants(e.target.value))}
              />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
