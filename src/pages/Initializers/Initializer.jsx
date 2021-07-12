import React from "react"

import { IonPage, IonContent, IonHeader, IonIcon, IonSpinner } from '@ionic/react';
import { bookOutline, qrCode,  } from 'ionicons/icons';

import style from "./Initializer.module.css"

import Logo from "../../components/Logo/Logo";

const logo_image = require("../../resources/title.png")

class Initializer extends React.Component {

    constructor(props){
        super(props)
        
        this.state = {
            user : null,
        }

    }

    componentDidMount(){
        setTimeout(()=>{
            this.props.history.replace("/home")
        }, 2000)
    }

    render(){
        console.log(logo_image)
        return (
            
            <IonPage>
            
                <IonContent>

                    <div
                        style={
                            {
                                background: `url(${logo_image.default})`,
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                                backgroundRepeat: "repeat",
                                height: "100vh",
                                width: "100vw",
                            }
                        }
                    ></div>
                    {/*
                    <div className={style.logo}>
                        <Logo/>
                        
                    </div>

                    <div className={style.notice}>
                        <sub><IonSpinner name="dots" /></sub>
                    </div>
                    */}

                </IonContent>
                
            </IonPage>
            
        )
    }
    
}

export default Initializer