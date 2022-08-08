export default function FooterConnect() {
  return (
    <section className="footer-connect">      
      <h1 className="d-lg-none">Let&apos;s connect</h1>
      <p className="d-lg-none">Be the first to receive exclusive offers</p>
      <p className="d-none d-lg-block">Sign up for our newsletter</p>
      <form>
        <input type="email" name="email" id="email" placeholder="Email"></input>
        <button className="d-block" type="submit" name="submit">
          Submit
        </button>
      </form>
    </section>
  );
}
