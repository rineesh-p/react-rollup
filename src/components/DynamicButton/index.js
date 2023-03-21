import React from "react";
import styles from "./DynamicButton.module.css";

function DynamicButton ({children}){
    return <button className={styles.button}>{children}</button>
}

export default DynamicButton;