import React, { useState } from "react";
import "./Products.css";
import { images } from "../Assets/images/image";
import product from "../Assets/images/products/f1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Products = () => {
  const [currentindex, SetCurrentindex] = useState(0);

  const handleAddButton = () => {
    SetCurrentindex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  };

  const handleRemoveButton = () => {
    SetCurrentindex((prevIndex) =>
      prevIndex < 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleDot = (index) => {
    SetCurrentindex(index);
  };

  return (
    <>
      <div className="page-header">
        <h1>Choose Your Style</h1>
      </div>

      <div className="product-1 section-p1">
        <div className="pro-container">
          <div className="pro">
            <div className="dataContainer">
              <div onClick={handleRemoveButton}>
                <FontAwesomeIcon icon={faChevronLeft} />
              </div>

              <img key={currentindex} src={images[currentindex]} alt="" />
              <div onClick={handleAddButton}>
                <FontAwesomeIcon icon={faChevronRight} />
              </div>
            </div>
            <div className="indicator">
              {images.map((_, index) => (
                <div
                  key={index}
                  className={`dot ${currentindex === index ? "active" : ""}`}
                  onClick={() => handleDot(index)}
                ></div>
              ))}
            </div>

            <div className="des">
              <span>de Compras</span>
              <h5>Cartoon Astronaut Tee</h5>
              <div className="star">
                <FontAwesomeIcon icon={faStar} className="star-icon" />
                <FontAwesomeIcon icon={faStar} className="star-icon" />
                <FontAwesomeIcon icon={faStar} className="star-icon" />
                <FontAwesomeIcon icon={faStar} className="star-icon" />
                <FontAwesomeIcon icon={faStar} className="star-icon" />
              </div>
              <h4>₹ 499</h4>
            </div>
            <Link to="/">
              <FontAwesomeIcon icon={faBagShopping} className="bag-icon" />
            </Link>
          </div>


         
          
          <div className="pro">
            <img src={product} alt="" />
            <div className="des">
              <span>de Compras</span>
              <h5>Cartoon Astronaut Tee</h5>
              <div className="star">
                <FontAwesomeIcon icon={faStar} className="star-icon" />
                <FontAwesomeIcon icon={faStar} className="star-icon" />
                <FontAwesomeIcon icon={faStar} className="star-icon" />
                <FontAwesomeIcon icon={faStar} className="star-icon" />
                <FontAwesomeIcon icon={faStar} className="star-icon" />
              </div>
              <h4>₹ 499</h4>
            </div>
            <Link to="/">
              <FontAwesomeIcon icon={faBagShopping} className="bag-icon" />
            </Link>
          </div>
          <div className="pro">
            <img src={product} alt="" />
            <div className="des">
              <span>de Compras</span>
              <h5>Cartoon Astronaut Tee</h5>
              <div className="star">
                <FontAwesomeIcon icon={faStar} className="star-icon" />
                <FontAwesomeIcon icon={faStar} className="star-icon" />
                <FontAwesomeIcon icon={faStar} className="star-icon" />
                <FontAwesomeIcon icon={faStar} className="star-icon" />
                <FontAwesomeIcon icon={faStar} className="star-icon" />
              </div>
              <h4>₹ 499</h4>
            </div>
            <Link to="/">
              <FontAwesomeIcon icon={faBagShopping} className="bag-icon" />
            </Link>
          </div>
          <div className="pro">
            <img src={product} alt="" />
            <div className="des">
              <span>de Compras</span>
              <h5>Cartoon Astronaut Tee</h5>
              <div className="star">
                <FontAwesomeIcon icon={faStar} className="star-icon" />
                <FontAwesomeIcon icon={faStar} className="star-icon" />
                <FontAwesomeIcon icon={faStar} className="star-icon" />
                <FontAwesomeIcon icon={faStar} className="star-icon" />
                <FontAwesomeIcon icon={faStar} className="star-icon" />
              </div>
              <h4>₹ 499</h4>
            </div>
            <Link to="/">
              <FontAwesomeIcon icon={faBagShopping} className="bag-icon" />
            </Link>
          </div>
          <div className="pro">
            <img src={product} alt="" />
            <div className="des">
              <span>de Compras</span>
              <h5>Cartoon Astronaut Tee</h5>
              <div className="star">
                <FontAwesomeIcon icon={faStar} className="star-icon" />
                <FontAwesomeIcon icon={faStar} className="star-icon" />
                <FontAwesomeIcon icon={faStar} className="star-icon" />
                <FontAwesomeIcon icon={faStar} className="star-icon" />
                <FontAwesomeIcon icon={faStar} className="star-icon" />
              </div>
              <h4>₹ 499</h4>
            </div>
            <Link to="/">
              <FontAwesomeIcon icon={faBagShopping} className="bag-icon" />
            </Link>
          </div>
          <div className="pro">
            <img src={product} alt="" />
            <div className="des">
              <span>de Compras</span>
              <h5>Cartoon Astronaut Tee</h5>
              <div className="star">
                <FontAwesomeIcon icon={faStar} className="star-icon" />
                <FontAwesomeIcon icon={faStar} className="star-icon" />
                <FontAwesomeIcon icon={faStar} className="star-icon" />
                <FontAwesomeIcon icon={faStar} className="star-icon" />
                <FontAwesomeIcon icon={faStar} className="star-icon" />
              </div>
              <h4>₹ 499</h4>
            </div>
            <Link to="/">
              <FontAwesomeIcon icon={faBagShopping} className="bag-icon" />
            </Link>
          </div>
          <div className="pro">
            <img src={product} alt="" />
            <div className="des">
              <span>de Compras</span>
              <h5>Cartoon Astronaut Tee</h5>
              <div className="star">
                <FontAwesomeIcon icon={faStar} className="star-icon" />
                <FontAwesomeIcon icon={faStar} className="star-icon" />
                <FontAwesomeIcon icon={faStar} className="star-icon" />
                <FontAwesomeIcon icon={faStar} className="star-icon" />
                <FontAwesomeIcon icon={faStar} className="star-icon" />
              </div>
              <h4>₹ 499</h4>
            </div>
            <Link to="/">
              <FontAwesomeIcon icon={faBagShopping} className="bag-icon" />
            </Link>
          </div>
          <div className="pro">
            <img src={product} alt="" />
            <div className="des">
              <span>de Compras</span>
              <h5>Cartoon Astronaut Tee</h5>
              <div className="star">
                <FontAwesomeIcon icon={faStar} className="star-icon" />
                <FontAwesomeIcon icon={faStar} className="star-icon" />
                <FontAwesomeIcon icon={faStar} className="star-icon" />
                <FontAwesomeIcon icon={faStar} className="star-icon" />
                <FontAwesomeIcon icon={faStar} className="star-icon" />
              </div>
              <h4>₹ 499</h4>
            </div>
            <Link to="/">
              <FontAwesomeIcon icon={faBagShopping} className="bag-icon" />
            </Link>
          </div>
          <div className="pro">
            <img src={product} alt="" />
            <div className="des">
              <span>de Compras</span>
              <h5>Cartoon Astronaut Tee</h5>
              <div className="star">
                <FontAwesomeIcon icon={faStar} className="star-icon" />
                <FontAwesomeIcon icon={faStar} className="star-icon" />
                <FontAwesomeIcon icon={faStar} className="star-icon" />
                <FontAwesomeIcon icon={faStar} className="star-icon" />
                <FontAwesomeIcon icon={faStar} className="star-icon" />
              </div>
              <h4>₹ 499</h4>
            </div>
            <Link to="/">
              <FontAwesomeIcon icon={faBagShopping} className="bag-icon" />
            </Link>
          </div>
          <div className="pro">
            <img src={product} alt="" />
            <div className="des">
              <span>de Compras</span>
              <h5>Cartoon Astronaut Tee</h5>
              <div className="star">
                <FontAwesomeIcon icon={faStar} className="star-icon" />
                <FontAwesomeIcon icon={faStar} className="star-icon" />
                <FontAwesomeIcon icon={faStar} className="star-icon" />
                <FontAwesomeIcon icon={faStar} className="star-icon" />
                <FontAwesomeIcon icon={faStar} className="star-icon" />
              </div>
              <h4>₹ 499</h4>
            </div>
            <Link to="/">
              <FontAwesomeIcon icon={faBagShopping} className="bag-icon" />
            </Link>
          </div>
          <div className="pro">
            <img src={product} alt="" />
            <div className="des">
              <span>de Compras</span>
              <h5>Cartoon Astronaut Tee</h5>
              <div className="star">
                <FontAwesomeIcon icon={faStar} className="star-icon" />
                <FontAwesomeIcon icon={faStar} className="star-icon" />
                <FontAwesomeIcon icon={faStar} className="star-icon" />
                <FontAwesomeIcon icon={faStar} className="star-icon" />
                <FontAwesomeIcon icon={faStar} className="star-icon" />
              </div>
              <h4>₹ 499</h4>
            </div>
            <Link to="/">
              <FontAwesomeIcon icon={faBagShopping} className="bag-icon" />
            </Link>
          </div>
          <div className="pro">
            <img src={product} alt="" />
            <div className="des">
              <span>de Compras</span>
              <h5>Cartoon Astronaut Tee</h5>
              <div className="star">
                <FontAwesomeIcon icon={faStar} className="star-icon" />
                <FontAwesomeIcon icon={faStar} className="star-icon" />
                <FontAwesomeIcon icon={faStar} className="star-icon" />
                <FontAwesomeIcon icon={faStar} className="star-icon" />
                <FontAwesomeIcon icon={faStar} className="star-icon" />
              </div>
              <h4>₹ 499</h4>
            </div>
            <Link to="/">
              <FontAwesomeIcon icon={faBagShopping} className="bag-icon" />
            </Link>
          </div>
          <div className="pro">
            <img src={product} alt="" />
            <div className="des">
              <span>de Compras</span>
              <h5>Cartoon Astronaut Tee</h5>
              <div className="star">
                <FontAwesomeIcon icon={faStar} className="star-icon" />
                <FontAwesomeIcon icon={faStar} className="star-icon" />
                <FontAwesomeIcon icon={faStar} className="star-icon" />
                <FontAwesomeIcon icon={faStar} className="star-icon" />
                <FontAwesomeIcon icon={faStar} className="star-icon" />
              </div>
              <h4>₹ 499</h4>
            </div>
            <Link to="/">
              <FontAwesomeIcon icon={faBagShopping} className="bag-icon" />
            </Link>
          </div>
          <div className="pro">
            <img src={product} alt="" />
            <div className="des">
              <span>de Compras</span>
              <h5>Cartoon Astronaut Tee</h5>
              <div className="star">
                <FontAwesomeIcon icon={faStar} className="star-icon" />
                <FontAwesomeIcon icon={faStar} className="star-icon" />
                <FontAwesomeIcon icon={faStar} className="star-icon" />
                <FontAwesomeIcon icon={faStar} className="star-icon" />
                <FontAwesomeIcon icon={faStar} className="star-icon" />
              </div>
              <h4>₹ 499</h4>
            </div>
            <Link to="/">
              <FontAwesomeIcon icon={faBagShopping} className="bag-icon" />
            </Link>
          </div>
          <div className="pro">
            <img src={product} alt="" />
            <div className="des">
              <span>de Compras</span>
              <h5>Cartoon Astronaut Tee</h5>
              <div className="star">
                <FontAwesomeIcon icon={faStar} className="star-icon" />
                <FontAwesomeIcon icon={faStar} className="star-icon" />
                <FontAwesomeIcon icon={faStar} className="star-icon" />
                <FontAwesomeIcon icon={faStar} className="star-icon" />
                <FontAwesomeIcon icon={faStar} className="star-icon" />
              </div>
              <h4>₹ 499</h4>
            </div>
            <Link to="/">
              <FontAwesomeIcon icon={faBagShopping} className="bag-icon" />
            </Link>
          </div>
          <div className="pro">
            <img src={product} alt="" />
            <div className="des">
              <span>de Compras</span>
              <h5>Cartoon Astronaut Tee</h5>
              <div className="star">
                <FontAwesomeIcon icon={faStar} className="star-icon" />
                <FontAwesomeIcon icon={faStar} className="star-icon" />
                <FontAwesomeIcon icon={faStar} className="star-icon" />
                <FontAwesomeIcon icon={faStar} className="star-icon" />
                <FontAwesomeIcon icon={faStar} className="star-icon" />
              </div>
              <h4>₹ 499</h4>
            </div>
            <Link to="/">
              <FontAwesomeIcon icon={faBagShopping} className="bag-icon" />
            </Link>
          </div>
        </div>
      </div>

      <div className="pagination section-p1">
        <Link to="/" className="navigator">
          1
        </Link>
        <Link to="/" className="navigator">
          2
        </Link>
        <Link to="/" className="navigator">
          <FontAwesomeIcon icon={faArrowRight} className="icon" />
        </Link>
      </div>
    </>
  );
};

export default Products;
