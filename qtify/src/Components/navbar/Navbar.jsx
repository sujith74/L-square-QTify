import React from "react";
import styles from "./Navbar.module.css";
import Logo from "../Logo/Logo";
import SearchBar from "../SearchBar/SearchBar.jsx";
import FeedbackButton from "../Feedback Button/FeedbackButton";
// import { useNavigate } from "react-router-dom";

function NavbarContainer() {
    // { data, logo = false, search = false, feedback = false }
  // const navigate = useNavigate();

  return (
    <div className={styles.wrapper}>
      <nav className={styles.navbarContainer}>
      {/* onClick={() => navigate(`/`)} */}
        <div className={styles.logoWrapper} >
          {/* {logo ? <Logo id={styles.logo} /> : null} */}
          <Logo id={styles.logo} /> 
        </div>
        {/* {search ? (
          <div className={styles.searchWrapper}>
            <SearchBar
              placeholder="Search a song of your choice"
              data={data}
            />
          </div>
        ) : null} */}
        <div className={styles.searchWrapper}>
            <SearchBar
              placeholder="Search a song of your choice"
              // data={data}
            />
          </div>
        <FeedbackButton  />
        {/* feedback={feedback} */}
      </nav>
    </div>
  );
}

export default NavbarContainer;
