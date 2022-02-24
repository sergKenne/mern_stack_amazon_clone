import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux'

import fecthDetailProduct from '../redux/detail/action';
import Rating from '../components/Rating';

const Detail = (props) => {
    const { id } = useParams()
    
    const { error, product, loading } = props.product
    console.log(product);
    useEffect(() => {
        props.getProductDetail(id)
    },[])

    return (
        <div className="detail">
            <h4 className="detail__go-back">Back to result</h4>
            <div className="detail__content">
                <div className="detail__picture">
                    <img className="detail__img" src={product.image} alt="" />
                </div>
                <div className="detail__description">
                    <h4 className="detail__title">{product.name}</h4>
                    <div className="detail__item">
                        <Rating rating={product.rating} numReviews={product.numReviews} />
                    </div>
                    <div className="detail__item">Pirce : ${product.price}</div>
                    <div className="detail__item">Description: </div>
                    <div className="detail__item">{product.description}</div>
                </div>
                <div className="detail__right">
                    <h4 className="detail__title">{ product.brand }</h4>
                    <div className="detail__item">
                        <Rating rating={product.rating} numReviews={product.numReviews} />
                    </div>
                    <div className="detail__item detail__item--flex">
                        <span>Price</span>
                        <span>${product.price}</span>
                    </div>
                    <div className="detail__item detail__item--flex">
                        <span>Status</span>
                        {product.countInStock ? (
                            <span style={{ color: 'green', 'font-weight': 'bold' }}>In Stock</span>
                        ) : (
                            <span style={{ color: 'red', 'font-weight': 'bold' }}>Unavailable</span>
                        )}
                    </div>
                    <div className="detail__item detail__item--flex">
                        <span>Qty</span>
                        <select className="detail__select" name="" id="">
                            {[...Array(product.countInStock).keys()].map((item) => {
                                return (
                                    <option key={item} value={item + 1}>
                                        {item + 1}
                                    </option>
                                );
                            })}

                            {/* <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option> */}
                        </select>
                    </div>
                    <button className="detail__btn">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    product: state.detail
});

const mapDispatchToProps = (dispatch) => ({
    getProductDetail: (id) => dispatch(fecthDetailProduct(id))
});

export default connect(mapStateToProps, mapDispatchToProps) (Detail)