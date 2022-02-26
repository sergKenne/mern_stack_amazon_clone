import React from 'react'

const Categorie = () => {
  return (
      <>
          <div className="main__search">
              <div className="main__search-result">3 Reviews</div>
              <div className="main__search-filter">
                  <label for="">Sort by</label>
                  <select className="main__search-select" name="" id="">
                      <option value="high">Price: High to low</option>
                      <option value="new">Newest Arrivals</option>
                      <option value="high">Price: High to Low</option>
                      <option value="low">Price: Low to High</option>
                      <option value="high">Avg. Cbstomer Reviews</option>
                  </select>
              </div>
          </div>
          <div className="main__content">
              <div className="main__content-wrap">
                  <div className="main__left">
                      <h4 className="main__left-title">Department</h4>
                      <div className="main__left-list">
                          <a href="/" className="main__left-item">
                              Any
                          </a>
                          <a href="/" className="main__left-item">
                              Pants
                          </a>
                          <a href="/" className="main__left-item">
                              Shirts
                          </a>
                      </div>
                      <h4 className="main__left-title">Price</h4>
                      <div className="main__left-list">
                          <a href="/" className="main__left-item">
                              Any
                          </a>
                          <a href="/" className="main__left-item">
                              $1 to $10
                          </a>
                          <a href="/" className="main__left-item">
                              $10 to $100
                          </a>
                          <a href="/" className="main__left-item">
                              $100 to $1000
                          </a>
                      </div>
                      <h4 className="main__left-title">Avg. Customer Review</h4>
                      <div className="main__left-list">
                          <a href="/" className="main__left-item">
                              <div>
                                  <span>
                                      <i className="fa fa-star"></i>
                                      <i className="fa fa-star"></i>
                                      <i className="fa fa-star"></i>
                                      <i className="fa fa-star"></i>
                                      <i className="fa fa-star-o"></i> & up
                                  </span>
                              </div>
                          </a>
                          <a href="/" className="main__left-item">
                              <div>
                                  <span>
                                      <i className="fa fa-star"></i>
                                      <i className="fa fa-star"></i>
                                      <i className="fa fa-star"></i>
                                      <i className="fa fa-star-o"></i>
                                      <i className="fa fa-star-o"></i> & up
                                  </span>
                              </div>
                          </a>
                          <a href="/" className="main__left-item">
                              <div>
                                  <span>
                                      <i className="fa fa-star"></i>
                                      <i className="fa fa-star"></i>
                                      <i className="fa fa-star-o"></i>
                                      <i className="fa fa-star-o"></i>
                                      <i className="fa fa-star-o"></i> & up
                                  </span>
                              </div>
                          </a>
                          <a href="/" className="main__left-item">
                              <div>
                                  <span>
                                      <i className="fa fa-star"></i>
                                      <i className="fa fa-star-o"></i>
                                      <i className="fa fa-star-o"></i>
                                      <i className="fa fa-star-o"></i>
                                      <i className="fa fa-star-o"></i> & up
                                  </span>
                              </div>
                          </a>
                      </div>
                  </div>
                  <div className="main__right">
                      <div className="products">
                          <div className="card products__item">
                              <img src="img/pants-man1.jpg" className="card__img-top" alt="" />
                              <div className="card__body">
                                  <h5 className="card__title">Card title</h5>
                                  <div className="card__review">
                                      <span>
                                          <i className="fa-solid fa-star"></i>
                                          <i className="fa-solid fa-star"></i>
                                          <i className="fa-solid fa-star"></i>
                                          <i className="fa-solid fa-star-half-stroke"></i>4 reviews
                                      </span>
                                  </div>
                                  <div className="card__footer">
                                      <span className="card__price">$ 200</span>
                                      <span className="card__brand">Puma</span>
                                  </div>
                              </div>
                          </div>
                          <div className="card products__item">
                              <img src="img/pant-woman1.jpg" className="card__img-top" alt="" />
                              <div className="card__body">
                                  <h5 className="card__title">Card title</h5>
                                  <div className="card__review">
                                      <span>
                                          <i className="fa-solid fa-star"></i>
                                          <i className="fa-solid fa-star"></i>
                                          <i className="fa-solid fa-star"></i>
                                          <i className="fa-solid fa-star-half-stroke"></i>4 reviews
                                      </span>
                                  </div>
                                  <div className="card__footer">
                                      <span className="card__price">$ 200</span>
                                      <span className="card__brand">Puma</span>
                                  </div>
                              </div>
                          </div>
                          <div className="card products__item">
                              <img src="img/pants-woman2.jpg" className="card__img-top" alt="" />
                              <div className="card__body">
                                  <h5 className="card__title">Card title</h5>
                                  <div className="card__review">
                                      <span>
                                          <i className="fa-solid fa-star"></i>
                                          <i className="fa-solid fa-star"></i>
                                          <i className="fa-solid fa-star"></i>
                                          <i className="fa-solid fa-star-half-stroke"></i>4 reviews
                                      </span>
                                  </div>
                                  <div className="card__footer">
                                      <span className="card__price">$ 200</span>
                                      <span className="card__brand">Puma</span>
                                  </div>
                              </div>
                          </div>
                          <div className="card products__item">
                              <img src="img/pants-man1.jpg" className="card__img-top" alt="" />
                              <div className="card__body">
                                  <h5 className="card__title">Card title</h5>
                                  <div className="card__review">
                                      <span>
                                          <i className="fa-solid fa-star"></i>
                                          <i className="fa-solid fa-star"></i>
                                          <i className="fa-solid fa-star"></i>
                                          <i className="fa-solid fa-star-half-stroke"></i>4 reviews
                                      </span>
                                  </div>
                                  <div className="card__footer">
                                      <span className="card__price">$ 200</span>
                                      <span className="card__brand">Puma</span>
                                  </div>
                              </div>
                          </div>
                          <div className="card products__item">
                              <img src="img/pants-woman2.jpg" className="card__img-top" alt="" />
                              <div className="card__body">
                                  <h5 className="card__title">Card title</h5>
                                  <div className="card__review">
                                      <span>
                                          <i className="fa-solid fa-star"></i>
                                          <i className="fa-solid fa-star"></i>
                                          <i className="fa-solid fa-star"></i>
                                          <i className="fa-solid fa-star-half-stroke"></i>4 reviews
                                      </span>
                                  </div>
                                  <div className="card__footer">
                                      <span className="card__price">$ 200</span>
                                      <span className="card__brand">Puma</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </>
  );
}

export default Categorie