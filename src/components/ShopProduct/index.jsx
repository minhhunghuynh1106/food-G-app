import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

import { AuthContext } from "context/AuthProvider";
import { addToCart } from "components/Cart/cartSlice";

// lazy load img
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import StarIcon from "@material-ui/icons/Star";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import RoomIcon from "@material-ui/icons/Room";

import "./ShopProduct.scss";

ShopProduct.propsTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  img: PropTypes.string,
  dsc: PropTypes.string,
  price: PropTypes.number,
  rate: PropTypes.number,

  toggleDialog: PropTypes.func,
  handleToDetail: PropTypes.func,
};

ShopProduct.propsTypes = {
  id: "",
  name: "",
  img: "",
  dsc: "",
  price: 0,
  rate: 0,

  toggleDialog: null,
  handleToDetail: null,
};

function ShopProduct(props) {
  const {
    id,
    name,
    img,
    dsc,
    price,
    rate,
    country,
    toggleDialog,
    handleToDetail,
  } = props;

  const dispatch = useDispatch();

  const { user } = useContext(AuthContext);

  const onAddToCart = () => {
    if (!user) {
      toggleDialog();
      return;
    }

    const action = addToCart({ id, name, img, dsc, price, rate, country });
    dispatch(action);
  };

  return (
    <div id={id} className="shop-product">
      <div onClick={handleToDetail} className="shop-product__img-wrapper">
        <LazyLoadImage
          effect="blur"
          src={img}
          className="shop-product__img"
          alt={name}
          width="100%"
          height="100%"
        ></LazyLoadImage>
        <div className="shop-product__rate">
          <StarIcon />
          <span>{rate}</span>
        </div>
      </div>

      <div onClick={handleToDetail} className="shop-product__content">
        <div className="shop-product__name">{name}</div>
        <p className="shop-product__description">{dsc}</p>
        <div className="shop-product__row">
          <div className="shop-product__location">
            <RoomIcon />
            <span>{country}</span>
          </div>
          <div className="shop-product__price">${price}</div>
        </div>
      </div>

      <div className="shop-product__btns">
        <div className="shop-product__btn">
          <FavoriteBorderIcon />
        </div>
        <div onClick={onAddToCart} className="shop-product__btn">
          <ShoppingCartOutlinedIcon />
        </div>
      </div>
      <div className="shop-product__label">Favourite</div>
    </div>
  );
}

export default ShopProduct;