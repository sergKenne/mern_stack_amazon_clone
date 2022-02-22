/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import fecthProducts from '../redux/product/action';

const Home = (props) => {

    const { products } = props.products;
    console.log("products:", products);

    useEffect(() => {
        props.getproducts()
    }, [])

    return (
        <div className="products">
            {products.length > 0 && products.map((prod) => (
              
                <div className="card products__item" key={prod._id}>
                    <Link to={`/detail/${prod._id}`}>
                        <img src={prod.image} className="card__img-top" alt="man" />
                    </Link>
                    <div className="card__body">
                        <Link to={`/detail/${prod._id}`} className="card__title">
                            Card title
                        </Link>
                        <div className="card__review">
                            <span>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star-half-stroke"></i>4 reviews
                            </span>
                        </div>
                        <div className="card__footer">
                            <span className="card__price">$ { prod.price}</span>
                            <span className="card__brand">{ prod.description}</span>
                        </div>
                    </div>
                </div>
                
            ))}
        </div>
    );
};

const mapStateToProps = state => ({
    products : state.products
})

const mapDispatchToProps = dispatch => ({
    getproducts: () => dispatch(fecthProducts())
})

export default connect(mapStateToProps, mapDispatchToProps) (Home)