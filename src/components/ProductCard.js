import React from "react";
import ReactStars from "react-rating-stars-component";
import prodcompare from '../images/prodcompare.svg';
import wish from '../images/wish.svg';
import wishlist from '../images/wishlist.svg';
import watch from '../images/watch.jpg';
import addcart from '../images/add-cart.svg';
import view from '../images/view.svg';
import blog from '../images/blog-1.jpg'

import { Link, useLocation } from "react-router-dom";
const ProductCard = (props) => {
  const { grid } = props;
  let location = useLocation();
  return (
    <>
      <div
        className={`${location.pathname == "/product" ? `gr-${grid}` : "col-3"}`}
      >
        <Link to=':id' className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <button className="border-0 bg-transparent">
              <img src={wish} alt="wishlist" />
            </button>
          </div>
          <div className="product-image">
            <img
              src={watch}
              className="img-fluid"
              alt="product image"
            />
            <img
              src={blog}
              className="img-fluid"
              alt="product image"
            />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              Kid headphones bulk 10 pack multi colored for students
            </h5>
            <ReactStars
              count={5}
              size={24}
              value={3}
              edit={false}
              activeColor="#ffd700"
            />
              <p className={`description ${grid === 12 ? 'd-block' : 'd-none'}`}>
              At vero eos el accmus At vero eos el accmusAt vero eos el accmusAt
              vero eos el accmusAt vero eos el accmusAt vero eos el accmusAt
              vero eos el accmusAt vero eos el accmusAt vero eos el accmusAt
              vero eos el accmusAt vero eos el accmusAt vero eos el accmusAt
              vero eos el accmus
            </p>
            <p className="price">$100.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <button className="border-0 bg-transparent">
                <img src={prodcompare} alt="compare" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={view} alt="view" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={addcart} alt="addcart" />
              </button>
            </div>
          </div>
        </Link>
      </div>
      <div
        className={`${location.pathname == "/product" ? `gr-${grid}` : "col-3"}`}
      >
        <Link className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <button className="border-0 bg-transparent">
              <img src={wish} alt="wishlist" />
            </button>
          </div>
          <div className="product-image">
            <img
              src={watch}
              className="img-fluid"
              alt="product image"
            />
            <img
              src={blog}
              className="img-fluid"
              alt="product image"
              
            />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              Kid headphones bulk 10 pack multi colored for students
            </h5>
            <ReactStars
              count={5}
              size={24}
              value={4}
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              At vero eos el accmus At vero eos el accmusAt vero eos el accmusAt
              vero eos el accmusAt vero eos el accmusAt vero eos el accmusAt
              vero eos el accmusAt vero eos el accmusAt vero eos el accmusAt
              vero eos el accmusAt vero eos el accmusAt vero eos el accmusAt
              vero eos el accmus
            </p>
            <p className="price">$100.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <button className="border-0 bg-transparent">
                <img src={prodcompare} alt="compare" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={view} alt="view" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={addcart} alt="addcart" />
              </button>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
