import HeaderSearch from "./HeaderSearch";
import HeaderSocial from "./HeaderSocial";
import HeaderLogo from "./HeaderLogo";
import HeaderConnect from "./HeaderConnect";

export default function HeaderSecondary() {
  return (
    <section className="header-secondary container py-2 py-lg-4 justify-content-lg-evenly">
      <div className="d-lg-none">
        <HeaderLogo></HeaderLogo>
      </div>
      <div className="d-lg-none">
        <HeaderConnect></HeaderConnect>
      </div>
      <div className="d-none d-lg-block">
        <HeaderSocial></HeaderSocial>
      </div>

      <div className="header-search-connect d-none d-lg-flex align-items-end">
        <HeaderSearch></HeaderSearch>
        <HeaderConnect></HeaderConnect>
      </div>
    </section>
  );
}
