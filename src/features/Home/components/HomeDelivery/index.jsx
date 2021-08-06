// material ui core
import { Container } from "@material-ui/core";

import PrimaryButton from "components/PrimaryButton";

import BigDeliverySvg from "assets/svgs/Home/big-delivery.svg";
import SmallDeliverySvg from "assets/svgs/Home/small-delivery.svg";

import "assets/styles/_typography.scss";
import "./styles.scss";

function HomeDelivery() {
  return (
    <section className="home-delivery">
      <Container>
        <div className="home-delivery__container">
          <div className="home-delivery__col">
            <div className="primary-yellow-text">Delivery</div>
            <h2 className="primary-heading-text">
              A Moments Of Delivered <strong>On Right Time & Place</strong>
            </h2>

            <p className="home-delivery__description">
              Food G is a restaurant, bar and coffee roastery located on a busy
              corner site in Farringdon's Exmouth Market. With glazed frontage
              on two sides of the building, overlooking the market and a
              bustling London inteon.
            </p>

            <div className="home-delivery__contact">
              <img
                src={SmallDeliverySvg}
                className="home-delivery__contact-img"
                alt="Delivery"
              ></img>
              <div className="home-delivery__contact-col">
                <div className="home-delivery__contact-title">
                  Delivery Order Num
                </div>
                <div className="home-delivery__contact-phone">
                  <strong>123-59794069</strong>
                </div>
              </div>
              <PrimaryButton subClass="red" page="shop">
                Order Now
              </PrimaryButton>
            </div>
          </div>
          <img
            src={BigDeliverySvg}
            className="home-delivery__img"
            alt="Delivery"
          />
        </div>
      </Container>
    </section>
  );
}

export default HomeDelivery;
