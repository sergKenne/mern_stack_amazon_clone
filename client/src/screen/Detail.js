import React from 'react'

const Detail = () => {
  return (
    <div className="detail">
        <h4 className="detail__go-back">Back to result</h4>
        <div className="detail__content">
            <div className="detail__picture">
                <img className="detail__img" src="img/pants-woman3.jpg" alt="" />
            </div>
            <div className="detail__description">
                <h4 className="detail__title">Puma Slim Pant</h4>
                <div className="detail__item">
                    <span>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star-half-stroke"></i>
                        4 reviews
                    </span>
                </div>
                <div className="detail__item">Pirce : $65</div>
                <div className="detail__item">Description:</div>
                <div className="detail__item">high quality product</div>
            </div>
            <div className="detail__right">
                <h4 className="detail__title">Puma Slim Pant</h4>
                <div className="detail__item">
                    <span>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star-half-stroke"></i>
                        4 reviews
                    </span>
                </div>
                <div className="detail__item detail__item--flex">
                    <span>Price</span>
                    <span>$65</span>
                </div>
                <div className="detail__item detail__item--flex">
                    <span>Status</span>
                    <span>In Stock</span>
                </div>
                <div className="detail__item detail__item--flex">
                    <span>Qty</span>
                    <select className="detail__select" name="" id="">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                </div>
                <button className="detail__btn">Add To Cart</button>
            </div>
        </div>
    </div>
  )
}

export default Detail