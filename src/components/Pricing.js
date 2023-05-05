import React from "react";
import "./css/Pricing.css";
import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
const Pricing = () => {
  return (
    <>
      <div className="pricing-bg ">
        <Container>
          <section class="card container grid">
            <div class="card__container grid">
              {/* <!--==================== CARD 1 ====================--> */}
              <article class="card__content grid">
                <div class="card__pricing">
                  <div class="card__pricing-number">
                    <span class="card__pricing-symbol">$</span>0
                  </div>
                  <span class="card__pricing-month">/month</span>
                </div>

                <header class="card__header">
                  <div class="card__header-circle grid">
                    <img
                      src="assets/img/free-coin.png"
                      alt=""
                      class="card__header-img"
                    />
                  </div>

                  <span class="card__header-subtitle">Free plan</span>
                  <h1 class="card__header-title">Basic</h1>
                </header>

                <ul class="card__list grid">
                  <li class="card__list-item">
                    <i class="uil uil-check card__list-icon"></i>
                    <p class="card__list-description">3 user request</p>
                  </li>
                  <li class="card__list-item">
                    <i class="uil uil-check card__list-icon"></i>
                    <p class="card__list-description">10 downloads por day</p>
                  </li>
                  <li class="card__list-item">
                    <i class="uil uil-check card__list-icon"></i>
                    <p class="card__list-description">Daily content updates</p>
                  </li>
                  <li class="card__list-item">
                    <i class="uil uil-check card__list-icon"></i>
                    <p class="card__list-description">Fully editable files</p>
                  </li>
                </ul>

                <button class="card__button">Choose this plan</button>
              </article>

              {/* <!--==================== CARD 2 ====================--> */}
              <article class="card__content grid">
                <div class="card__pricing">
                  <div class="card__pricing-number">
                    <span class="card__pricing-symbol">$</span>19
                  </div>
                  <span class="card__pricing-month">/month</span>
                </div>

                <header class="card__header">
                  <div class="card__header-circle grid">
                    <img
                      src="assets/img/pro-coin.png"
                      alt=""
                      class="card__header-img"
                    />
                  </div>

                  <span class="card__header-subtitle">Most popular</span>
                  <h1 class="card__header-title">Professional</h1>
                </header>

                <ul class="card__list grid">
                  <li class="card__list-item">
                    <i class="uil uil-check card__list-icon"></i>
                    <p class="card__list-description">100 user request</p>
                  </li>
                  <li class="card__list-item">
                    <i class="uil uil-check card__list-icon"></i>
                    <p class="card__list-description">Unlimited downloads</p>
                  </li>
                  <li class="card__list-item">
                    <i class="uil uil-check card__list-icon"></i>
                    <p class="card__list-description">
                      Unlock all features from our site
                    </p>
                  </li>
                  <li class="card__list-item">
                    <i class="uil uil-check card__list-icon"></i>
                    <p class="card__list-description">Daily content updates</p>
                  </li>
                  <li class="card__list-item">
                    <i class="uil uil-check card__list-icon"></i>
                    <p class="card__list-description">Fully editable files</p>
                  </li>
                </ul>

                <button class="card__button">Choose this plan</button>
              </article>

              {/* <!--==================== CARD 3 ====================--> */}
              <article class="card__content grid">
                <div class="card__pricing">
                  <div class="card__pricing-number">
                    <span class="card__pricing-symbol">$</span>29
                  </div>
                  <span class="card__pricing-month">/month</span>
                </div>

                <header class="card__header">
                  <div class="card__header-circle grid">
                    <img
                      src="assets/img/enterprise-coin.png"
                      alt=""
                      class="card__header-img"
                    />
                  </div>

                  <span class="card__header-subtitle">For agencies</span>
                  <h1 class="card__header-title">Enterprise</h1>
                </header>

                <ul class="card__list grid">
                  <li class="card__list-item">
                    <i class="uil uil-check card__list-icon"></i>
                    <p class="card__list-description">Unlimited user request</p>
                  </li>
                  <li class="card__list-item">
                    <i class="uil uil-check card__list-icon"></i>
                    <p class="card__list-description">Unlimited downloads</p>
                  </li>
                  <li class="card__list-item">
                    <i class="uil uil-check card__list-icon"></i>
                    <p class="card__list-description">
                      Unlock all features from our site
                    </p>
                  </li>
                  <li class="card__list-item">
                    <i class="uil uil-check card__list-icon"></i>
                    <p class="card__list-description">Daily content updates</p>
                  </li>
                  <li class="card__list-item">
                    <i class="uil uil-check card__list-icon"></i>
                    <p class="card__list-description">Fully editable files</p>
                  </li>
                </ul>

                <button class="card__button">Choose this plan</button>
              </article>
            </div>
          </section>
        </Container>
      </div>
    </>
  );
};

export default Pricing;
