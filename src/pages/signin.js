import { FaShoppingCart } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { FaEye, FaRegEyeSlash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { auth } from "../Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import Swal from "sweetalert2";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Sign.module.css";
import { toggleVisiblePass } from "@/RTK/slice/passToggle";
import { useRouter } from "next/router";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setloading] = useState(false);

  /* validation form*/
  const [validation, setValidation] = useState(false);

  let validationcondition = validation ? "was-validated" : "novalidate";

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setloading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      Swal.fire("Done", "You Logged in", "success");
      router.push("/");
      setloading(false);
    } catch (error) {
      Swal.fire("Email or Password ", "incorrect", "error");
      setloading(false);
    }
  };

  /*toggle password*/
  const togglepass = useSelector((state) => state.PassToggle.visiblePass);
  let condition = togglepass ? "text" : "password";

  const dispatch = useDispatch();
  let Handlepass = () => {
    dispatch(toggleVisiblePass());
  };

  const ref = useRef();

  useEffect(() => {
    ref.current.focus();
  }, []);

  const scroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <section>
      <div className="container">
        <div className={styles.signpage}>
          {loading ? (
            <div className={styles.overlay}>
              <Image
                src={"/signinplaceholder.gif"}
                alt={""}
                className="img-fluid"
                width={300}
                height={300}
                priority={true}
                style={{ mixBlendMode: "hard-light" }}
              />
            </div>
          ) : (
            <>
              <div className={styles.photo}>
                <Image
                  src={"/signinlast.jpeg"}
                  alt={""}
                  className="img-fluid"
                  width={1500}
                  height={500}
                  priority={true}
                />
              </div>
              <div className={`${styles.form} `}>
                <div className={styles.title}>
                  <Link href="/" className="text-decoration-none text-dark">
                    <h3 className={` text-dark`}>BestWBuy</h3>
                  </Link>
                  <FaShoppingCart className="fs-1" />
                </div>
                <span className={styles.welcome}>Welcome Back !</span>

                <div className={styles.signtitle}>
                  <h1 className={`fs-1 text-body-tertiary `}>Sign In</h1>
                </div>
                <form
                  onSubmit={handleSubmit}
                  className={`${validationcondition} mt-4 `}
                >
                  <label
                    htmlFor="validationCustom01"
                    className="form-label mb-3 text-secondary"
                  >
                    Email
                  </label>
                  <div className={styles.email}>
                    <input
                      type="email"
                      ref={ref}
                      className={` form-control`}
                      placeholder="Example@mail.com"
                      id="validationCustom01"
                      required
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                    <span>
                      <FiMail />
                    </span>
                    <div className="invalid-feedback">
                      Please provide a valid email.
                    </div>
                  </div>

                  <label
                    htmlFor="validationCustom02"
                    className="form-label my-3 text-secondary"
                  >
                    password
                  </label>

                  <div className={styles.password}>
                    <input
                      type={condition}
                      className={`  form-control`}
                      placeholder="password"
                      id="validationCustom02"
                      required
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                    {togglepass ? (
                      <span>
                        <FaEye
                          onClick={() => {
                            Handlepass();
                          }}
                        />
                      </span>
                    ) : (
                      <span>
                        <FaRegEyeSlash
                          onClick={() => {
                            Handlepass();
                          }}
                        />
                      </span>
                    )}

                    <div className="invalid-feedback">
                      Please provide a valid password.
                    </div>
                  </div>
                  <div className={styles.forgotpassword}>
                    <input id="rememberme" type="checkbox" />
                    <label htmlFor="rememberme" className="my-3 text-secondary">
                      {" "}
                      Remember me
                    </label>
                    <span className={styles.span}>Forgot password?</span>
                  </div>
                  <div className="signin-button">
                    <input
                      type="submit"
                      value={"Sign In"}
                      className="btn btn-dark my-3 w-100"
                      onClick={() => {
                        setValidation(true);
                        scroll();
                      }}
                    />
                  </div>
                  <div className={`${styles.signupbutton} gap-2`}>
                    <span className="text-secondary ">Not a member?</span>
                    <Link href={"/signup"}>Sign Up Now</Link>
                  </div>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default SignIn;
