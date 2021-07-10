import React from "react"

import { 
    IonPage, 
    IonContent, 
    IonHeader, 
    IonIcon, 
    IonSpinner, 
    IonToolbar, 
    IonTitle,
    IonButtons,
    IonBackButton
} from '@ionic/react';
import { bookOutline, qrCode,  } from 'ionicons/icons';

import style from "./BSOD_Solution.module.css"


class BSOD_Solution extends React.Component {

    constructor(props){
        super(props)
        
        this.state = {

        }

    }

    render(){
        return (
            
            <IonPage>

                <IonHeader>
                    <IonToolbar color="secondary">
                        <IonTitle>0x0000001 Solution</IonTitle>
                        <IonButtons slot="start">
                            <IonBackButton defaultHref="/home/build"/>
                        </IonButtons>
                    </IonToolbar>
                </IonHeader>
            
                <IonContent>

                    <h2>How to Fix</h2>

                    <p>Solution Step 1</p>
                    <p>Solution Step 1</p>
                    <p>Solution Step 1</p>
                    <p>Solution Step 1</p>
                    <p>Solution Step 1</p>

                </IonContent>
                
            </IonPage>
            
        )
    }
    
}

export default BSOD_Solution