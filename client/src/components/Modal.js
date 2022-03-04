import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getProductByCategorie } from '../redux/categorie/action';


const Modal = ({ setSideToggle, sideToggle }) => {
    const { products } = useSelector((state) => state.products)
    const dispatch = useDispatch()

    const filterByCategory = (cat) => {
        setSideToggle(false);
        dispatch(getProductByCategorie(cat)) 
    }
    
  return (
      <div className={sideToggle ? 'modal toggle' : 'modal'}>
          <div className="modal__content">
              <h3 className="modal__title">Categories</h3>
              <ul className="modal__list">
                  {[...new Set(products.map((el) => el.category))].map((cat) => (
                      <li className="modal__item" key={cat}>
                          <Link
                              to={`/search/categorie/${cat}`}
                              className="modal__link"
                              onClick={() => filterByCategory(cat)}>
                              {cat}
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