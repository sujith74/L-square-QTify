import React from "react";
// import { Link } from "react-router-dom";
// import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import styles from "./Navbar.module.css";
import { Button } from "@mui/material";
import Search from '../Search/Search'


function Navbar() {
  return (
    <>
    <nav className={styles.navbar}>
      {/* <Link to="/"> */}
         <Logo />
         {/* </Link> */}
      
      <Search
        placeholder="Search a song of your choice"
        // searchData={searchData}
      />
      <Button className={styles.button}>Give Feedback</Button>
    </nav>
    </>
  );
}

export default Navbar;
