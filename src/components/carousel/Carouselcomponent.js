import Image from "next/image";
import Carousel from "react-bootstrap/Carousel";

function Carouselcomponent() {
  return (
    <>
      <Carousel fade controls>
        <Carousel.Item>
          <Image
            src="/landingthreelast.jpeg"
            className="d-block w-100"
            alt="photo"
            width={800}
            height={600}
          />{" "}
        </Carousel.Item>
        <Carousel.Item>
          <Image
            src="/landingthreee.jpeg"
            className="d-block w-100"
            alt="photo"
            width={800}
            height={600}
          />{" "}
        </Carousel.Item>
        <Carousel.Item>
          <Image
            src="/landingonelast.jpeg"
            className="d-block w-100"
            alt="photo"
            width={800}
            height={600}
          />{" "}
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Carouselcomponent;
