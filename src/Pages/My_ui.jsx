import React, { useState } from "react";

const My_ui = () => {
  const [clothes, setClothes] = useState("shirt");
  const [shoes, setShoes] = useState("sneakers");

  const changeClothes = () => {
    setClothes("pants");
  };

  const changeShoes = () => {
    setShoes("Metro Shoes");
  };

  return (
    <div>
      <h2>👕 Clothes: {clothes}</h2>
      <button className="btm" onClick={changeClothes}>
        Change clothes
      </button>

      <br /><br />

      <h2>👟 Shoes: {shoes}</h2>
      <button className="btm" onClick={changeShoes}>
        Change shoes
      </button>

      <p>🔥 React — Your First Project</p>
    </div>
  );
};

export default My_ui;
