import React from 'react';
import ClearListButton from 'components/clearlistbutton';
import ClearDoneButton from 'components/cleardonebutton';

import styles from './ButtonHolder.module.css';


function ButtonHolder({ toggleConfirmOverlayDone, toggleConfirmOverlay }){
    return(
        <div className = {styles.buttonholder}>            
            <ClearDoneButton toggleConfirmOverlayDone={toggleConfirmOverlayDone} />
            <ClearListButton toggleConfirmOverlay={toggleConfirmOverlay} /> 
        </div>
    )


}

export default ButtonHolder