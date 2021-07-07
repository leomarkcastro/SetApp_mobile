import React from "react"
import {connect} from "react-redux"

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
    IonButton,
    IonInput,
    IonToast
} from '@ionic/react';

import style from "./BuildPage.module.css"

import { addCircleOutline, refreshCircleOutline } from 'ionicons/icons';
import PartCPU from "../../components/PartCPU/PartCPU";

class BuildPage extends React.Component {

    constructor(props){
        super(props)
        
        this.state = {
           show: true,
           toast_open: false,
        }

        this.setState = this.setState.bind(this)
    }

    savePC(e){
        console.log("save")
        this.setState({...this.state, toast_open : true})
        this.props.save_parts(this.props.parts, this.props.vars)
    }

    update_name(e){
        this.props.update_name(e.detail.value)
    }

    render(){
        return (
            
            <IonPage>

                <IonHeader>
                    <IonToolbar color="secondary">
                        <IonTitle>Build PC</IonTitle>
                        <IonButtons slot="start">
                            <IonBackButton defaultHref="/home/build"/>
                        </IonButtons>
                    </IonToolbar>
                </IonHeader>

                <IonContent>
                    <IonButton expand="full" onClick={()=>this.setState({...this.state, show: !this.state.show})}>Overview</IonButton>
                    {
                        this.state.show ?
                        <IonToolbar className={style.overview}>
                            <p>Build Name: 
                                <IonInput 
                                    value={this.props.vars.Name} 
                                    className="ion-text-center"
                                    onIonChange={this.update_name.bind(this)}
                                    />
                            </p>
                            <p>CPU Socket Type: {this.props.vars.CPUSocket || "_"}</p>
                            <p>Memory Type: {this.props.vars.MemorySocket || "_"}</p>
                            <p>Amount of RAM Sockets: {this.props.vars.RAMSockets || "_"}</p>
                            <p>CPU Tower Type: {this.props.vars.TowerType || "_"}</p>
                            <p>M.2 Slots: {this.props.vars["M.2 Slots"] || "_"}</p>
                            <p>SATA Slots: {this.props.vars["SATA Slots"] || "_"}</p>
                            <p>Total Cost: {this.props.vars.Cost || "_"}</p>
                        </IonToolbar> :
                        <></>

                    }
                    {
                        Object.keys(this.props.parts).map((e, i) => (
                            <IonCard key={`component_${i}`}>

                                <IonCardHeader className={style.cardHeader}>
                                    <IonCardTitle>{e}</IonCardTitle>
                                </IonCardHeader>
                                    {
                                        this.props.parts[e].element.map((pe, pei) => (
                                            pe ?
                                            <PartCPU  
                                                whatComp={this.props.parts[e].source} 
                                                target={e} 
                                                history={this.props.history} 
                                                key={`parts_${i}_${pei}`} 
                                                onClickAction={() => this.props.history.push(`/pick/${this.props.parts[e].source}/${e}/${pei}`)}
                                                raw_data={pe} 
                                                {...pe}
                                                />
                                            :
                                            <IonCard key={`noparts_${i}_${pei}`} button routerLink={`/pick/${this.props.parts[e].source}/${e}/${pei}`}>
                                                <IonCardContent>
                                                    Click Here to Select Component
                                                </IonCardContent>
                                            </IonCard>

                                        ))
                                    }
                                    
                            </IonCard>
                        ))
                    }

                    <IonToast
                        color="success"
                        position="top"
                        isOpen={this.state.toast_open}
                        onDidDismiss={() => this.setState.apply({...this.state, toast_open:false})}
                        message="Configuration Succesfully Saved."
                        duration={1000}
                    />
                    
                   
                </IonContent>

                
                
                <IonToolbar color="primary">
                    <IonButtons slot="start">
                        <IonButton onClick={this.savePC.bind(this)}>Save</IonButton>
                    </IonButtons>
                    <IonTitle slot="center">Build PC</IonTitle>
                    <IonButtons slot="end">
                        <IonButton>Clear</IonButton>
                    </IonButtons>
                </IonToolbar>
                

            </IonPage>
            
        )
    }
    
}


const mapStateToProps = state => {
    return {
        parts : state.parts.parts,
        vars: state.parts.variables,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        update_part : (what, component) => { 
            dispatch(
                {
                    type: 'UPDATE_PART', 
                    value: {
                        key: what,
                        content: component
                    }
                }
            ) 
        },
        update_name : (name) => { 
            dispatch(
                {
                    type: 'UPDATE_NAME', 
                    value: name
                }
            ) 
        },
        save_parts : (c, v) => {
            dispatch(
                {
                    type: 'ADD_PART', 
                    value: {
                        content: c,
                        variables: v
                    }
                }
            ) 
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BuildPage)