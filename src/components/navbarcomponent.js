import Link from "next/link";
import {
  FaCartArrowDown,
  FaUser,
  FaSignInAlt,
  FaSignOutAlt,
  FaUserCircle,
  FaKeyboard,
  FaRegHeart,
  FaCrown,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/Header.module.css";
import { useState, useEffect } from "react";
import { auth } from "../Firebase";
import { signOut } from "firebase/auth";
import UseAuth from "./useAuth/UseAuth";
import Swal from "sweetalert2";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

function Navbarcomponent() {
  const { currentUser } = UseAuth();

  const cartnumber = useSelector((state) => state.cart);

  const logout = () => {
    signOut(auth)
      .then(() => {
        Swal.fire("You LogOut", "We Hope See You Again", "success");
      })
      .catch((error) => {
        Swal.fire(error.message, "error");
      });
  };
  return (
    <header>
      <Navbar
        expand="lg"
        className="bg-white"
        data-bs-theme="light"
        style={{
          borderBottom: "1px solid gainsboro",
        }}
      >
        <Container>
          <Navbar.Brand href="/" className={`text-white ${styles.a}`}>
            W
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className={styles.navbarcollapse}
          >
            <Nav className={` align-items-center ${styles.pagelist} `}>
              <Link href="/" className={styles.homeclick}>
                Home
              </Link>

              <Link href="/products" className={styles.Productsclick}>
                Products
              </Link>
              <Link
                href="/productsaction"
                className={styles.ProductsActionclick}
              >
                Products-Action
              </Link>

              {/* <Nav className=" align-items-center flex-row gap-2  ">
                <NavDropdown
                  title="Account"
                  id="basic-nav-dropdown"
                ></NavDropdown>
              </Nav> */}
            </Nav>
            <Nav className={` align-items-center ${styles.cartandsign}  `}>
              <div className={styles.cartandllength}>
                <Link href="/cart" name="cart">
                  <FaCartArrowDown className={` fs-1 ${styles.cart}`} />
                </Link>
                <span>{cartnumber.length}</span>
              </div>

              {/* <Nav className={`${styles.list} `}>
              {currentUser ? (
                <>
                  <h5 className={` ${styles.h5}`}>
                    Welcome <FaUserCircle /> {currentUser.email}
                  </h5>
                  <div className={` ${styles.logout} `}>
                    <button
                      onClick={logout}
                      style={{ cursor: "pointer" }}
                      className="btn btn-outline-dark"
                    >
                      <FaSignOutAlt className="fs-4" />
                      logout
                    </button>
                  </div>
                </>
              ) : (
                <Link href="/signin">
                  <button className="btn btn-outline-dark">
                    <FaSignInAlt /> Sign In
                  </button>
                </Link>
              )}
              <Tippy
                content="Feature Update Now "
                interactive={true}
                interactiveBorder={20}
                delay={10}
                placement="bottom"
              >
                <NavDropdown.Item href="#action/3.2">
                  <FaKeyboard className="fs-2" /> Order
                </NavDropdown.Item>
              </Tippy>
              <Tippy
                content="Not Available Now"
                interactive={true}
                interactiveBorder={20}
                delay={50}
                placement="bottom"
              >
                <NavDropdown.Item href="#action/3.3">
                  <FaCrown className="fs-2" />
                  SpecialOr
                </NavDropdown.Item>
              </Tippy>
              <NavDropdown.Divider />
              <Tippy
                content="Feature Update Now "
                interactive={true}
                interactiveBorder={20}
                delay={50}
                placement="bottom"
              >
                <NavDropdown.Item href="#action/3.4">
                  <FaRegHeart className="fs-2" /> Saved Item
                </NavDropdown.Item>
              </Tippy>
            </Nav> */}
              <div className={styles.signbutton}>
                {currentUser && currentUser.email ? (
                  <div className={styles.emailandlogout}>
                    <h5>
                      Welcome <FaUserCircle /> {currentUser.email.slice(0, 7)}
                    </h5>
                    <div>
                      <button
                        onClick={logout}
                        style={{ cursor: "pointer" }}
                        className="btn btn-outline-dark"
                      >
                        <FaSignOutAlt className="fs-4" />
                        logout
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    <Link href="/signin">Sign In</Link>|
                    <Link href="/signup">
                      <button className="btn btn-outline-dark">Register</button>
                    </Link>
                  </>
                )}
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Navbarcomponent;
