import React from "react"

import { IonIcon } from '@ionic/react';
import {  desktopOutline,  } from 'ionicons/icons';

import style from "./Logo.module.css"

class Logo extends React.Component {

    constructor(props){
        super(props)
        
    }

    render(){
        return (
            <>
                <h1 className={style.size}><span className={style.style}><IonIcon icon={desktopOutline}/>SET</span>APP</h1>
            </>
        )
    }
    
}

export default Logo