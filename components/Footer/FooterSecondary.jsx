export default function FooterNav() {
  return (
    <section className="footer-secondary pt-lg-5">
      <div className="container">
        <h1 className="d-lg-none">How can we help?</h1>
        
        <div className="footer-nav-secondary">
          <ul className="d-none d-lg-block">
            <li>
              <a href="tel:+44 (0)10 2345 6789" className="d-lg-flex flex-lg-column">Call us <span>+44 (0)10 2345 6789</span></a>
            </li>
            <li>
              <a href="mailto:john.doe@example.com">Email customer care</a>
            </li>
          </ul>

          <ul className="footer-about">
            <li>
              <a href="https://x.ro">About us</a>
            </li>

            <li>
              <a href="https://x.ro">Careers</a>
            </li>

            <li>
              <a href="https://x.ro">Affiliates</a>
            </li>

            <li>
              <a href="https://x.ro">Advertising</a>
            </li>
          </ul>

          <ul className="footer-faq">
            <li>
              <a href="https://x.ro">Style and fit</a>
            </li>

            <li>
              <a href="https://x.ro">Faqs</a>
            </li>

            <li>
              <a href="https://x.ro">Delivery</a>
            </li>

            <li>
              <a href="https://x.ro">Returns</a>
            </li>
          </ul>
        </div>

        <div className="footer-terms d-lg-none">
          <ul>
            <li>
              <a href="https://x.ro">terms &amp; conditions</a>
            </li>

            <li>
              <a href="https://x.ro">privacy &amp; cookies</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
