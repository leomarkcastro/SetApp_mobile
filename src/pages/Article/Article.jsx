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
    IonLabel,
    IonPopover,
    IonSearchbar,
    IonButton
} from '@ionic/react';
import { constructOutline  } from 'ionicons/icons';

import style from "./Article.module.css"
import getArticles from "../../utility/GetArticles/getArticles";

class Article extends React.Component {

    constructor(props){
        super(props)

        this.articles = getArticles()

        this.currentArticle = this.articles[this.props.match.params.article_index]

        this.state = {
        }

    }

    render(){
        return (
            
            <IonPage>

                <IonHeader>
                    <IonToolbar color="secondary">
                        <IonTitle>Read Article</IonTitle>
                        <IonButtons slot="start">
                            <IonBackButton defaultHref="/home/tutorials"/>
                        </IonButtons>
                    </IonToolbar>
                </IonHeader>

                <IonContent className={style.article}>

                    <img className={style.article_image} src={this.currentArticle.Image}></img>

                    <h1 className={style.article_title}>{this.currentArticle.Name}</h1>

                    {
                        this.currentArticle.Paragraph.map((e,i) => (
                            <p key={`para_${i}`} className={style.article_paragraph} dangerouslySetInnerHTML={{__html: e}}/>
                        ))
                    }

                    <div className={style.article_endPad}/>


                </IonContent>

                
                
            </IonPage>
            
        )
    }
    
}

export default Article