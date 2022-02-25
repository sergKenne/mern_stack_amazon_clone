import React from 'react'
import { useSelector } from 'react-redux'


const Cart = () => {

    const { cart } = useSelector(state => state.cart)
    console.log("cart", cart);


  return (
      <>
          <h3 className="main__title">shopping card</h3>
          <div className="shop-cart">
              <div className="shop-cart__left">
                  {cart.map((item) => (
                      <div className="shop-cart__item" key={item._id}>
                          <img src={item.image} alt="" className="shop-cart__img" />
                          <p className="shop-cart__description">{item.name}</p>
                          {item.countInStock && <select className="detail__select" name="" id="">
                              {[...Array(item.countInStock).keys()].map((item) => {
                                  return (
                                      <option key={item} value={item + 1}>
                                          {item + 1}
                                      </option>
                                  );
                              })}
                          </select>}
                          <p className="shop-cart__price">${item.price}</p>
                          <button className="shop-cart__btn">Delete</button>
                      </div>
                  ))}
              </div>
              <div className="shop-cart__right">
                  <div className="detail__right detail__right--cart">
                      <h4 className="detail__title">subtotal(1 item): 65$</h4>
                      <button className="detail__btn">Proceed to Checkout</button>
                  </div>
              </div>
          </div>
      </>
  );
}

export default Cart