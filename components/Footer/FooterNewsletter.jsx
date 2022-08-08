export default function FooterNewsletter() {
  return (
    <section className="footer-newsletter d-lg-none">
      <input type="checkbox" name="newsletter" id="newsletter" required></input>
      <label htmlFor="newsletter">
        I agree with <a href="https://x.ro"><span>privacy policy</span></a> and I want to receive email
        from Monochrome
      </label>
    </section>
  );
}
