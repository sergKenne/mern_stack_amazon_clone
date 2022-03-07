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
                        onClick={() => paginate(number)}
                        style={number === currentPage ? { backgroundColor: '#f02020', color: "#ffffff" } : {}}>
                        <span className="pagination__link">{number}</span>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;
