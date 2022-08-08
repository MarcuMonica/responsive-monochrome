import HeaderSearch from "./HeaderSearch";
import HeaderMenu from "./HeaderMenu";

export default function HeaderPrimary() {
  return (
    <div className="header-primary">
      <div className="container d-flex justify-content-between">
        <div className="hamburger-menu d-lg-none">
          <a href="https://x.ro">
            <i className="fa-solid fa-bars"></i>
          </a>
        </div>
        <div className="d-none d-lg-block w-100">
          <HeaderMenu></HeaderMenu>
        </div>
        <div className="d-lg-none">
          <HeaderSearch></HeaderSearch>
        </div>
      </div>
    </div>
  );
}
