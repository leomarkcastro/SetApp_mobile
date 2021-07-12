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
    IonBackdrop,
    IonSlides,
    IonSlide
} from '@ionic/react';

import { constructOutline, clipboardOutline, codeDownloadOutline, codeSlashOutline } from 'ionicons/icons';

// Import Swiper styles
import "swiper/swiper.min.css";

import { Swiper, SwiperSlide } from "swiper/react";


import style from "./Dashboard.module.css"



const logo = require("./logo.png")
const pcbuilder = require("./tab pcbuilder.png")
const bsod = require("./tab bsod.png")
const tips = require("./tab tips.png")


class Dashboard extends React.Component {

    constructor(props){
        super(props)
        
        this.state = {
           
        }

    }

    goto(loc){
        this.props.history.push(loc)
    }

    render(){
        return (
            
            <IonPage>
              

                <IonHeader>
                    <IonToolbar color="primary">
                        <IonTitle>Dashboard</IonTitle>
                    </IonToolbar>
                </IonHeader>

                <IonContent >
                    

                    {/*<div className={`${style.cssGrid} ${style.dash}`}>*/}

                    {/*
                    <Flickity
                        elementType={'div'} // default 'div'
                        options={flickityOptions} // takes flickity options {}
                        disableImagesLoaded={false} // default false
                        reloadOnUpdate // default false
                        >
                        
                            <img src={pcbuilder.default} width="100%" height="500pt" style={{padding:"5%"}}/>
                            <img src={tips.default} width="100%" height="500pt" style={{padding:"5%"}}/>
                            <img src={bsod.default} width="100%" height="500pt" style={{padding:"5%"}}/>
                    </Flickity>
                    */}

                        <IonSlides className={style.slide_bg} style={{height:"100%"}} pager options={{loop: true}}>

                            <IonSlide onClick={this.goto.bind(this,'/home/build')}><img src={pcbuilder.default} height="100%" style={{padding:"5%"}}/></IonSlide>

                            <IonSlide onClick={this.goto.bind(this,'/home/tutorials')}><img src={tips.default} height="100%" style={{padding:"5%"}}/></IonSlide>

                            <IonSlide onClick={this.goto.bind(this,'/article/sp/bsod')}><img src={bsod.default} width="100%" height="500pt" style={{padding:"5%"}}/></IonSlide>

                        </IonSlides>
 
                        

                    {/*</div>*/}
                    
                   
                </IonContent>
                
            </IonPage>
            
        )
    }
    
}

export default Dashboard