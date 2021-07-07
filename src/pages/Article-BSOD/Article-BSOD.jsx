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

import style from "./Article-BSOD.module.css"
import getbsod from "../../utility/GetBSOD/getbsod";

class Article_BSOD extends React.Component {

    constructor(props){
        super(props)

        this.bsod = getbsod()
        
        this.state = {
            popover_event: null,
            popover_open: false,
            popover_message: "",
            popover_title: "",
            popover_link: "",
            bsod_list: this.bsod,
            search: "",
        }

    }

    searchResult(e){
        console.log(e.detail.value)

    }

    changeSearch(ev){
        let st = {...this.state}
        st.search = ev.detail.value
        
        this.setState(st)

        let moods = document.querySelectorAll('.bsod_error');
        
        requestAnimationFrame(() => {
            moods.forEach(item => {
                const shouldShow = item.textContent.toLowerCase().indexOf(ev.detail.value.toLowerCase()) > -1;
                item.style.display = shouldShow ? 'block' : 'none';
            });
        })
        

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

                    <img className={style.article_image} src="https://i.insider.com/5f971f124743a3001216bb3a?width=1000&format=jpeg&auto=webp"></img>

                    <h1 className={style.article_title}>Blue Screen of Death</h1>

                    <p className={style.article_paragraph}>A Blue Screen of Death (BSOD), technically called a stop error, occurs when Windows suffers a serious problem and is forced to "stop" completely.</p>

                    <p className={style.article_paragraph}>BSOD errors occur in any Windows operating system, including Windows 10, Windows 8, Windows 7, Windows Vista, Windows XP, and even Windows 98/95.</p>

                    <IonList>
                        <IonListHeader>List of BSOD Codes</IonListHeader>
                        <IonSearchbar onIonChange={this.changeSearch.bind(this)} value={this.state.search}></IonSearchbar>
                        {
                            this.bsod.map((e,i) => (
                                <IonItem key={`bsod_${i}`} button onClick={
                                    (ev) => this.setState({...this.state, 
                                        popover_open:true, 
                                        popover_message:e[1],
                                        popover_title:e[0],
                                        popover_link:e[2]
                                    })}
                                    className="bsod_error"
                                    >
                                    <IonLabel>{e[0]}</IonLabel>
                                </IonItem>
                            ))
                        }
                        
                    </IonList>
                
                
                <IonPopover
                    event={this.state.popover_event}
                    isOpen={this.state.popover_open}
                    onDidDismiss={() => this.setState({ ...this.state, popover_open: false, popover_event: null })}
                >
                    <div className={style.popover_style}>
                        <h2>{this.state.popover_title}</h2>
                        <hr/>
                        <p>{this.state.popover_message}</p>
                        {
                            this.state.popover_link ?
                            <IonButton href={this.state.popover_link}>Check fix online</IonButton>
                            :
                            <></>
                        }
                    </div>
                </IonPopover>

                </IonContent>

                
                
            </IonPage>
            
        )
    }
    
}

export default Article_BSOD