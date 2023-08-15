import Image from "next/image";
import Carousel from "react-bootstrap/Carousel";

function Carouselcomponent() {
  return (
    <>
      {/* <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <Image
              src="/Homepage1.jpg"
              className="d-block w-100"
              alt="photo"
              width={800}
              height={600}
            />
          </div>
          <div className="carousel-item">
            <Image
              src="/Homepage.jpg "
              className="d-block w-100"
              alt="photo"
              width={800}
              height={600}
            />
          </div>
        </div>
      </div> */}
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
