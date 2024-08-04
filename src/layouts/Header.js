import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Collapse,
  Nav,
  NavItem,
  NavbarBrand,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Dropdown,
  Button,
} from "reactstrap";
import Logo from "./Logo";
import { ReactComponent as LogoWhite } from "../assets/images/logos/materialprowhite.svg";
import user1 from "../assets/images/users/user4.jpg";

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const Handletoggle = () => {
    setIsOpen(!isOpen);
  };
  const showMobilemenu = () => {
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };
  return (
    <Navbar color="primary" dark expand="md" className="fix-header">
      <div className="d-flex align-items-center">
        <div className="d-lg-block d-none me-5 pe-3">
          <Logo />
        </div>
        <NavbarBrand href="/">
          <LogoWhite className=" d-lg-none" />
        </NavbarBrand>
        <Button
          color="primary"
          className=" d-lg-none"
          onClick={() => showMobilemenu()}
        >
          <i className="bi bi-list"></i>
        </Button>
      </div>
      <div className="hstack gap-2">
        <Button
          color="primary"
          size="sm"
          className="d-sm-block d-md-none"
          onClick={Handletoggle}
        >
          {isOpen ? (
            <i className="bi bi-x"></i>
          ) : (
            <i className="bi bi-three-dots-vertical"></i>
          )}
        </Button>
      </div>

      <Collapse navbar isOpen={isOpen}>
        <Nav className="me-auto" navbar>
          <NavItem>
            <Link to="/starter" className="nav-link">
              Concursos Públicos
            </Link>
          </NavItem>
          <UncontrolledDropdown inNavbar nav>
            <DropdownToggle caret nav>
              Admissão
            </DropdownToggle>
            <DropdownMenu end>
              <DropdownItem>Enem/Sisu</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Vagas Remanescentes</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Vagas Residuais</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <UncontrolledDropdown inNavbar nav>
            <DropdownToggle caret nav>
              Pró-Reitorias
            </DropdownToggle>
            <DropdownMenu end>
              <DropdownItem>
                <Link to="editais/proex" className="dropdown-item">
                  PROEX
                </Link>
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem>
                <Link to="editais/proaes" className="dropdown-item">
                  PROAES
                </Link>
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem>
                <Link to="editais/prograd" className="dropdown-item">
                  PROGRAD
                </Link>
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem>
                <Link to="editais/propeg" className="dropdown-item">
                  PROPEG
                </Link>
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem>
                <Link to="editais/prodgep" className="dropdown-item">
                  PRODGEP
                </Link>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <UncontrolledDropdown inNavbar nav>
            <DropdownToggle caret nav>
              Centros Acadêmicos
            </DropdownToggle>
            <DropdownMenu end>
              <DropdownItem>
                <Link to="editais/ccbn" className="dropdown-item">
                  CCBN
                </Link>
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem>
                <Link to="editais/ccet" className="dropdown-item">
                  CCET
                </Link>
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem>
                <Link to="editais/ccjsa" className="dropdown-item">
                  CCJSA
                </Link>
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem>
                <Link to="editais/cela" className="dropdown-item">
                  CELA
                </Link>
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem>
                <Link to="editais/cfch" className="dropdown-item">
                  CFCH
                </Link>
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem>
                <Link to="editais/cmulti" className="dropdown-item">
                  CMULTI
                </Link>
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem>
                <Link to="editais/cel" className="dropdown-item">
                  CEL
                </Link>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <UncontrolledDropdown inNavbar nav>
            <DropdownToggle caret nav>
              Outros
            </DropdownToggle>
            <DropdownMenu end>
              <DropdownItem>CCBN</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>CCET</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>CCJSA</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>CELA</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>CFCH</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>CMULTI</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>CEL</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
        {
        /*
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle color="transparent">
            <img
              src={user1}
              alt="profile"
              className="rounded-circle"
              width="30"
            ></img>
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Info</DropdownItem>
            <DropdownItem>My Account</DropdownItem>
            <DropdownItem>Edit Profile</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>My Balance</DropdownItem>
            <DropdownItem>Inbox</DropdownItem>
            <DropdownItem>Logout</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        */}
      </Collapse>
    </Navbar>
  );
};

export default Header;
