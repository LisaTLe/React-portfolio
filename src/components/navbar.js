// import React from "react";

// const styles = {
//   card: {
//     margin: 20,
//     background: "#aa998f",
//   },
//   heading: {
//     background: "#7d4f50",
//     minHeight: 50,
//     lineHeight: 3.5,
//     fontSize: "1.2rem",
//     color: "#f9eae1",
//     padding: "0 20px",
//   },
// };

// function Navbar() {
//   return (

//     <div style={styles.card}>
//       <div>Home</div>
//       <div style={styles.heading}>Home</div>
//     </div>
//   );
// }

// export default Navbar;

// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";

// function navbar() {
//   return (
//     <Navbar expand="md">
//       <Container>
//         {/* <Navbar.Brand href="#home">Lisa Le</Navbar.Brand> */}
//         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="ms-auto" defaultActiveKey="#home">
//             <Nav.Link href="#home" to="/home">
//               Home
//             </Nav.Link>
//             <Nav.Link href="#about">About Me</Nav.Link>
//             <Nav.Link href="#contact">Contact</Nav.Link>
//             <Nav.Link href="#portfolio">Portfolio</Nav.Link>
//             <Nav.Link href="#resume">Resume</Nav.Link>
// {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//   <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//   <NavDropdown.Item href="#action/3.2">
//     Another action
//   </NavDropdown.Item>
//   <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//   <NavDropdown.Divider />
//   <NavDropdown.Item href="#action/3.4">
//     Separated link
//   </NavDropdown.Item>
// </NavDropdown> */}
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default navbar;

import React from "react";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";

export default function navbar() {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <a href="#home" className="logo">
            <AutoAwesomeOutlinedIcon /> Lisa Le.&nbsp;
          </a>
          <a href="#home" className="home-nav">
            Home&nbsp;
          </a>
          <a href="#about" className="about-nav">
            About&nbsp;
          </a>
          <a href="#portfolio" className="portfolio-nav">
            Portfolio&nbsp;
          </a>
          <a href="#resume" className="resume-nav">
            Resume&nbsp;
          </a>
          <a href="#contact" className="contact-nav">
            Contact&nbsp;
          </a>
        </div>
      </div>
    </div>
  );
}
