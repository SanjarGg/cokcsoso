import Carousel from "react-bootstrap/Carousel";

function Carusel() {
  return (
    <div className="all-carusel">
      <Carousel>
        <Carousel.Item style={{ height: 750 }}>
          <img
            className="d-block w-100 fluid"
            src="./assets/img2.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item style={{ height: 750 }}>
          <img
            className="d-block w-100"
            src="./assets/img1.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item style={{ height: 750 }}>
          <img
            className="d-block w-100"
            src="./assets/img3.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <h2 className="swip-down">ПРОКРУТИ ВНИЗ!</h2>
    </div>
  );
}

export default Carusel;
