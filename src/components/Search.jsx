import { useContext } from "react";
import { AppContext } from "../context/AppProvider";

export function SearchItems() {
  const { filterByTitle, searchQuery } = useContext(AppContext);

  function searchHandler(event) {
    filterByTitle(event.target.value);
  }

  return (
    <>
      <form className="flex mr-5 lg:mr-10">
        <input
          type="search"
          class="search"
          name="hackflix-search"
          placeholder="search"
          value={searchQuery}
          onChange={searchHandler}
        ></input>
      </form>
    </>
  );
}
