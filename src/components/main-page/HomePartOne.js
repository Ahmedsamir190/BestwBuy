import Link from "next/link";
import styles from "../../styles/Home.module.css";
import Carouselcomponent from "../carousel/Carouselcomponent";
import { FaTelegramPlane, FaUndoAlt, FaLock, FaTag } from "react-icons/fa";

function HomePartOne() {
  return (
    <section className={styles.landingone}>
      <Carouselcomponent />
      <div
        className={`position-absolute top-50 start-50 translate-middle ${styles.content}`}
      >
        <h3>Meet The Perfect Travel Products</h3>
        <p>
          Super Packable. Versatile. And All-Day (And Night) Adventure Ready.
        </p>
        <Link href={"/products"}>click</Link>
      </div>
      <div className={styles.list}>
        <ul>
          <li>
            <FaTelegramPlane />
            Free shipping
          </li>
          <li>
            <FaUndoAlt />
            Free Returns
          </li>
          <li>
            <FaLock />
            100% Secure
          </li>
          <li>
            <FaTag />
            Best Price
          </li>
        </ul>
      </div>
    </section>
  );
}

export default HomePartOne;
