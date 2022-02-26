import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Modal = ({ setSideToggle, sideToggle }) => {
    const { products } = useSelector(state => state.products)
    //console.log("products:", [...new Set(products.map(el => el.category))]);
  return (
      <div className={sideToggle ? 'modal toggle' : 'modal'}>
          <div className="modal__content">
              <h3 className="modal__title">Categories</h3>
              <ul className="modal__list">
                  {[...new Set(products.map((el) => el.category))].map(cat => (
                    <li className="modal__item" key={cat}>
                        <Link
                            to="/categorie"
                            className="modal__link"
                            onClick={() => setSideToggle(false)}>
                            { cat }
                        </Link>
                    </li>
                  ))}
              </ul>
              <span className="modal__close" onClick={() => setSideToggle(false)}>
                  <i className="fa fa-close"></i>
              </span>
          </div>
      </div>
  );
}

export default Modal