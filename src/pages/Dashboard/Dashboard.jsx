import React from "react"

import { 
    IonPage, 
    IonContent, 
    IonHeader, 
    IonToolbar,
    IonTitle,
    IonButtons,
    IonBackButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonIcon,
} from '@ionic/react';

import { constructOutline, clipboardOutline, codeDownloadOutline, codeSlashOutline } from 'ionicons/icons';

import style from "./Dashboard.module.css"


const logo = require("./logo.png")

class Dashboard extends React.Component {

    constructor(props){
        super(props)
        
        this.state = {
           
        }

    }

    render(){
        return (
            
            <IonPage>

                <IonHeader>
                    <IonToolbar color="primary">
                        <IonTitle>Dashboard</IonTitle>
                    </IonToolbar>
                </IonHeader>

                <IonContent>

                    <div className={style.dash}>
                        {/*<p className={style.title}>Welcome!</p>*/}
                        <img src={logo.default} width="50%"/>
                    </div>
                    
                    <div className={style.cssGrid}>

                        <IonCard className={`${style.mainCard} ${style.buildPC}`} button routerLink="/home/build">
                            <IonIcon icon={constructOutline} className={style.cardLogo} />
                            <div className={style.selectCard}>
                                <IonCardTitle className={style.titleCard}>Build A PC Now!</IonCardTitle>
                            </div>
                        </IonCard>
                        {/*
                        <IonCard className={`${style.mainCard} ${style.loadPC}`} button>
                            <div className={style.selectCard}>
                                <IonCardTitle className={style.titleCard}>Load Layout!</IonCardTitle>
                            </div>
                        </IonCard>

                        <IonCard className={`${style.mainCard} ${style.viewList}`} button>
                            <div className={style.selectCard}>
                                <IonCardTitle className={style.titleCard}>View Component List!</IonCardTitle>
                            </div>
                        </IonCard>
                        */}

                        <IonCard className={`${style.mainCard} ${style.checkTutorials}`} button routerLink="/home/tutorials">
                            <IonIcon icon={clipboardOutline} className={style.cardLogo} />
                            <div className={style.selectCard}>
                                <IonCardTitle className={style.titleCard}>Check Tutorials!</IonCardTitle>
                            </div>
                        </IonCard>

                        <IonCard className={`${style.mainCard} ${style.viewList}`} button routerLink="/article/sp/bsod">
                            <IonIcon icon={codeSlashOutline} className={style.cardLogo} />
                            <div className={style.selectCard}>
                                <IonCardTitle className={style.titleCard}>BSOD Codes</IonCardTitle>
                            </div>
                        </IonCard>

                    </div>
                    
                   
                </IonContent>
                
            </IonPage>
            
        )
    }
    
}

export default Dashboard