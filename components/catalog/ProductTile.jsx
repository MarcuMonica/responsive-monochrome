export default function ProductTile() {
  return (
    <article className="product-tile">
      <section className="product-tile-content">
        <a href="https://example.com" title="watch">
          <img src="/images/products/whitewatch.png" alt="white wrist watch" />
        </a>

        <a className="badge" href="#" title="wishlist">
          <i className="fa-solid fa-heart"></i>
        </a>

        <header className="product-price">
          <h1>Monochrome</h1>
          <span>$425</span>
        </header>
      </section>
    </article>
  );
}
