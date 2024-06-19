import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import Swal from "sweetalert2";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { setDoc, doc } from "firebase/firestore";
import {
  FaShoppingCart,
  FaUserEdit,
  FaEye,
  FaRegEyeSlash,
  FaSmile,
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { auth, storage, db } from "../Firebase";
import { toggleVisiblePass } from "../RTK/slice/passToggle";
import styles from "../styles/Sign.module.css";

function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setloading] = useState(false);

  const [validation, setValidation] = useState(false);
  //Thats for form validation add class to show validation
  let validationcondition = validation ? "was-validated" : "novalidate";

  const router = useRouter();

  /* - here first one i try to prevent default for form 
     - and update state to loading some loader
     - i make try and catch method to to send date for new email to firebase server
     - i used sweet alert library to show user when the operation done or show error 
*/
  const handleSubmit = async (e) => {
    e.preventDefault();
    setloading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = await userCredential.user;

      const storageRef = ref(storage, `images/${Date.now() + username}`);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        (error) => {
          Swal.fire(error.message, "error");
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(user, {
              displayName: username,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "users", user.uid), {
              uid: user.uid,
              displayName: username,
              email,
              photoURL: downloadURL,
            });
          });
        }
      );
      Swal.fire("Great!", "Your Account Created", "success");
      router.push("/");
      setloading(false);
    } catch (error) {
      setloading(false);
      Swal.fire(error.message, "error");
    }
  };

  const togglepass = useSelector((state) => state.PassToggle.visiblePass);
  let condition = togglepass ? "text" : "password";

  const dispatch = useDispatch();

  let Handlepass = () => {
    dispatch(toggleVisiblePass());
  };

  // const ref = useRef();
  // useEffect(() => {
  //   ref.current.focus();
  // }, []);
  const scroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <section>
      <div className="container">
        <div className={styles.signuppage}>
          {loading ? (
            <div className="overlay">
              <Image
                src={"/placeholdersignup.gif"}
                alt={""}
                className="img-fluid"
                width={300}
                height={300}
                priority={true}
              />
            </div>
          ) : (
            <>
              <div className={styles.photoup}>
                <Image
                  src={"/signuplastt.gif"}
                  alt={""}
                  className="img-fluid"
                  width={1500}
                  height={500}
                  priority={true}
                />
              </div>
              {/* here i divided page for two part photo and form  */}
              <div className={`${styles.form} `}>
                <div className={styles.title}>
                  <Link href="/" className="text-decoration-none">
                    <h3 className={`${styles.h3} text-dark`}>BestWBuy</h3>
                  </Link>
                  <FaShoppingCart className="fs-1" />
                </div>
                <span className={styles.welcome}>
                  Welcome In BestwBuy <FaSmile />
                </span>
                <div className={styles.signtitle}>
                  <h1 className="fs-1">Sign Up</h1>
                </div>
                <form onSubmit={handleSubmit} className={validationcondition}>
                  <label
                    htmlFor="validationCustom01"
                    className="mb-3 text-secondary form-label"
                  >
                    Full Name
                  </label>
                  <div className={styles.name}>
                    <input
                      type="text"
                      placeholder="Full Name"
                      className={`  form-control`}
                      id="validationCustom01"
                      value={username}
                      required
                      onChange={(e) => {
                        setUsername(e.target.value);
                      }}
                    />
                    <span>
                      <FaUserEdit />
                    </span>
                    <div className="invalid-feedback">
                      Please provide a valid Name.
                    </div>
                  </div>
                  <label
                    htmlFor="validationCustom02"
                    className="form-label my-3 text-secondary"
                  >
                    Email
                  </label>
                  <div className={styles.email}>
                    <input
                      type="email"
                      className={`form-control`}
                      placeholder="Email"
                      id="validationCustom02"
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
                    htmlFor="validationCustom03"
                    className="form-label my-3 text-secondary"
                  >
                    password
                  </label>
                  <div className={styles.password}>
                    <input
                      type={condition}
                      className={` form-control`}
                      placeholder="password"
                      id="validationCustom03"
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
                      <span className={styles.eyeicon}>
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

                  <div className="d-flex gap-1 my-3">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="invalidCheck"
                        required
                      />
                      <label
                        className="form-check-label"
                        htmlFor="invalidCheck"
                      >
                        I agree to the{" "}
                        <span className="text-primary">Terms</span> and{" "}
                        <span className="text-primary">Privacy.</span>{" "}
                      </label>
                      <div className="invalid-feedback">
                        You must agree before SignUp.
                      </div>
                    </div>
                  </div>

                  <div className="signin-button">
                    <input
                      type="submit"
                      value={"Sign Up"}
                      className="btn btn-dark my-3 w-100"
                      onClick={() => {
                        setValidation(true);
                        scroll();
                      }}
                    />
                  </div>
                  <div>
                    <span className="mt-3 text-secondary">
                      Already a member ?{" "}
                    </span>
                    <Link href="/signin">Sign in</Link>
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

export default SignUp;
