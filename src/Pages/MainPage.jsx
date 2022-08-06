import React from "react";
import Carusel from "../Components/Carusel";

function MainPage() {
  return (
    <div className="main-page">
      <Carusel />

      <div className="Container">
        <h2>О продукте</h2>
        <p>
          {" "}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque sit,
          laudantium quasi ipsam, tempora eaque soluta libero maiores quidem qui
          magnam facere voluptatum minima quis ad, amet voluptatibus. Explicabo
          quas facilis deserunt tempore dolorem deleniti, laudantium culpa
          temporibus perspiciatis nam magni eveniet quo similique, libero labore
          sapiente soluta doloremque sunt.
        </p>
      </div>
    </div>
  );
}

export default MainPage;
