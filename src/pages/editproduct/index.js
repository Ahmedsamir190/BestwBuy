// function EditProduct(props) {
//   return (
//     <section>
//       <h1>editproduct</h1>
//       <span>{props.spacficproductedit.title}</span>
//     </section>
//   );
// }

// export default EditProduct;

// export async function getStaticPaths() {
//   const res = await fetch(`https://json-serverr.glitch.me/products`);
//   const data = await res.json();

//   const paths = data.map((d) => {
//     return {
//       params: { id: `${d.id}` },
//     };
//   });
//   return {
//     paths: paths,
//     fallback: false,
//   };
// }

// export async function getStaticProps(context) {
//   const res = await fetch(
//     `https://json-serverr.glitch.me/products/${context.params.id}`
//   );
//   const data = await res.json();
//   return {
//     props: {
//       spacficproductedit: data,
//     },
//   };
// }
import ReactImageMagnify from "react-image-magnify";
import styles from "../../styles/Addproducts.module.css";
import { useState } from "react";

const EditProductPage = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <ReactImageMagnify
      {...{
        smallImage: {
          alt: "Wristwatch by Ted Baker London",
          isFluidWidth: true,
          src: "/nophoto2.jpeg",
        },
        largeImage: {
          src: "/Homepage1.jpg",
          width: 300,
          height: 300,
        },
      }}
    />
  );
};

export default EditProductPage;
