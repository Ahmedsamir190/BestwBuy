import { FaCheckCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { FaRegCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";

import Link from "next/link";
import { Clear } from "@/RTK/slice/cartSlice";
import styles from "../../styles/Checkout.module.css";
import ProtectRoute from "@/components/protectroute/ProtectRoute";

function Success() {
  const productincart = useSelector((state) => state.cart);
  const price = useSelector((state) => state.cart);
  const date = new Date();
  const displaydate = date.toDateString();
  const displaytime = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  const [time, setTime] = useState();
  const [ddate, setDdate] = useState();

  const dispatch = useDispatch();

  //   useEffect(() => {
  //     dispatch(GetTotalPrice());
  //   }, [productincart, dispatch]);
  useEffect(() => {
    setTime(displaydate);
    setDdate(displaytime);
  }, []);

  return (
    <ProtectRoute>
      <section className={styles.sectionsuccess}>
        <div className={styles.successpage}>
          <div className="container">
            <div className={styles.contentsuccess}>
              <div className="text-center">
                <FaCheckCircle className="mb-5 fs-1 text-success" />
                <h4 className="mb-4">
                  Congratulation! You ve completed payment.
                </h4>
                <p className="text-secondary">
                  {" "}
                  We have recieved your order and it will be delivered very soon
                </p>
              </div>
              <div className={styles.details}>
                <div className={`text-center ${styles.detaone}`}>
                  <h5 className="mb-md-4">Order serial</h5>
                  <span className="text-secondary">70505</span>
                </div>
                <div className={`text-center ${styles.detaone}`}>
                  <h5 className="mb-md-4">Date</h5>
                  <div className="d-grid">
                    <span className="text-secondary">{time}</span>
                    <span className="text-secondary">{ddate}</span>
                  </div>
                </div>
                <div className={`text-center ${styles.detaone}`}>
                  <h5 className="mb-md-4">Total</h5>
                  <span className="text-secondary">Check Your Email</span>
                </div>
                <div className="text-center ms-1">
                  <h5 className="mb-md-4">Payment methods</h5>
                  <span className="text-secondary">Check payment</span>
                </div>
              </div>
              <div className="back-to-store">
                <Link href={"/products"} onClick={() => dispatch(Clear())}>
                  <button className="btn btn-dark mt-4">Back To Store</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ProtectRoute>
  );
}
export default Success;
