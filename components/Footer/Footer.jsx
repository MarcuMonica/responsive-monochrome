import FooterSecondary from "./FooterSecondary";
import FooterPrimary from "./FooterPrimary";

export default function Footer() {
  return (
    <footer className="footer mt-lg-5">
      <div className="container-lg d-lg-flex flex-lg-row-reverse p-0">
        <FooterPrimary></FooterPrimary>

        <FooterSecondary></FooterSecondary>
      </div>
    </footer>
  );
}
