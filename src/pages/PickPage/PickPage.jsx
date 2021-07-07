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
    IonSearchbar,
    IonButton
} from '@ionic/react';

import style from "./PickPage.module.css"

import { addCircleOutline, refreshCircleOutline } from 'ionicons/icons';

import getparts, { computer_parts_keys } from "../../utility/GetParts/getparts";
import PartCPU from "../../components/PartCPU/PartCPU";

function filterObject(obj, callback) {
    return Object.values(Object.fromEntries(Object.entries(obj).
        filter(([key, val]) => callback(val, key))));
}

class PickPage extends React.Component {

    constructor(props){
        super(props)
        
        this.state = {
           
        }

        this.partsList = getparts(this.props.match.params.whatComp)
        
        switch(this.props.match.params.whatComp){
            case 'CPUs':
                if (this.props.vars.CPUSocket) this.partsList = filterObject(this.partsList, e => e["Socket"] == this.props.vars.CPUSocket)
                break
            case 'Motherboards':
                if (this.props.vars.CPUSocket) this.partsList = filterObject(this.partsList, e => e["CPU Socket"] == this.props.vars.CPUSocket)
        }

    }

    clearSelect(){
        this.props.update_part(this.props.match.params.target, null, 0)
        this.props.history.goBack()
    }

    render(){
        return (
            
            <IonPage>

                <IonHeader>
                    <IonToolbar color="secondary">
                        <IonTitle>Pick Component</IonTitle>
                        <IonButtons slot="start">
                            <IonBackButton defaultHref="/build"/>
                        </IonButtons>
                    </IonToolbar>
                </IonHeader>

                <IonContent>

                <IonToolbar>
                    <IonSearchbar></IonSearchbar>
                </IonToolbar>

                <IonListHeader>Results</IonListHeader>
                <IonButton onClick={this.clearSelect.bind(this)}>Clear Filters</IonButton>

                {
                    this.partsList.map((e,i) => (
                        <PartCPU 
                            whatComp={this.props.match.params.whatComp} 
                            target={this.props.match.params.target}  
                            targetindex={this.props.match.params.targetindex}
                            onClickAction={this.props.history.goBack.bind(this)} 
                            key={`parts_${i}`} 
                            raw_data={e} {...e}/>
                    ))
                }
                    
                </IonContent>
                
            </IonPage>
            
        )
    }
    
}

const mapStateToProps = state => {
    return {
        parts : state.parts.parts,
        vars : state.parts.variables,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        update_part : (what, component, index) => { 
            dispatch(
                {
                    type: 'UPDATE_PART', 
                    value: {
                        key: what,
                        content: component,
                        index: index
                    }
                }
            ) 
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PickPage)