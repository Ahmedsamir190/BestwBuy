import Image from "next/image";
import styles from "../../styles/Home.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function HomePartThree(props, deviceType) {
  const responsive = {
    superLargeDesktop: {
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

  return (
    <section className={styles.landingthree}>
      <div className="container">
        <div className={styles.newarriveproduct}>
          <h1>New Arrivals</h1>
          <p>The Best Online Sales to Shop This Weekend</p>
        </div>
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={deviceType !== "mobile" ? true : false}
          autoPlaySpeed={2000}
          transitionDuration={500}
          removeArrowOnDeviceType={[
            "tablet",
            "mobile",
            "desktop",
            "superLargeDesktop",
          ]}
          className="pb-5"
        >
          {props.productsale.map((product) => {
            const imgurl =
              product.images.length > 1 ? product.images[0] : "/nophoto2.jpeg";
            return (
              <div className={`card `} key={product.id}>
                <Image
                  src={imgurl}
                  className="card-img-top  "
                  alt="product photo"
                  width={300}
                  height={300}
                  priority={true}
                />

                <div className="card-body">
                  <h5 className="card-title">{product.title.slice(0, 20)}</h5>
                  <p className="card-text">
                    {product.description.slice(0, 20)}
                  </p>
                  <span>$ {product.price}</span>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </section>
  );
}

export default HomePartThree;
