import { useState, useEffect } from "react";
import { FaRegCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { GetTotalPrice } from "@/RTK/slice/cartSlice";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Checkout.module.css";
import PropagateLoader from "react-spinners/PropagateLoader";
import ProtectRoute from "@/components/protectroute/ProtectRoute";

function CheckOut() {
  const countriess = [
    "United States",
    "Canada",
    "Afghanistan",
    "Albania",
    "Algeria",
    "American Samoa",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antarctica",
    "Antigua and/or Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Bouvet Island",
    "Brazil",
    "British Indian Ocean Territory",
    "Brunei Darussalam",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Cape Verde",
    "Cayman Islands",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Christmas Island",
    "Cocos (Keeling) Islands",
    "Colombia",
    "Comoros",
    "Congo",
    "Cook Islands",
    "Costa Rica",
    "Croatia (Hrvatska)",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "East Timor",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Ethiopia",
    "Falkland Islands (Malvinas)",
    "Faroe Islands",
    "Fiji",
    "Finland",
    "France",
    "France, Metropolitan",
    "French Guiana",
    "French Polynesia",
    "French Southern Territories",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Greenland",
    "Grenada",
    "Guadeloupe",
    "Guam",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Heard and Mc Donald Islands",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran (Islamic Republic of)",
    "Iraq",
    "Ireland",
    "palestine",
    "Italy",
    "Ivory Coast",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea, Democratic People's Republic of",
    "Korea, Republic of",
    "Kuwait",
    "Kyrgyzstan",
    "Lao People's Democratic Republic",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libyan Arab Jamahiriya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macau",
    "Macedonia",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Martinique",
    "Mauritania",
    "Mauritius",
    "Mayotte",
    "Mexico",
    "Micronesia, Federated States of",
    "Moldova, Republic of",
    "Monaco",
    "Mongolia",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "Netherlands Antilles",
    "New Caledonia",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "Niue",
    "Norfolk Island",
    "Northern Mariana Islands",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Pitcairn",
    "Poland",
    "Portugal",
    "Puerto Rico",
    "Qatar",
    "Reunion",
    "Romania",
    "Russian Federation",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Georgia South Sandwich Islands",
    "Spain",
    "Sri Lanka",
    "St. Helena",
    "St. Pierre and Miquelon",
    "Sudan",
    "Suriname",
    "Svalbard and Jan Mayen Islands",
    "Swaziland",
    "Sweden",
    "Switzerland",
    "Syrian Arab Republic",
    "Taiwan",
    "Tajikistan",
    "Tanzania, United Republic of",
    "Thailand",
    "Togo",
    "Tokelau",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Turks and Caicos Islands",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States minor outlying islands",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Vatican City State",
    "Venezuela",
    "Vietnam",
    "Virgin Islands (British)",
    "Virgin Islands (U.S.)",
    "Wallis and Futuna Islands",
    "Western Sahara",
    "Yemen",
    "Yugoslavia",
    "Zaire",
    "Zambia",
    "Zimbabwe",
  ];

  const [loading, setloading] = useState(true);

  setTimeout(() => {
    setloading(false);
  }, 5000);

  const [validation, setValidation] = useState(false);

  let validationcondition = validation ? "was-validated" : "novalidate";

  const productincart = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  const [totalprice, settotalPrice] = useState();
  const [totalquantity, settotalQuantity] = useState();

  useEffect(() => {
    const totalpricee = productincart.reduce((acc, product) => {
      acc += product.price * product.quantity;
      return acc;
    }, 0);

    const total_quantity = productincart.reduce((cartquantity, cartitem) => {
      return cartquantity + cartitem.quantity;
    }, 0);

    settotalPrice(totalpricee);
    settotalQuantity(total_quantity);
  }, [productincart]);

  return (
    <ProtectRoute>
      <section>
        {loading ? (
          <div className={styles.overlay}>
            {/* <PropagateLoader color="black" loading={loading} size={50} /> */}
            <Image
              src={"/tet.gif"}
              alt={""}
              width={300}
              height={300}
              priority={true}
            />
          </div>
        ) : (
          <div className={styles.checkout}>
            <div className="container">
              <h1 className={styles.h1}>Billing details</h1>
              <div className={`${styles.checkoutcontent} needs-validation`}>
                <form
                  className={`${styles.form} bg-white border ${validationcondition}`}
                  action="/cart/success"
                  // onSubmit={() => dispatch(Clear())}
                >
                  <div className="name">
                    <label
                      htmlFor="validationCustom01"
                      className={`form-label my-3 ${styles.letterspace}`}
                    >
                      First name
                    </label>
                    <input
                      type="text"
                      className={`${styles.input} form-control`}
                      id="validationCustom01"
                      required
                    />
                    <div className="invalid-feedback">
                      {" "}
                      First name is required.
                    </div>
                    <div className="valid-feedback"> good!</div>
                  </div>
                  <div className="lastname">
                    <label
                      htmlFor="validationCustom02"
                      className={`form-label my-3 ${styles.letterspace}`}
                    >
                      Last name
                    </label>
                    <input
                      type="text"
                      className={`${styles.input} form-control`}
                      id="validationCustom02"
                      required
                    />
                    <div className="invalid-feedback">
                      {" "}
                      Last name is required.
                    </div>
                    <div className="valid-feedback"> good!</div>
                  </div>
                  <div className="email-phone">
                    <label
                      htmlFor="validationCustomUsername "
                      className={`form-label my-3 ${styles.letterspace}`}
                    >
                      Phone
                    </label>
                    <div className="input-group has-validation">
                      <input
                        type="nubmer"
                        className={`${styles.input} form-control`}
                        id="validationCustomUsername"
                        aria-describedby="inputGroupPrepend"
                        required
                      />
                      <div className="invalid-feedback">
                        {" "}
                        Phone is required.
                      </div>
                    </div>
                  </div>
                  <div className="email">
                    <label
                      htmlFor="validationCustom03"
                      className={`form-label my-3 ${styles.letterspace}`}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      className={`${styles.input} form-control`}
                      id="validationCustom03"
                      required
                    />
                    <div className="invalid-feedback">
                      Please provide a valid email.
                    </div>
                  </div>
                  <div className="country">
                    <label
                      htmlFor="validationCustom05"
                      className={`htmlForm-label my-3 ${styles.letterspace}`}
                    >
                      Choose country
                    </label>
                    <input
                      list="countries"
                      className={`${styles.input} form-control`}
                      id="validationCustom05"
                      placeholder="Type to search..."
                      required
                    />
                    <datalist id="countries">
                      {countriess.map((country, index) => {
                        return <option value={country} key={index} />;
                      })}
                    </datalist>
                    <div className="invalid-feedback">
                      Please provide a valid Country.
                    </div>
                  </div>
                  <div>
                    <h1 className={`${styles.shippingtitle} mb-0`}>
                      Shipping info
                    </h1>
                    <div className={styles.typeofshipment}>
                      <div
                        className={styles.typeofshipping}
                        // onClick={() => {
                        //   handleshipinfo();
                        // }}
                      >
                        <h6>
                          {" "}
                          <FaRegCircle /> Express delivery
                        </h6>
                        <p className="m-0">3-4 days via Fedex</p>
                      </div>
                      <div
                        className={` type-of-shipping `}
                        // onClick={() => {
                        //   handleshipinfotwo();
                        // }}
                      >
                        <h6>
                          {" "}
                          <FaRegCircle /> Express delivery
                        </h6>
                        <p className="m-0">3-4 days via Fedex</p>
                      </div>
                      <div
                        className={` type-of-shipping `}
                        // onClick={() => {
                        //   handleshipinfothree();
                        // }}
                      >
                        <h6>
                          {" "}
                          <FaRegCircle /> Express delivery
                        </h6>
                        <p className="m-0">3-4 days via Fedex</p>
                      </div>
                    </div>
                  </div>
                  <div className="address">
                    <label
                      htmlFor="validationCustom03"
                      className={`form-label my-3 ${styles.letterspace}`}
                    >
                      address
                    </label>
                    <input
                      type="text"
                      className={`${styles.input} form-control`}
                      id="validationCustom03"
                      required
                    />
                    <div className="invalid-feedback">
                      Please provide a valid address.
                    </div>
                  </div>
                  <div className="address">
                    <label
                      htmlFor="validationCustom03"
                      className={`htmlForm-label my-3 ${styles.letterspace}`}
                    >
                      city
                    </label>
                    <input
                      type="text"
                      className={`${styles.input} form-control`}
                      id="validationCustom03"
                      required
                    />
                    <div className="invalid-feedback">
                      Please provide a valid City.
                    </div>
                  </div>
                  <div className="address">
                    <label
                      htmlFor="validationCustom03"
                      className={`form-label my-3 ${styles.letterspace}`}
                    >
                      ZIPCODE
                    </label>
                    <input
                      type="number"
                      className={`${styles.input} form-control`}
                      id="validationCustom03"
                      required
                    />
                    <div className="invalid-feedback">
                      Please provide a valid ZIPCODE.
                    </div>
                  </div>
                  <div className="delivery">
                    <label className="my-3" htmlFor="message">
                      Delivery instructions (optional)
                    </label>
                    <textarea
                      name="subject"
                      cols="30"
                      rows="10"
                      placeholder="Write Message Here"
                      id="message"
                      className="p-2 w-100 border"
                    ></textarea>
                  </div>
                  <div>
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
                        Agree to terms and conditions
                      </label>
                      <div className="invalid-feedback">
                        You must agree before submitting.
                      </div>
                    </div>
                  </div>
                  <div className={styles.buttons}>
                    <Link href="/cart">
                      <button className="btn btn-outline-dark">Cancel</button>
                    </Link>
                    <button
                      className="btn btn-outline-dark"
                      type="submit"
                      onClick={() => {
                        setValidation(true);
                      }}
                    >
                      Submit form
                    </button>
                  </div>
                </form>
                <div className={styles.ordersummary}>
                  <h4 className="fw-bold">Order Summary</h4>
                  <div>
                    <div className={styles.orderinfo}>
                      <span>Total price:</span>
                      {totalprice >= 1 ? (
                        <span>${totalprice.toFixed(2)}</span>
                      ) : (
                        <span>${totalprice}</span>
                      )}
                    </div>
                    <div className={styles.orderinfo}>
                      <span>Discount:</span>
                      <span className="text-danger">0</span>
                    </div>
                    <div className={styles.orderinfo}>
                      <span>Shipping cost:</span>
                      <span className="text-success fw-bold">+ $55</span>
                    </div>

                    <div
                      className={`${styles.orderinfo} ${styles.totalborder}`}
                    >
                      <span className="fw-bold">Order total </span>
                      <span> ${totalprice + 55}</span>
                    </div>
                    <h3 className="py-5">Items In Cart</h3>
                    {productincart.map((item) => {
                      return (
                        <>
                          <div className={styles.product} key={item.id}>
                            <div className={styles.imgwithquantity}>
                              <Image
                                src={item.category.image}
                                alt="nophoto"
                                width={100}
                                height={100}
                                priority={true}
                              />
                              <div className={styles.quantity}>
                                <span className={styles.span}>
                                  {item.quantity}
                                </span>
                              </div>
                            </div>

                            <div className="lh-base text-center">
                              <h6>{item.title.slice(0, 20)}</h6>
                              <span>price: ${item.price}</span>
                            </div>
                          </div>
                        </>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </ProtectRoute>
  );
}

export default CheckOut;
