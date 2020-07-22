import React from "react";
import styles from "./ConfirmOverlay.module.css";

function ConfirmOverlay(){
    return(
    
    <div className={styles.confirmdialog && styles.opacityzero}>
        <p className={styles.confirmdialogp}>Are you sure?</p>
        <button className={styles.confirmdelete}>Clear</button>
        <button className={styles.canceldelete}>Cancel</button>
    </div>

    );
}


export default ConfirmOverlay;