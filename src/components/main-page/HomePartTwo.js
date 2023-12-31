import Image from "next/image";
import styles from "../../styles/Home.module.css";

function HomePartTwo() {
  return (
    <section className={styles.landingtwo}>
      <div className="container">
        <div className={styles.ourfavorites}>
          <h1>Our Favorites</h1>
          <div className={styles.types}>
            <span>FOR EVERYDAY</span>
            <span>FOR ACTIVITY</span>
            <span>FOR TRAVEL</span>
          </div>
        </div>
        <div className={styles.allcard}>
          <div className={`card ${styles.card}`}>
            <Image
              src={"/one.jpeg"}
              className="card-img-top"
              alt="photo"
              width={300}
              height={300}
              priority={true}
            />
            <button
              className={`position-absolute top-50 start-50 translate-middle ${styles.shopbutton}`}
            >
              Shop Now
            </button>
            <div className="card-body">
              <h5 className={`card-title ${styles.title}`}>Tree Runner</h5>
              <p className="card-text">Light and Breezy Sneaker</p>
            </div>
          </div>
          <div className={`card ${styles.card}`}>
            <Image
              src={"/two.jpeg"}
              className="card-img-top  "
              alt="photo"
              width={300}
              height={300}
              priority={true}
            />
            <button
              className={`position-absolute top-50 start-50 translate-middle ${styles.shopbutton}`}
            >
              Shop Now
            </button>
            <div className="card-body">
              <h5 className={`card-title ${styles.title}`}>Tree Breezer</h5>
              <p className="card-text">Breezy Flat</p>
            </div>
          </div>
          <div className={`card ${styles.card}`}>
            <Image
              src={"/three.jpeg"}
              className="card-img-top  "
              alt="photo"
              width={300}
              height={300}
              priority={true}
            />
            <button
              className={`position-absolute top-50 start-50 translate-middle ${styles.shopbutton}`}
            >
              Shop Now
            </button>
            <div className="card-body">
              <h5 className={`card-title ${styles.title}`}>Wool Runner</h5>
              <p className="card-text">Cozy Sneaker</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomePartTwo;
