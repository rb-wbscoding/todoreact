import React from "react";
import styles from "./ClearListButton.module.css";

function ClearListButton(){
    return(
        <div className={styles.clearlistcontainer}>
            <button className={styles.clearlist}>Clear List</button>
        </div>
    );

}


export default ClearListButton;
