import React, { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom';
import { connect } from 'react-redux'
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';

import fecthDetailProduct from '../redux/detail/action';
import Rating from '../components/Rating';
import { addToCart } from '../redux/carts/action';

const Detail = (props) => {
    const [qty, setQty] = useState(1)
    const { id } = useParams()
    const navigate = useNavigate()
    console.log("Qty:", qty);
    
    const { error, product, loading } = props.product
   
    useEffect(() => {
        props.getProductDetail(id)
    }, [])
    
    const handleChange = (e) => {
        setQty(e.target.value)
    }

    const addProductTocart = () => {
        props.addProduct(product, qty)
        navigate("/cart")
    }

    return loading ? (
        <Loading />
    ) : error ? (
        <ErrorMessage error={error} />
    ) : (
        <div className="detail">
            <Link className="detail__go-back" to="/">
                Back to result
            </Link>
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
                    <h4 className="detail__title">{product.brand}</h4>
                    <div className="detail__item">
                        <Rating rating={product.rating} numReviews={product.numReviews} />
                    </div>
                    <div className="detail__item detail__item--flex">
                        <span>Price</span>
                        <span>${product.price * qty}</span>
                    </div>
                    <div className="detail__item detail__item--flex">
                        <span>Status</span>
                        {product.countInStock ? (
                            <span style={{ color: 'green', fontWeight: 'bold' }}>In Stock</span>
                        ) : (
                            <span style={{ color: 'red', fontWeight: 'bold' }}>Unavailable</span>
                        )}
                    </div>
                    <div className="detail__item detail__item--flex">
                        <span>Qty</span>
                        {product.countInStock > 0 ? (
                            <select
                                className="detail__select"
                                name=""
                                id=""
                                onChange={handleChange}>
                                {[...Array(product.countInStock).keys()].map((item) => {
                                    return (
                                        <option key={item} value={item + 1}>
                                            {item + 1}
                                        </option>
                                    );
                                })}
                            </select>
                        ) : (
                            <span style={{ fontWeight: 'bold', fontSize: '18px' }}>0</span>
                        )}
                    </div>
                    {product.countInStock ? (
                        <button className="detail__btn" onClick={addProductTocart}>
                            Add To Cart
                        </button>
                    ) : (
                        <button className="detail__btn detail__btn--inactive">Add To Cart</button>
                    )}
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    product: state.detail
});

const mapDispatchToProps = (dispatch) => ({
    getProductDetail: (id) => dispatch(fecthDetailProduct(id)),
    addProduct: (prod, qty) => dispatch(addToCart(prod, qty))
});

export default connect(mapStateToProps, mapDispatchToProps) (Detail)