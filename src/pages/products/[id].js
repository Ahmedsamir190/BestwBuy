import Image from "next/image";
import styles from "../../styles/Info.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addtocart } from "@/RTK/slice/cartSlice";
import { toast } from "react-toastify";

import {
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
  FaHandPeace,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useState, useEffect } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import Link from "next/link";
import ReactImageMagnify from "react-image-magnify";

function Info(props, deviceType) {
  const dispatch = useDispatch();
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 992 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 991, min: 568 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 567, min: 0 },
      items: 1,
    },
  };

  const selector = useSelector((state) => state.cart);
  const [products, setProducts] = useState([]);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products?offset=0&limit=10")
      .then((res) => res.json())
      .then((data) => setProducts(data));
    setloading(true);
  }, []);

  return (
    <>
      <section>
        <div className={styles.info}>
          <div className={styles.list}>
            <ul>
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              /
              <li>
                <Link href={"/products"}>products</Link>
              </li>
              /<li>{props.spacficproduct.category.name}</li>/
              <li>{props.spacficproduct.title}</li>
            </ul>
          </div>

          <div className="container">
            <div className={`card mb-3 ${styles.card}`}>
              <div className={`row g-0 align-items-center ${styles.content}`}>
                <div
                  className={`col-md-6 position-relative ${styles.cardimage}`}
                >
                  <div
                    className={`position-absolute top-50 start-50 translate-middle ${styles.handicon}`}
                  >
                    <FaHandPeace />
                    <span className={styles.zoomtitle}>Touch To Zoom</span>
                  </div>

                  <ReactImageMagnify
                    {...{
                      smallImage: {
                        alt: "Wristwatch by Ted Baker London",
                        isFluidWidth: true,
                        src: "/nophoto2.jpeg",
                      },
                      largeImage: {
                        src: "/nophoto2.jpeg",
                        width: 700,
                        height: 800,
                      },
                    }}
                    enlargedImagePosition="over"
                  />
                  {/* {props.spacficproduct.images[0] ? (
                    <Image
                      src={props.spacficproduct.images[0]}
                      className="card-img-top "
                      alt="..."
                      width={300}
                      height={300}
                      priority={true}
                    />
                  ) : (
                    <Image
                      src={"/nophoto2.jpeg"}
                      className="card-img-top "
                      alt="..."
                      width={300}
                      height={300}
                      priority={true}
                    />
                  )} */}
                </div>
                <div className="col-md-6">
                  <div className="card-body text-center">
                    <h5 className="card-title p-3 fw-bold bg-black text-white rounded">
                      {props.spacficproduct.title}
                    </h5>
                    <p className="card-text mt-5 lh-lg text-secondary">
                      {props.spacficproduct.description}
                    </p>
                    <button
                      onClick={() => {
                        dispatch(addtocart(props.spacficproduct));
                        toast.success(
                          `${props.spacficproduct.title} Added To Cart `,
                          {
                            position: "top-left",
                          }
                        );
                      }}
                      className="btn btn-dark"
                    >
                      Add To Cart
                    </button>
                    <div className="d-flex justify-content-between flex-column mt-4 gap-4">
                      {props.spacficproduct.price >= 100 ? (
                        <span>
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaRegStar />
                        </span>
                      ) : (
                        <span>
                          <FaStarHalfAlt />
                          <FaRegStar />
                          <FaRegStar />
                          <FaRegStar />
                          <FaRegStar />
                        </span>
                      )}
                      <div className={styles.typecategory}>
                        <span>Category:</span>
                        <span>{props.spacficproduct.category.name}</span>
                      </div>
                      <div className={`fw-bold fs-5 ${styles.price}`}>
                        <span>
                          ${props.spacficproduct.price}
                          <sub>00</sub>
                        </span>

                        {props.spacficproduct.price > 100 && <span>$1009</span>}
                      </div>
                      <div className={styles.shareicons}>
                        <h6>Share this Product</h6>
                        <FaFacebook />
                        <FaTwitter />
                        <FaLinkedin />
                        <FaYoutube />
                        <FaInstagram />
                      </div>
                      <p className="card-text  py-3">
                        <small className="text-body-secondary">
                          Last updated 3 mins ago
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.description}>
              <h2>description</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Similique aliquid sit expedita eius voluptatem consequuntur, ad
                deserunt optio adipisci fugiat? Vitae qui quasi facere explicabo
                dolorem voluptatum veniam obcaecati quia? Lorem ipsum, dolor sit
                amet consectetur adipisicing elit. Similique aliquid sit
                expedita eius voluptatem consequuntur, ad deserunt optio
                adipisci fugiat? Vitae qui quasi facere explicabo dolorem
                voluptatum veniam obcaecati quia?
              </p>
            </div>
            <div>
              <div className={styles.related}>
                <h1>Related Products</h1>
              </div>
              {products.length === 0 ? (
                <div className={styles.overlay}>
                  <BeatLoader color="black" loading={loading} size={20} />
                </div>
              ) : (
                <Carousel
                  responsive={responsive}
                  transitionDuration={1500}
                  keyBoardControl={true}
                  showDots={true}
                  className="pb-5"
                >
                  {products.map((product) => {
                    return (
                      <div className={`card ${styles.card}`} key={product.id}>
                        {/* {product.images[0] ? (
                          <Image
                            src={product.images[0]}
                            className="card-img-top  "
                            alt="/nophoto2.jpeg"
                            width={300}
                            height={300}
                            priority={true}
                          />
                        ) : (
                          <Image
                            src={"/nophoto2.jpeg"}
                            className="card-img-top  "
                            alt="photo"
                            width={300}
                            height={300}
                            priority={true}
                          />
                        )} */}
                        <Image
                          src={"/nophoto2.jpeg"}
                          className="card-img-top  "
                          alt="photo"
                          width={300}
                          height={300}
                          priority={true}
                        />
                        <div className="card-body">
                          <h5 className="card-title">
                            {product.title.slice(0, 20)}
                          </h5>
                          <p className="card-text">
                            {product.description.slice(0, 20)}
                          </p>

                          <span className={styles.relatedprice}>
                            ${product.price}
                            <sub>00</sub>
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </Carousel>
              )}
            </div>
          </div>
        </div>
      </section>
      ;
    </>
  );
}

export default Info;

export async function getStaticPaths() {
  const res = await fetch("https://api.escuelajs.co/api/v1/products");
  const data = await res.json();

  const paths = data.map((d) => {
    return {
      params: { id: `${d.id}` },
    };
  });
  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const res = await fetch(
    `https://api.escuelajs.co/api/v1/products/${context.params.id}`
  );
  const data = await res.json();
  return {
    props: {
      spacficproduct: data,
    },
  };
}
