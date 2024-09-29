import React, { useState, useEffect } from "react";
import styles from "./SearchBar.module.css";
import {  ReactComponent as SearchIcon } from "../../Assets/Searchicon.svg";
// import useComponentVisible from "./../../Hooks/useComponentVisible";
import useComponentVisible from "../Hooks/useComponentVisible";
import MenuItems from "../MenuItems/MenuItems";

function SearchBar({ placeholder, data }) {
  const [inputValue, setInputValue] = useState("");
  const [filteredOptions, setFilteredOptions] = useState([]);

  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(true);

  const _filterData = (data) => {
    if (!inputValue) {
      setFilteredOptions([]);
      return;
    }

    const filteredOptions = data?.filter((albumsData) =>
      albumsData?.title?.toLowerCase()?.includes(inputValue.toLowerCase())
    );

    setFilteredOptions(filteredOptions);
  };

  useEffect(() => {
    _filterData(data);
  }, [inputValue]);

  return (
    <div>
      <div onClick={() => setIsComponentVisible(true)}>
        <form className={styles.wrapper}
        onSubmit={(e) => e.preventDefault()}>
          <input
            className={styles.search}
            placeholder={placeholder}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className={styles.searchButton} type="submit">
            <SearchIcon className={styles.searchIcon} />
          </button>
        </form>
      </div>

      {/* {isComponentVisible && (
        <div className={styles.dropdownWrapper} ref={ref}>
          {filteredOptions?.length ? (
            <MenuItems albums={filteredOptions} />
          ) : inputValue ? (
            <div className={styles.not_found_wrapper}>
              <p className={styles.not_found_message}>No Data Found</p>
            </div>
          ) : null}
        </div>
      )} */}
    </div>
  );
}

export default SearchBar;
