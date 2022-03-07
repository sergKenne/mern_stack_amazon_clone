/* eslint-disable default-case */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Rating from '../components/Rating';
import RatingFilter from '../components/RatingFilter';
import {
    filterByRating,
    getProductAsc,
    getProductByCategorie,
    getProductDesc,
    getProductNew,
    getProductAvg,
    sortByPrice,
} from '../redux/categorie/action';

const Categorie = (props) => {
    const { categorie, loading, error } = useSelector((state) => state.categorie);
    const { products } = useSelector((state) => state.products);
    const dispatch = useDispatch();
    const { name } = useParams();
    
    const sortByCategory = (sortName) => {
        switch (sortName) {
            case 'desc':
                dispatch(getProductDesc());
                break;
            case 'asc':
                dispatch(getProductAsc());
                break;
            case 'new':
                dispatch(getProductNew(products));
                break
            case 'avg':
                dispatch(getProductAvg(categorie));
        }
    };

    

    useEffect(() => {
        dispatch(getProductByCategorie(name));
    }, [name]);

    return (
        <>
            <div className="main__search">
                <div className="main__search-result">3 Reviews</div>
                <div className="main__search-filter">
                    <label>Sort by</label>
                    {'   '}
                    <select
                        className="main__search-select"
                        name=""
                        id=""
                        onChange={(e) => sortByCategory(e.target.value)}>
                        <option value="new">Newest Arrivals</option>
                        <option value="desc">Price: High to Low</option>
                        <option value="asc">Price: Low to High</option>
                        <option value="avg">Avg. Customer Reviews</option>
                    </select>
                </div>
            </div>
            <div className="main__content">
                <div className="main__content-wrap">
                    <div className="main__left">
                        <h4 className="main__left-title">Department</h4>
                        <div className="main__left-list">
                            {['Any', ...new Set(products.map((el) => el.category))].map((cat) => (
                                <Link
                                    to={`/search/categorie/${cat}`}
                                    className="main__left-item"
                                    style={cat === name ? { color: 'red', fontWeight: 'bold' } : {}}
                                    key={cat}
                                    onClick={() => getProductByCategorie(cat)}>
                                    {cat}
                                </Link>
                            ))}
                        </div>
                        <br />
                        <h4 className="main__left-title">Price</h4>
                        <div className="main__left-list">
                            <span
                                data-range="all"
                                className="main__left-item"
                                onClick={() => dispatch(getProductNew(products))}>
                                Any
                            </span>
                            <span
                                data-range="1-10"
                                onClick={(e) => dispatch(sortByPrice(e.target.dataset.range))}
                                className="main__left-item">
                                $1 to $10
                            </span>
                            <span
                                data-range="10-100"
                                className="main__left-item"
                                onClick={(e) => dispatch(sortByPrice(e.target.dataset.range))}>
                                $10 to $100
                            </span>
                            <span
                                data-range="100-1000"
                                className="main__left-item"
                                onClick={(e) => dispatch(sortByPrice(e.target.dataset.range))}>
                                $100 to $1000
                            </span>
                        </div>
                        <h4 className="main__left-title">Avg. Customer Review</h4>
                        <div className="main__left-list">
                            {[...new Set(products.map((el) => el.rating))].sort((a,b) => a-b).map((rating) => (
                                <RatingFilter
                                    rating={rating}
                                    filterByRating={filterByRating}
                                    key={rating}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="main__right">
                        <div className="products">
                            {categorie.map((prod) => (
                                <div className="card products__item" key={prod._id}>
                                    <Link to={`/product/${prod._id}`} className="card__title">
                                        <img src={prod.image} className="card__img-top" alt="man" />
                                    </Link>
                                    <div className="card__body">
                                        <Link to={`/product/${prod._id}`} className="card__title">
                                            {prod.name}
                                        </Link>
                                        <div className="card__review">
                                            <Rating
                                                rating={prod.rating}
                                                numReviews={prod.numReviews}
                                            />
                                        </div>
                                        <div className="card__footer">
                                            <span className="card__price">$ {prod.price}</span>
                                            <span className="card__brand">{prod.brand}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Categorie;
