export default function HeaderSearch() {
    return (
        <form className="header-search">
        <button type="submit">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>

        <input
          type="text"
          name="search"
          title="search button"
          placeholder="Search"
        ></input>
      </form>
    )
}