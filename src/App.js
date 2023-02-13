import SvgList from "./SvgList";
import user1 from "./images/image-colton.jpg";
import user2 from "./images/image-irene.jpg";
import user3 from "./images/image-anne.jpg";



function App() {
  return (
    <section>
      <section className="challenge">
        <section className="flex-container1">
          <section className="heading">
            <h1>10,000+ of our users love our products.</h1>
            <p>
              We only provide great products combined with excellent customer
              service. See what our satisfied customers are saying about our
              services.
            </p>
          </section>
          <section className="ratings">
            <section className="rating first-rating">
              <section className="svg-wrapper">
                <SvgList />
              </section>
              <h2>Rated 5 Stars in Reviews</h2>
            </section>
            <section className="rating second-rating">
              <section className="svg-wrapper">
              <SvgList />
              </section>
              <h2>Rated 5 Stars in Report Guru</h2>
            </section>
            <section className="rating third-rating">
              <section className="svg-wrapper">
              <SvgList />
              </section>
              <h2>Rated 5 Stars in BestTech</h2>
            </section>
          </section>
        </section>
      </section>
      <section className="reviews">
        <section className="review first-review">
          <section className="flex-container2">
            <img src={user1} alt="male test user" />
            <div>
              <h3 className="name">Colton Smith</h3>
              <p className="verified-buyer">Verified Buyer</p>
            </div>
          </section>
          <p className="review-text">
            "We needed the same printed design as the one we had ordered a week
            prior. Not only did they find the original order, but we also
            received it in time. Excellent!"
          </p>
        </section>
        <section className="review second-review">
          <section className="flex-container2">
            <img src={user2}  alt="female test user" />
            <div>
              <h3 className="name">Irene Roberts</h3>
              <p className="verified-buyer">Verified Buyer</p>
            </div>
          </section>
          <p className="review-text">
            "Customer service is always excellent and very quick turn around.
            Completely delighted with the simplicity of the purchase and the
            speed of delivery."
          </p>
        </section>
        <section className="review third-review">
          <section className="flex-container2">
            <img src={user3}  alt="female test user" />
            <div>
              <h3 className="name">Anne Wallace</h3>
              <p className="verified-buyer">Verified Buyer</p>
            </div>
          </section>
          <p className="review-text">
            "Put an order with this company and can only praise them for the
            very high standard. Will definitely use them again and recommend
            them to everyone!"
          </p>
        </section>
      </section>
    </section>
  );
}

export default App;
