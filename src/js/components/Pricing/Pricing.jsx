import React from "react";

const Pricing = props => {
  let res = props.pricing[0].pricing.map((val, ind) => {
    return (
      <section id="pricing" class="padd-section text-center wow fadeInUp">
        <div class="container">
          <div class="section-title text-center">
            <h2>{val.title}</h2>
            <p class="separator">{val.subtitle}</p>
          </div>
        </div>

        <div class="container">
          <div class="row">
            <div class="col-md-6 col-lg-3">
              <div class="block-pricing">
                <div class="table">
                  <h4>{val.cardTitle_1}</h4>
                  <h2>{val.card_des}</h2>
                  <ul class="list-unstyled">
                    <li>
                      {" "}
                      <b>{val.gb}</b> {val.ram}
                    </li>
                    <li>
                      {" "}
                      <b>{val.hour}</b> {val.support}
                    </li>
                    <li>
                      <b>{val.GB}</b> {val.ssd}
                    </li>
                    <li>{val.pricing_li_1}</li>
                    <li>{val.pricing_li_2}</li>
                  </ul>
                  <div class="table_btn">
                    <a href="#" class="btn">
                      <i class="fa fa-shopping-cart" /> {val.pricing_btn}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-3">
              <div class="block-pricing">
                <div class="table">
                  <h4>{val.cardTitle_2}</h4>
                  <h2>{val.card_des}</h2>
                  <ul class="list-unstyled">
                    <li>
                      <b>{val.gb}</b> {val.ram}
                    </li>
                    <li>
                      <b>{val.hour}</b> {val.support}
                    </li>
                    <li>
                      <b>{val.GB}</b> {val.ssd}
                    </li>
                    <li>{val.pricing_li_1}</li>
                    <li>{val.pricing_li_2}</li>
                  </ul>
                  <div class="table_btn">
                    <a href="#" class="btn">
                      <i class="fa fa-shopping-cart" /> {val.pricing_btn}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-3">
              <div class="block-pricing">
                <div class="table">
                  <h4>{val.cardTitle_3}</h4>
                  <h2>{val.card_des}</h2>
                  <ul class="list-unstyled">
                    <li>
                      <b>{val.gb}</b> {val.ram}
                    </li>
                    <li>
                      <b>{val.hour}</b> {val.support}
                    </li>
                    <li>
                      <b>{val.GB}</b> {val.ssd}
                    </li>
                    <li>{val.pricing_li_1}</li>
                    <li>{val.pricing_li_2}</li>
                  </ul>
                  <div class="table_btn">
                    <a href="#" class="btn">
                      <i class="fa fa-shopping-cart" /> {val.pricing_btn}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-3">
              <div class="block-pricing">
                <div class="table">
                  <h4>{val.cardTitle_4}</h4>
                  <h2>{val.card_des}</h2>
                  <ul class="list-unstyled">
                    <li>
                      <b>{val.gb}</b> {val.ram}
                    </li>
                    <li>
                      <b>{val.hour}</b> {val.support}
                    </li>
                    <li>
                      <b>{val.GB}</b> {val.ssd}
                    </li>
                    <li>{val.pricing_li_2}</li>
                    <li>{val.pricing_li_2}</li>
                  </ul>
                  <div class="table_btn">
                    <a href="#" class="btn">
                      <i class="fa fa-shopping-cart" /> {val.pricing_btn}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  });
  return <React.Fragment>{res}</React.Fragment>;
};

export default Pricing;
