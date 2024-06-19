import Image from "next/image";
import styles from "../../styles/Products.module.css";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addtocart } from "@/RTK/slice/cartSlice";
import { toast } from "react-toastify";
import {
  FaArrowUp,
  FaShoppingCart,
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
} from "react-icons/fa";
import { useEffect, useState } from "react";
import Aside from "@/components/Aside/Aside";
import Paginationn from "@/components/pagination/pagination";
import BeatLoader from "react-spinners/BeatLoader";

function Products(props) {
  const dispatch = useDispatch();
  const [placeholder, setPlaceholer] = useState(true);
  const [currentpage, setCurrentpage] = useState(1);
  const [productsperpage, setProductsperpage] = useState(40);
  const [showbutton, setShowbutton] = useState(false);
  const [products, setProducts] = useState(props.product);
  const [categories, setCategories] = useState([]);
  const [isHovered, setIsHovered] = useState(false);
  const [loadingaside, setLoadingaside] = useState(false);

  // here i start to not loading all date and make a pagination
  const indexoflastproduct = currentpage * productsperpage;
  const indexoffirstproduct = indexoflastproduct - productsperpage;

  const currentproduct = products.slice(
    indexoffirstproduct,
    indexoflastproduct
  );

  //here function for filter by category
  const GetspecificCategory = (catagoryId) => {
    fetch(`https://api.escuelajs.co/api/v1/products/?categoryId=${catagoryId}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  };
  // here request to get all categories and start display
  const GetallCategories = () => {
    fetch("https://api.escuelajs.co/api/v1/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  };

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  setTimeout(() => {
    setPlaceholer(false);
  }, 3000);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 500) {
        setShowbutton(true);
      } else {
        setShowbutton(false);
      }
    });
    GetallCategories();
  }, []);

  const scroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const HandleLoading = () => {
    setLoadingaside(true);
    setTimeout(() => {
      setLoadingaside(false);
    }, 3000);
  };
  return (
    <section>
      <div className={styles.productpage}>
        <div className="container">
          <div className={styles.title}>
            <h2>New Collection</h2>
          </div>
          {loadingaside ? (
            <div className={styles.overlay}>
              <BeatLoader color={"black"} loading={loadingaside} size={50} />
            </div>
          ) : (
            <div className={styles.filterandcard}>
              <aside className={styles.aside}>
                <Aside
                  Getspecificcategory={GetspecificCategory}
                  setProducts={setProducts}
                  categories={categories}
                  products={products}
                  HandleLoading={HandleLoading}
                />
              </aside>
              <div className={styles.allcard}>
                {currentproduct.length === 0 ? (
                  <Image
                    src={"/noproductfound.png"}
                    className="card-img-top "
                    alt="..."
                    width={300}
                    height={300}
                    priority={true}
                  />
                ) : (
                  currentproduct.map((prodduct, index) => {
                    const imgurl =
                      prodduct.images.length > 1
                        ? prodduct.images[0]
                        : "/nophoto2.jpeg";

                    return (
                      <div key={index}>
                        {placeholder ? (
                          <div
                            className="card"
                            aria-hidden="true"
                            style={{ width: "18rem" }}
                          >
                            <Image
                              src={"/emptygray.jpg"}
                              className="card-img-top "
                              alt="..."
                              width={300}
                              height={300}
                              priority={true}
                            />
                            <div className="card-body">
                              <h5 className="card-title placeholder-glow">
                                <span className="placeholder col-6"></span>
                              </h5>
                              <p className="card-text placeholder-glow">
                                <span className="placeholder col-7"></span>
                                <span className="placeholder col-4"></span>
                                <span className="placeholder col-4"></span>
                                <span className="placeholder col-6"></span>
                                <span className="placeholder col-8"></span>
                              </p>
                            </div>
                          </div>
                        ) : (
                          <div className={`card ${styles.card}`}>
                            <Image
                              src={imgurl}
                              className="card-img-top img-fluid"
                              alt={"product photo"}
                              width={300}
                              height={300}
                              priority={true}
                            />
                            <div>
                              <FaShoppingCart
                                className={styles.shoppingcartlayout}
                                onClick={() => {
                                  dispatch(addtocart(prodduct));
                                  toast.success(
                                    `${prodduct.title} Added To Cart `,
                                    {
                                      position: "top-left",
                                    }
                                  );
                                }}
                              />
                            </div>
                            <div className="bg-white">
                              <div className="card-body">
                                <h5 className="card-title fw-bold">
                                  {prodduct.title &&
                                    prodduct.title.slice(0, 20)}
                                </h5>
                                <p>
                                  {prodduct.description &&
                                    prodduct.description.slice(0, 15)}
                                  <Link
                                    href={`/products/${prodduct.id}`}
                                    onClick={() => {
                                      scroll();
                                    }}
                                    className={styles.readmore}
                                  >
                                    Read More
                                  </Link>
                                </p>
                                <div className={styles.typeandrate}>
                                  <span className={"fw-bold "}>
                                    {prodduct.category.name &&
                                      prodduct.category.name.slice(0, 10)}
                                  </span>
                                  {prodduct.price >= 100 ? (
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
                                </div>
                                <div className={`fw-bold fs-5 ${styles.price}`}>
                                  <span>
                                    ${prodduct.price}
                                    <sub>00</sub>
                                  </span>
                                  {prodduct.price >= 100 && <span>$1009</span>}
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })
                )}

                <Paginationn
                  productsperpage={productsperpage}
                  totalproduct={products.length}
                  setCurrentpage={setCurrentpage}
                  HandleLoading={HandleLoading}
                  currentpage={currentpage}
                />
              </div>

              {showbutton && (
                <button
                  className={styles.upbutton}
                  onClick={() => {
                    scroll();
                  }}
                >
                  up <FaArrowUp />
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://api.escuelajs.co/api/v1/products");
  const data = await res.json();
  return {
    props: {
      product: data,
    },
  };
}

// export async function getServerSideProps(context) {
//   const res = await fetch(
//     ` https://api.escuelajs.co/api/v1/categories/${context}`
//   );
//   const data = await res.json();
//   return {
//     props: {
//       specficcategory: data,
//     },
//   };
// }

export default Products;
