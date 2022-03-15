import React, { useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteToCart } from '../redux/carts/action';
import { GET_TOTAL_ITEMS, GET_TOTAL_PRICE } from '../redux/carts/type';
import { addToCart } from '../redux/carts/action';
import { Link } from 'react-router-dom';

const Cart = () => {
    const token = localStorage.getItem('token');
    const [qty, setQty] = useState(null);
    const { cart, total, totalItems } = useSelector(state => state.cart)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({ type: GET_TOTAL_PRICE });
        dispatch({ type: GET_TOTAL_ITEMS });
    }, [dispatch,cart, qty]);
    
  return (
      <>
          <h3 className="main__title">shopping card</h3>
          <div className="shop-cart">
              <div className="shop-cart__left">
                  {cart.map((item) => (
                      <div className="shop-cart__item" key={item._id}>
                          <img src={item.image} alt="" className="shop-cart__img" />
                          <p className="shop-cart__description">
                              <Link to={`/product/${item._id}`}>
                                  {item.name}
                              </Link>
                          </p>
                          {item.countInStock && (
                              <select
                                  className="detail__select"
                                  onChange={(e) => {
                                      setQty(e.target.value);
                                      dispatch(addToCart(item, Number(e.target.value)));
                                  }}>
                                  <option value={item.qty} disabled selected hidden>
                                      {item.qty}
                                  </option>
                                  {[...Array(item.countInStock).keys()].map((item) => {
                                      return (
                                          <option key={item} value={item + 1}>
                                              {item + 1}
                                          </option>
                                      );
                                  })}
                              </select>
                          )}
                          <p className="shop-cart__price">${item.price}</p>
                          <button
                              className="shop-cart__btn"
                              onClick={() => dispatch(deleteToCart(item._id))}>
                              Delete
                          </button>
                      </div>
                  ))}
              </div>
              <div className="shop-cart__right">
                  <div className="detail__right detail__right--cart">
                      <h4 className="detail__title">
                          subtotal({totalItems} item): ${total}
                      </h4>
                      <Link to={token ? "/shipping" : "/signin"} >
                          <button className="detail__btn">Proceed to Checkout</button>
                      </Link>
                  </div>
              </div>
          </div>
      </>
  );
}

export default Cart