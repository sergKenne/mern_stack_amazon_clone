import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
      <div class="products">
          <div class="card products__item">
              <Link to="/detail/1234">
                  <img src="img/pants-man1.jpg" class="card__img-top" alt="man" />
              </Link>
              <div class="card__body">
                  <Link to="/detail/1234" class="card__title">
                      Card title
                  </Link>
                  <div class="card__review">
                      <span>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star-half-stroke"></i>4 reviews
                      </span>
                  </div>
                  <div class="card__footer">
                      <span class="card__price">$ 200</span>
                      <span class="card__brand">Puma</span>
                  </div>
              </div>
          </div>
          <div class="card products__item">
              <img src="img/pant-woman1.jpg" class="card__img-top" alt="man" />
              <div class="card__body">
                  <h5 class="card__title">Card title</h5>
                  <div class="card__review">
                      <span>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star-half-stroke"></i>4 reviews
                      </span>
                  </div>
                  <div class="card__footer">
                      <span class="card__price">$ 200</span>
                      <span class="card__brand">Puma</span>
                  </div>
              </div>
          </div>
          <div class="card products__item">
              <img src="img/pant-woman1.jpg" class="card__img-top" alt="man" />
              <div class="card__body">
                  <h5 class="card__title">Card title</h5>
                  <div class="card__review">
                      <span>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star-half-stroke"></i>4 reviews
                      </span>
                  </div>
                  <div class="card__footer">
                      <span class="card__price">$ 200</span>
                      <span class="card__brand">Puma</span>
                  </div>
              </div>
          </div>
          <div class="card products__item">
              <img src="img/pant-woman1.jpg" class="card__img-top" alt="man" />
              <div class="card__body">
                  <h5 class="card__title">Card title</h5>
                  <div class="card__review">
                      <span>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star-half-stroke"></i>4 reviews
                      </span>
                  </div>
                  <div class="card__footer">
                      <span class="card__price">$ 200</span>
                      <span class="card__brand">Puma</span>
                  </div>
              </div>
          </div>
          <div class="card products__item">
              <img src="img/pant-woman1.jpg" class="card__img-top" alt="man" />
              <div class="card__body">
                  <Link to="/categorie" class="card__title">
                      Card title
                  </Link>
                  <div class="card__review">
                      <span>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star-half-stroke"></i>4 reviews
                      </span>
                  </div>
                  <div class="card__footer">
                      <span class="card__price">$ 200</span>
                      <span class="card__brand">Puma</span>
                  </div>
              </div>
          </div>
          <div class="card products__item">
              <img src="img/pants-woman2.jpg" class="card__img-top" alt="man" />
              <div class="card__body">
                  <h5 class="card__title">Card title</h5>
                  <div class="card__review">
                      <span>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star-half-stroke"></i>4 reviews
                      </span>
                  </div>
                  <div class="card__footer">
                      <span class="card__price">$ 200</span>
                      <span class="card__brand">Puma</span>
                  </div>
              </div>
          </div>
          <div class="card products__item">
              <img src="img/pants-man1.jpg" class="card__img-top" alt="man" />
              <div class="card__body">
                  <h5 class="card__title">Card title</h5>
                  <div class="card__review">
                      <span>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star-half-stroke"></i>4 reviews
                      </span>
                  </div>
                  <div class="card__footer">
                      <span class="card__price">$ 200</span>
                      <span class="card__brand">Puma</span>
                  </div>
              </div>
          </div>
          <div class="card products__item">
              <img src="img/pants-woman2.jpg" class="card__img-top" alt="man" />
              <div class="card__body">
                  <h5 class="card__title">Card title</h5>
                  <div class="card__review">
                      <span>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star-half-stroke"></i>4 reviews
                      </span>
                  </div>
                  <div class="card__footer">
                      <span class="card__price">$ 200</span>
                      <span class="card__brand">Puma</span>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default Home