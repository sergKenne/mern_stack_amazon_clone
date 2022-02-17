import React from 'react'

const Cart = () => {
  return (
    <>
        <h3 class="main__title">shopping card</h3> 
        <div class="shop-cart">
            <div class="shop-cart__left">
                <div class="shop-cart__item">
                    <img src="img/pants-man1.jpg" alt="" class="shop-cart__img"/>
                    <p class="shop-cart__description">Puma Slim Pant</p>
                    <select name="" id="">
                        <option value="">1</option>
                        <option value="">2</option>
                        <option value="">3</option>
                    </select>
                    <p class="shop-cart__price">
                        65$
                    </p>
                    <button class="shop-cart__btn">Delete</button>
                </div>
                <div class="shop-cart__item">
                    <img src="img/pants-man1.jpg" alt="" class="shop-cart__img"/>
                    <p class="shop-cart__description">Puma Slim Pant</p>
                    <select name="" id="">
                        <option value="">1</option>
                        <option value="">2</option>
                        <option value="">3</option>
                    </select>
                    <p class="shop-cart__price">
                        65$
                    </p>
                    <button class="shop-cart__btn">Delete</button>
                </div>
            </div>
            <div class="shop-cart__right">
                <div class="detail__right detail__right--cart">
                    <h4 class="detail__title">subtotal(1 item): 65$</h4>
                    <button class="detail__btn">Proceed to Checkout</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Cart