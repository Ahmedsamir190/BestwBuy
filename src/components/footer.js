import Image from "next/image";
import {
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import styles from "../styles/Footer.module.css";
import { useState } from "react";

function Footer() {
  let year = new Date().getFullYear();
  const [date, setdate] = useState(year);
  return (
    <footer>
      <div className={styles.footer}>
        <div className="container">
          <div className={styles.content}>
            <div className="one text-center">
              <h3 className={`mb-5 ${styles.font}`}>About</h3>
              <p className="lh-lg mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis harum
              </p>
              <div className={styles.paymentlogo}>
                <Image
                  src="/mastercard.png"
                  alt="not found photo"
                  width={50}
                  height={50}
                />
                <Image
                  src="/paypal.png"
                  alt="not found photo"
                  width={50}
                  height={50}
                />
                <Image
                  src="/visa.png"
                  alt="not found photo"
                  width={50}
                  height={50}
                />
                <Image
                  src="/western.png"
                  alt="not found photo"
                  width={50}
                  height={50}
                />
              </div>
            </div>
            <div className="two">
              <h3 className={`mb-5 ${styles.font}`}>categories</h3>
              <ul className="lh-lg">
                <li>Clothing</li>
                <li>Foot Wears</li>
                <li>Hand Bag</li>
                <li>Belt</li>
              </ul>
            </div>
            <div className="three">
              <h3 className={`mb-5 ${styles.font}`}>Information</h3>
              <ul className="lh-lg">
                <li>CONTACT</li>
                <li>TERMS</li>
                <li>PRIVACY</li>
                <li>RETURNS</li>
              </ul>
            </div>
            <div className="four lh-lg text-center">
              <h3 className={`mb-5 ${styles.font}`}>Contact</h3>
              <p>Cyp , NewCairo,Egypt</p>
              <span>Mob : 123456789</span>
              <div className={styles.socialicons}>
                <FaFacebook className={styles.facebook} />
                <FaTwitter className={styles.twitter} />
                <FaLinkedin className={styles.linkedin} />
                <FaYoutube className={styles.youtube} />
                <FaInstagram className={styles.instagram} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className={styles.copyright}>
        Copy right © {date} By BestwBuy All Rights Reserved
      </p>
    </footer>
  );
}

export default Footer;
