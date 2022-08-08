import FooterConnect from "./FooterConnect";
import FooterNewsletter from "./FooterNewsletter";
import FooterSocial from "./FooterSocial";

export default function FooterPrimary() {
  return (
    <div className="footer-primary pt-lg-5">
      <div className="container">
        <FooterConnect></FooterConnect>
        <FooterNewsletter></FooterNewsletter>
        <FooterSocial></FooterSocial>
      </div>
    </div>
  );
}
