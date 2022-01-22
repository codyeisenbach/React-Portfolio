import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import PortfolioContext from "../../utils/PortfolioContext.js";
import Logo from "../Logo/index.js";

import "./style.css";

function Navie() {
  const { setChoiceState } = useContext(PortfolioContext);

  const clickHandler = (event) => {
    setChoiceState(event.target.getAttribute("value"));
  };

  return (
    <Navbar
      className="nav-style"
      bg="dark"
      variant="dark"
      expand="lg"
      fixed="top"
    >
      <Container>
        <Logo className="logo" />
        <Navbar.Brand
          className="nav-brand"
          value="Pinned"
          as={Link}
          to="/"
          onClick={clickHandler}
        >
          J Cody Eisenbach
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav " />

        <Navbar.Collapse className="align-var" id="basic-navbar-nav">
          <Nav>
            <Nav.Link
              className="nav-link"
              value="Pinned"
              as={Link}
              to="/"
              onClick={clickHandler}
            >
              Home
            </Nav.Link>

            <Nav.Link className="nav-link" as={Link} to="/Resume">
              Resume
            </Nav.Link>
            <NavDropdown
              className="drop-drop"
              title="Repositories"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item
                className="nav-drop"
                as={Link}
                to="/"
                value="React"
                onClick={clickHandler}
              >
                React
              </NavDropdown.Item>
              {/* <NavDropdown.Item
                className="nav-drop"
                as={Link}
                to="/"
                value="Nextjs"
                onClick={clickHandler}
              >
                Next.js
              </NavDropdown.Item> */}
              <NavDropdown.Item
                className="nav-drop"
                as={Link}
                to="/"
                value="Full Stack"
                onClick={clickHandler}
              >
                Full Stack
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                className="nav-drop"
                as={Link}
                to="/"
                value="All"
                onClick={clickHandler}
              >
                All Repos
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navie;
