import styles from "../../styles/Cart.module.css";
import Image from "next/image";

function EmptyCart() {
  return (
    <div className={styles.Emptycart}>
      <Image
        src={"/emptycart.gif"}
        alt={""}
        width={300}
        height={300}
        priority={true}
      />
      <h3>Your cart is empty</h3>
      <p>
        it looks like you have not added anything to your cart
        <br /> go ahead & explore products
      </p>
    </div>
  );
}

export default EmptyCart;
