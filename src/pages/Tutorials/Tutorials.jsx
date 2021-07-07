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
    IonList,
    IonListHeader,
    IonItem,
    IonCardSubtitle,
} from '@ionic/react';
import { constructOutline  } from 'ionicons/icons';

import style from "./Tutorials.module.css"
import getArticles from "../../utility/GetArticles/getArticles";

class Tutorials extends React.Component {

    constructor(props){
        super(props)
        
        this.articles = getArticles()
        
        this.state = {
        }
    }

    render(){
        return (
            
            <IonPage>

                <IonHeader> 
                    <IonToolbar color="tertiary">
                        <IonTitle>Tutorials</IonTitle>
                </IonToolbar>

                </IonHeader>
            
                <IonContent>

                    <IonCard className={`${style.mainCard} ${style.buildPC}`} 
                        style={
                            {
                                background: `url("https://ichef.bbci.co.uk/news/976/cpsprodpb/2920/production/_119182501_windows.png"`,
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                                backgroundRepeat: "repeat",
                            }
                        }
                        button
                        routerLink="/article/sp/bsod"
                    >
                        <div className={style.selectCard}>
                            <IonCardTitle color="light" className={style.titleCard}>Blue Screen of Death</IonCardTitle>
                        </div>
                    </IonCard>

                    {
                        this.articles.map((e,i) => (
                            <IonCard className={`${style.mainCard} ${style.buildPC}`} 
                                key={`article_${i}`}
                                style={
                                    {
                                        background: `linear-gradient(184deg, rgba(2,0,36,0) 0%, rgba(0,0,0,0.8130602582830007) 58%), url(${e["Image"]})`,
                                        backgroundPosition: "center",
                                        backgroundSize: "cover",
                                        backgroundRepeat: "repeat",
                                    }
                                }
                                button
                                routerLink={`/article/${i}`}
                            >
                                <div className={style.selectCard}>
                                    <IonCardTitle color="light" className={style.titleCard}>{e["Name"]}</IonCardTitle>
                                </div>
                            </IonCard>
                        ))
                    }

                    {/*
                    <IonCard color="light">
                        <img src="https://www.cgdirector.com/wp-content/uploads/media/2019/01/ghrmmh873xa11.jpg" />
                        <IonCardHeader>
                            <IonCardTitle>PC #1</IonCardTitle>
                        </IonCardHeader>
                        <IonCardContent>
                            <div className={style.cardGrid}>
                                <p>Processor: AMD</p>
                                <p>Processor: AMD</p>
                                <p>Processor: AMD</p>
                                <p>Processor: AMD</p>
                            </div>
                        </IonCardContent>
                    </IonCard>

                    */}
                </IonContent>
                
            </IonPage>
            
        )
    }
    
}

export default Tutorials