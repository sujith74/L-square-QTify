// import React from "react";
// import styles from "./Navbar.module.css";
// import Logo from "../Logo/Logo.jsx";
// import SearchBar from "../SearchBar/SearchBar.jsx";
// import FeedbackButton from "../Feedback Button/FeedbackButton.jsx";
// import { useNavigate } from "react-router-dom";



import React from "react";
import { Link } from "react-router-dom";
// import Button from "../Button/Button";
import Logo from "../Logo/Logo.jsx";
// import Search from "../Search/Search";
import Search from "../Search/Search.jsx";
import styles from "./Navbar.module.css";

function Navbar() {
  // { searchData }
  return (
    <nav className={styles.navbar}>
      {/* <Link to="/"> */}
        <Logo />
      {/* </Link> */}
      <Search
        placeholder="Search a song of your choice"
        // searchData={searchData}
      />
      <button className={styles.nav_link}>Give Feedback</button>
    </nav>
  );
}

export default Navbar;






// function NavbarContainer() {
//     // { data, logo = false, search = false, feedback = false }
//   // const navigate = useNavigate();

//   return (
//     <div className={styles.wrapper}>
//       <nav className={styles.navbarContainer}>
//       {/* onClick={() => navigate(`/`)} */}
//         <div className={styles.logoWrapper} >
//           {/* {logo ? <Logo id={styles.logo} /> : null} */}
//           <Logo id={styles.logo} /> 
//         </div>
//         {/* {search ? (
//           <div className={styles.searchWrapper}>
//             <SearchBar
//               placeholder="Search a song of your choice"
//               data={data}
//             />
//           </div>
//         ) : null} */}
//         <div className={styles.searchWrapper}>
//             <SearchBar
//               placeholder="Search a song of your choice"
//               // data={data}
//             />
//           </div>
//         <FeedbackButton  />
//         {/* feedback={feedback} */}
//       </nav>
//     </div>
//   );
// }

// export default NavbarContainer;
