import { useSelector, useDispatch } from "react-redux";
import { FaArrowCircleRight, FaTrashAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import Link from "next/link";
import EmptyCart from "@/components/empty-cart/EmptyCart";
import {
  addtocart,
  Deleted,
  Clear,
  Increment,
  Decrement,
  GetTotalPrice,
  GetTotalQuantity,
} from "@/RTK/slice/cartSlice";
import { toast } from "react-toastify";
import styles from "../../styles/Cart.module.css";
import Image from "next/image";

function Cart() {
  const productincart = useSelector((state) => state.cart);
  const [totalprice, settotalPrice] = useState();
  const [totalquantity, settotalQuantity] = useState();

  const dispatch = useDispatch();

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

  // const totalpricee = productincart.reduce((acc, product) => {
  //   acc += product.price * product.quantity;
  //   return acc;
  // }, 0);

  // const total_quantity = productincart.reduce((cartquantity, cartitem) => {
  //   return cartquantity + cartitem.quantity;
  // }, 0);

  return (
    <section>
      <div className={styles.carttable}>
        <div className={`container ${styles.tabcontainer}`}>
          <div
            className={`d-flex justify-content-between align-items-center  flex-md-row  bg-black text-white ${styles.cartbar}`}
          >
            <h1>Cart</h1>
            <Link href={"/products"} className={"fs-3 text-white "}>
              <FaArrowCircleRight /> Back
            </Link>
          </div>

          {productincart.length >= 1 ? (
            <table className={` table ${styles.table} `}>
              <thead>
                <tr>
                  {/* <th scope="col">id</th> */}
                  <th scope="col">title</th>
                  <th scope="col">image</th>
                  <th scope="col">quantity</th>
                  <th scope="col">price</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>

              <tbody>
                {productincart.map((products) => {
                  return (
                    <tr key={products.id}>
                      {/* <td>{productc.id}</td> */}
                      <td>{products.title.slice(0, 20)}</td>
                      <td>
                        {products.category ? (
                          <>
                            <Image
                              src={products.category.image}
                              className="img-product-id"
                              alt="..."
                              width={100}
                              height={100}
                              priority={true}
                            />
                          </>
                        ) : (
                          <>
                            <Image
                              src={"/Nophoto.png"}
                              className="img-product-id"
                              alt="..."
                              width={100}
                              height={100}
                              priority={true}
                            />
                          </>
                        )}
                      </td>
                      <td className={styles.numberandicon}>
                        <button
                          className="btn btn-outline-dark"
                          onClick={() => dispatch(Decrement(products))}
                        >
                          -
                        </button>
                        {products.quantity}
                        <button
                          className="btn btn-outline-dark"
                          onClick={() => dispatch(Increment(products))}
                        >
                          +
                        </button>
                      </td>
                      <td>{products.price}$</td>
                      <td>
                        <FaTrashAlt
                          className={styles.trashicon}
                          onClick={() => {
                            dispatch(Deleted(products));
                            toast.success(`${products.title} Removed`, {
                              position: toast.POSITION.TOP_LEFT,
                            });
                          }}
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
              <tfoot>
                <tr>
                  <th colSpan="2" scope="row">
                    Total
                  </th>

                  <td>{totalquantity}</td>
                  {totalprice >= 1 && <td>${totalprice.toFixed(0)} </td>}
                  <td>
                    {/* <button
                        className="btn btn-outline-danger"
                        onClick={() => dispatch(Clear())}
                      >
                        Clear-Cart
                      </button> */}
                    <Link
                      href={"/cart/checkout"}
                      onClick={() => {
                        scroll();
                      }}
                    >
                      <button className="btn btn-outline-dark ">
                        CheckOut
                      </button>
                    </Link>
                  </td>
                </tr>
              </tfoot>
            </table>
          ) : (
            <EmptyCart />
          )}
        </div>
      </div>
    </section>
  );
}

export default Cart;
