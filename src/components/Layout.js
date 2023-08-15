import Footer from "./footer";
import Navbarcomponent from "./navbarcomponent";

function Layout(props) {
  return (
    <>
      <Navbarcomponent />
      {props.children}
      <Footer />
      {/* <header>
        <nav className={`navbar navbar-expand-lg bg-dark ${styles.nav} `}>
          <div className="container">
            <a
              className={`navbar-brand text-white fs-1 fw-bold me-5 ${styles.a}`}
              href="#"
            >
              BestwBuy
            </a>
            <button
              className="navbar-toggler bg-white"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-between"
              id="navbarNav"
            >
              <ul className="navbar-nav">
                <li className={`nav-item ${styles.li}`}>
                  <Link
                    className="nav-link active text-white"
                    aria-current="page"
                    href="/"
                  >
                    Home
                  </Link>
                </li>
                <li className={`nav-item ${styles.li}`}>
                  <Link className="nav-link text-white" href="/products">
                    Products
                  </Link>
                </li>
                <li className={`nav-item ${styles.li}`}>
                  <Link className="nav-link text-white" href="#">
                    Pricing
                  </Link>
                </li>
              </ul>
              <div class="dropdown">
                <FaUser className={`text-white ${styles.usericon}`} />
                <button
                  class="btn btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Account
                </button>
                <ul class="dropdown-menu">
                  <li>
                    {currentUser ? (
                      <div className="d-flex align-items-center justify-content-around">
                        <span className="text-white ">{currentUser.email}</span>
                        <span
                          onClick={logout}
                          style={{
                            cursor: "pointer",
                            fontWeight: "900",
                            color: "white",
                          }}
                        >
                          logout
                        </span>
                      </div>
                    ) : (
                      <Link
                        href={"/signin"}
                        className="text-white account text-decoration-none "
                      >
                        {" "}
                        <FaSignInAlt /> Sign In
                      </Link>
                    )}
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>
              <DropdownButton
                id="dropdown-basic-button"
                title="Dropdown button"
              >
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </DropdownButton>
              <Link href="/cart">
                <div className="position-relative">
                  <FaCartArrowDown
                    className={`text-white fs-1 ${styles.cart}`}
                  />
                  <span className={styles.cartlength}>{cartnumber.length}</span>
                </div>
              </Link>
            </div>
          </div>
        </nav>
      </header>  */}
    </>
  );
}
export default Layout;
