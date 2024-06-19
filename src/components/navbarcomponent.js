import Link from "next/link";
import { FaCartArrowDown, FaSignOutAlt, FaUserCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import styles from "../styles/Header.module.css";
import { auth } from "../Firebase";
import { signOut } from "firebase/auth";
import UseAuth from "./useAuth/UseAuth";
import Swal from "sweetalert2";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
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
          <Link href="/" className={`text-white ${styles.a}`}>
            W
          </Link>
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
            </Nav>
            <Nav className={` align-items-center ${styles.cartandsign}  `}>
              <div className={styles.cartandllength}>
                <Link href="/cart" name="cart">
                  <FaCartArrowDown className={` fs-1 ${styles.cart}`} />
                </Link>
                <span>{cartnumber.length}</span>
              </div>

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
