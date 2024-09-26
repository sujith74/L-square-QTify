import React from "react";
// import { Link } from "react-router-dom";
// import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <>
    <nav className={styles.navbar}>
      {/* <Link to="/"> */}
         <Logo />
      
      {/* <Search
        placeholder="Search a song of your choice"
        // searchData={searchData}
      /> */}
      {/* <Button>Give Feedback</Button> */}
    </nav>
    </>
  );
}

export default Navbar;
