import React from 'react';

const Pagination = ({ productsPerPage, totalProducts, paginate, currentPage }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav className="pagination">
            <ul className="pagination__list">
                {pageNumbers.map((number) => (
                    <li
                        key={number}
                        className="pagination__item"
                        onClick={() => {
                            paginate(number);
                             window.scrollTo({
                                 top: 0,
                                 left: 0,
                                 behavior: 'smooth',
                             });
                        }}
                        style={
                            // eslint-disable-next-line eqeqeq
                            number === currentPage || number == localStorage.getItem('currentPage')
                                ? { backgroundColor: 'silver', color: '#ffffff' }
                                : {}
                        }>
                        <span className="pagination__link">{number}</span>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;
