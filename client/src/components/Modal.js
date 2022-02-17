import React from 'react'
import { Link } from 'react-router-dom';

const Modal = ({setSideToggle, sideToggle}) => {
  return (
      <div className={sideToggle ? 'modal toggle' : 'modal'}>
          <div className="modal__content">
              <h3 className="modal__title">Categories</h3>
              <ul className="modal__list">
                  <li className="modal__item">
                      <Link
                          to="/categorie"
                          className="modal__link"
                          onClick={() => setSideToggle(false)}>
                          Pants
                      </Link>
                  </li>
                  <li className="modal__item">
                      <Link
                          to="/categorie"
                          className="modal__link"
                          onClick={() => setSideToggle(false)}>
                          T-shirt
                      </Link>
                  </li>
                  <li className="modal__item">
                      <Link
                          to="/categorie"
                          className="modal__link"
                          onClick={() => setSideToggle(false)}>
                          Dress
                      </Link>
                  </li>
                  <li className="modal__item">
                      <Link
                          to="/categorie"
                          className="modal__link"
                          onClick={() => setSideToggle(false)}>
                          Belt
                      </Link>
                  </li>
              </ul>
              <span className="modal__close" onClick={() => setSideToggle(false)}>
                  <i className="fa-solid fa-xmark"></i>
              </span>
          </div>
      </div>
  );
}

export default Modal