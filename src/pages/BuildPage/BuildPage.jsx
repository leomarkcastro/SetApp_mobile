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

import {def_parts} from "../../utility/Storage/parts_reducer"

const colors = {
    CPU : "blue",
    Motherboard : "green",
    Memory : "red",
    Storage : "yellow",
    GPU : "cyan",
    Case : "magenta",
    PSU : "gray"
}

class BuildPage extends React.Component {

    constructor(props){
        super(props)
        
        this.state = {
           show: true,
           toast_open: false,
           total: 0,
           total_div: {},
           shit_fix: true,
        }

        this.slices = {}

        this.setState = this.setState.bind(this)

        
    }

    componentDidMount(){
        this.get_price()
    }
    
    savePC(e){
        console.log("save")
        this.setState({...this.state, toast_open : true})
        this.props.save_parts(this.props.parts, this.props.vars)
    }

    update_name(e){
        this.props.update_name(e.detail.value)
    }

    numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    get_price(){
        let total_price = 0
        let division_price = {}
        let cur_price = 0

        for(let part in this.props.parts){
            division_price[part] = 0
            for(let index in this.props.parts[part].element){
                if (this.props.parts[part].element[index]){
                    cur_price = Number(this.props.parts[part].element[index]["Price"])
                    total_price += cur_price
                    division_price[part] += cur_price
                }

            }
        }

        for(let part in division_price){
            division_price[part] = division_price[part]/total_price * 100
        }

        this.slices = division_price

        this.setState({...this.state, total:total_price, total_div:this.slices})

        return total_price
    }

    clearPCList(){

        for(let part in this.props.parts){
            for(let index in this.props.parts[part].element){
                this.props.update_part(part, null, index)

            }
        }

        this.setState({...this.state, shit_fix: !this.state.shit_fix})
    }

    render(){

        let cur_price = this.state.total

        console.log(this.state)

        return (
            
            <IonPage>

                {
                    this.state.shit_fix ? 
                    <></>
                    :
                    <></>
                }

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
                            <p>Total Cost: ${this.numberWithCommas(cur_price)} = P{this.numberWithCommas(cur_price*45)}</p>

                            <div className={style.distribution_chart}>
                                {
                                    Object.keys(this.state.total_div).map((e,i) => (
                                        <div style={{
                                            flex: this.slices[e],
                                            overflow : "hidden",
                                        }}>
                                            <div style={{
                                                backgroundColor : colors[e],
                                                height: "1rem",
                                            }} /> 
                                            {e}
                                        </div>
                                    ))
                                }
                            </div>
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
                        <IonButton onClick={this.clearPCList.bind(this)}>Clear</IonButton>
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
        update_part : (what, component, index) => { 
            dispatch(
                {
                    type: 'UPDATE_PART', 
                    value: {
                        key: what,
                        content: component,
                        index: index,
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