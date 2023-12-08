import Carousel from "react-bootstrap/Carousel";
import carusel1 from "../assets/carusel1.jpg";
import carusel2 from "../assets/carusel2.jpg";
import carusel3 from "../assets/carusel3.png";
function Carusel() {
  return (
    <div className="all-carusel">
      <Carousel>
        <Carousel.Item style={{ height: 750 }}>
          <img
            className="d-block w-100 fluid"
            src={carusel1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item style={{ height: 750 }}>
          <img className="d-block w-100" src={carusel2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item style={{ height: 750 }}>
          <img className="d-block w-100" src={carusel3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
      <h2 className="swip-down">ПРОКРУТИ ВНИЗ!</h2>
    </div>
  );
}

export default Carusel;
