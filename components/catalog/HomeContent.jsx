export default function HomeContent() {
  return (
    <aside className="home-content container">
      <div className="row">
        <div className="col-12 col-lg-6 pe-lg-5 d-flex">
          <img
            className="w-100 align-self-center mb-3"
            src="/images/laptop.png"
            alt="dark themed watch with laptop and mobile"
          ></img>
        </div>
        <div className="home-content-right col-12 col-lg-6 ps-lg-5 d-flex flex-column judtify-content-center">
          <h1>Watches for entrepreneurs</h1>
          <p>
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual teachings of the great
            explorer of the truth, the master-builder of human happiness.
          </p>
          <p className="d-none d-lg-block">
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual teachings of the great
            explorer of the truth, the master-builder of human happiness.
          </p>
        </div>
      </div>
    </aside>
  );
}
