import React from "react";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <div className={styles.hero}>
      <div>
        <h1>100 Thousand Songs, ad-free</h1>
        <h1>Over thousands podcast episodes</h1>
      </div>
      <div>
        <img
          src={require("../../Assets/hero_headphones.png")}
          width={212}
          alt="headphones"
        />
      </div>
    </div>
  );
}

export default Hero;




















// import React from "react";
// import styles from "./Hero.module.css";
// import Headphone from "../../Assets/headphone.svg";

// function Hero() {
//   return (
//     <>
//       <div className={styles.wrapper}>
//         <div className={styles.heroImageWrapper}>
//           <div className={styles.banner}>
//             <h1>100 Thousand Songs, ad-free</h1>
//             <h1>Over thousands podcast episodes</h1>
//           </div>
//           <div>
//             <img src={Headphone} alt="Headphone" height="212px" />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Hero;
