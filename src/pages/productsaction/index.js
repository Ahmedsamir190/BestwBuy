import Card from "react-bootstrap/Card";
import styles from "../../styles/Productsaction.module.css";
import {
  FaStar,
  FaTrash,
  FaEdit,
  FaInfo,
  FaBuffer,
  FaArrowUp,
} from "react-icons/fa";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { useEffect } from "react";
import { useState } from "react";
import swalWithBootstrapButtons from "sweetalert2";
import Link from "next/link";
import Image from "next/image";
import ProtectRoute from "@/components/protectroute/ProtectRoute";

function ProductsAction(props) {
  const { products } = props;
  const [items, setItems] = useState(products);
  const [showbutton, setShowbutton] = useState(false);

  useEffect(() => {
    GetAllProducts();
  }, []);

  const GetAllProducts = () => {
    fetch("https://json-serverr.glitch.me/products")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      });
  };

  const DeleteProduct = (productid) => {
    swalWithBootstrapButtons
      .fire({
        title: `Are You Sure you Went to Delete Product `,
        showCancelButton: true,
        icon: "warning",
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          fetch(`https://json-serverr.glitch.me/products/${productid}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              GetAllProducts();
            });
          swalWithBootstrapButtons.fire(
            "Deleted!",
            "Your product has been deleted.",
            "success"
          );
        }
      });
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 500) {
        setShowbutton(true);
      } else {
        setShowbutton(false);
      }
    });
  }, []);

  const scroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <ProtectRoute>
      <section className={styles.section}>
        <div className={styles.backgroundimage}>
          <h1>
            Products<span>w</span>Actions
          </h1>
          <Link
            href={"/productsaction/addproducts"}
            className="position-absolute top-100 start-50 translate-middle"
          >
            Add-New-Product
          </Link>
        </div>
        <div className="container">
          <div className={styles.allcard}>
            {items.map((product) => {
              return (
                <Card
                  key={product.id}
                  style={{
                    width: "18rem",
                  }}
                  className={`${styles.card} border border-0`}
                >
                  {product.image ? (
                    <Card.Img
                      variant="top"
                      src={product.image}
                      alt={"/Nophoto.png"}
                      width={300}
                      height={300}
                      className={styles.addproduct}
                    />
                  ) : (
                    <Card.Img
                      variant="top"
                      src={"/nophoto2.jpeg"}
                      alt={""}
                      width={300}
                      height={300}
                      className={styles.addproduct}
                    />
                  )}

                  <Card.Body className={styles.cardbody}>
                    <Card.Title className={styles.title}>
                      {product.title.slice(0, 20)}
                    </Card.Title>
                    <Card.Text>{product.description.slice(0, 25)}</Card.Text>
                    {product.category ? (
                      <Card.Text>{product.category}</Card.Text>
                    ) : (
                      <Card.Text>Updated category</Card.Text>
                    )}

                    <span>$ {product.price}</span>
                    {product.rating ? (
                      <div className={styles.rating}>
                        <span>
                          <FaStar />
                          {product.rating.rate}
                        </span>
                        <span>
                          {" "}
                          <FaBuffer />
                          {product.rating.count}
                        </span>
                      </div>
                    ) : null}
                    <div className={styles.productsaction}>
                      <Tippy
                        content="Delete "
                        interactive={true}
                        interactiveBorder={20}
                        delay={100}
                        placement="left"
                      >
                        <span>
                          {" "}
                          <FaTrash
                            onClick={() => {
                              DeleteProduct(product.id);
                            }}
                          />
                        </span>
                      </Tippy>
                      <Tippy
                        content="Info "
                        interactive={true}
                        interactiveBorder={20}
                        delay={100}
                        placement="left"
                      >
                        <span>
                          {" "}
                          <FaInfo />
                        </span>
                      </Tippy>
                      <Tippy
                        content="Edit"
                        interactive={true}
                        interactiveBorder={20}
                        delay={100}
                        placement="left"
                      >
                        <Link href={`editproduct/${product.id}`}>
                          <span>
                            {" "}
                            <FaEdit />
                          </span>
                        </Link>
                      </Tippy>
                    </div>
                  </Card.Body>
                </Card>
              );
            })}
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
        </div>
      </section>
    </ProtectRoute>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://json-serverr.glitch.me/products");
  const data = await res.json();
  return {
    props: {
      products: data,
    },
  };
}

export default ProductsAction;
