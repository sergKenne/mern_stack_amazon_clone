/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import Pagination from '../components/Pagination';
import Loading from '../components/Loading';
import Rating from '../components/Rating';
import ErrorMessage from '../components/ErrorMessage';

const Home = ({products, search}) => {
    const { loading, products: productsList, error } = products;

    const productsFilter = productsList.filter((prod) =>
        prod.name.toLowerCase().includes(search.toLowerCase()),
    );
    
    
    const [currentPage, setCurrentPage] = useState( null);
    const [productsPerPage] = useState(8);

    // Get current products
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = productsFilter.slice(indexOfFirstProduct, indexOfLastProduct);
    // Change page
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
        localStorage.setItem('currentPage', pageNumber);

        console.log(localStorage.getItem('currentPage'));
    }

    useEffect(() => {
        if (localStorage.getItem('currentPage')) {
            setCurrentPage(localStorage.getItem('currentPage'))
        } else {
            localStorage.setItem('currentPage', 1);
            setCurrentPage(localStorage.getItem('currentPage'));
        } 
    }, [])

    return loading ? (
        <Loading />
    ) : error ? (
        <ErrorMessage error={error} />
    ) : (
        <>
            <div className="products">
                {currentProducts.map((prod) => (
                    <div className="card products__item" key={prod._id}>
                        <Link to={`product/${prod._id}`}>
                            <img src={prod.image} className="card__img-top" alt="man" />
                        </Link>
                        <div className="card__body">
                            <Link to={`product/${prod._id}`} className="card__title">
                                {prod.name}
                            </Link>
                            <div className="card__review">
                                <Rating rating={prod.rating} numReviews={prod.numReviews} />
                            </div>
                            <div className="card__footer">
                                <span className="card__price">$ {prod.price}</span>
                                <span className="card__brand">{prod.brand}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Pagination
                productsPerPage={productsPerPage}
                totalProducts={productsList.length}
                paginate={paginate}
                currentPage={currentPage}
            />
        </>
    );
};

const mapStateToProps = state => ({
    products : state.products
})

export default connect(mapStateToProps, null) (Home)