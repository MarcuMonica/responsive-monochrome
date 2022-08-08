import ProductTile from "./ProductTile";

export default function CatalogPreview() {
  return (
    <section className="catalog-preview container">
      <header>
        <h1>Spring Collection</h1>
      </header>
      <div className="catalog-preview-content row">
        <div className="col-6 col-lg-3">
          <ProductTile></ProductTile>
        </div>
        <div className="col-6 col-lg-3">
          <ProductTile></ProductTile>
        </div>
        <div className="col-lg-3 d-none d-lg-block">
          <ProductTile></ProductTile>
        </div>
        <div className="col-lg-3 d-none d-lg-block">
          <ProductTile></ProductTile>
        </div>
      </div>
    </section>
  );
}
