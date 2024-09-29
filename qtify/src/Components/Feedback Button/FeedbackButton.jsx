import React from "react";
import styles from "./FeedbackButton.module.css";

function FeedbackButton() {
    // { feedback = false }
//   return feedback ? <div className={styles.nav_link}>Give Feedback</div> : null;
return <button className={styles.nav_link}>Give Feedback</button>
}

export default FeedbackButton;
