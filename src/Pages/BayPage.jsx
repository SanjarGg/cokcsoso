import React from "react";
import { Link } from "react-router-dom";
import insta from "../assets/insta.png";
import telega from "../assets/telega.png";
import whatsapp from "../assets/whatsapp.png";

function BayPage() {
  return (
    <div className="Container">
      <div className="hello-bay">
        <h2>Закажи Вкусняшку Поскорее!</h2>
      </div>
      <div className="lorem-bay">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos quo
          voluptates nisi saepe provident quod dolorem ab id corporis quaerat
          sed amet, <br /> dicta, sint cum distinctio enim nemo error
          exercitationem architecto unde? Provident eaque, possimus, expedita
          eos blanditiis doloremque quaerat velit beatae <br /> harum ipsam
          tenetur perferendis optio iure quibusdam voluptas.
        </p>
        <div className="logos">
          <div className="logo">
            <Link to="https://www.instagram.com/">
              <img src={insta} alt="" />
            </Link>
          </div>
          <div className="logo">
            <Link to="https://www.instagram.com/">
              <img src={telega} alt="" />
            </Link>
          </div>
          <div className="logo">
            <Link to="https://www.instagram.com/">
              <img src={whatsapp} alt="" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BayPage;
