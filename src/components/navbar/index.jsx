import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import userImage from "../../asset/download.png";
import Navbar from "react-bootstrap/Navbar";
import styles from "./Navbar.module.css";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavScrollExample() {
  return (
    <Navbar expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Mitramas Infosys Global</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            {/* <Nav.Link href="/restapi">REST API</Nav.Link> */}
          </Nav>
          <Form className="d-flex">
            <div className={styles.nav_right}>
              <i class={`bi bi-search ${styles.nav_icon}`}></i>
              <i class="bi bi-bell"></i>
            </div>
            <div>
              <img
                src={userImage}
                alt=""
                width="25"
                style={{ borderRadius: "50%" }}
                className={styles.nav_user}
              />
              <span>john doe</span>
            </div>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
