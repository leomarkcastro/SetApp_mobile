import React from "react"

import { connect } from 'react-redux'

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
    IonToast
} from '@ionic/react';

import style from "./BuildPC.module.css"

import { addCircleOutline, refreshCircleOutline } from 'ionicons/icons';

class BuildPC extends React.Component {

    constructor(props){
        super(props)
        
        this.state = {
           flip: false,
           toast_open: false,
        }

        this.setState = this.setState.bind(this)

    }

    componentDidMount(){

        this.init_settings()

        
        
    }

    
    init_settings(){
        setTimeout(()=>{
                this.props.load_hot_save()
                this.setState({
                    ...this.state,
                    active : true
                })
            }, 250)
    }

    load_build(dataset){

        for(let part in dataset.parts){
            for(let index in dataset.parts[part].element){
                this.props.update_part(part, dataset.parts[part].element[index], index)

            }
        }

        this.props.history.push('/build')
    }

    remove_item(index){
        this.props.remove_part(index)
        this.setState({...this.state, flip:!this.state.flip, toast_open: true})
    }

    render(){
        return (
            
            <IonPage>

                <IonHeader>
                    <IonToolbar color="secondary">
                        <IonTitle>Build PC</IonTitle>
                    </IonToolbar>
                </IonHeader>

                <IonContent>

                    {this.state.flip ? <></> : <></>}

                    <IonCard className={`${style.mainCard} ${style.createPC}`} button routerLink="/build">
                        <div className={style.selectCard}>
                            <IonIcon icon={addCircleOutline} className={style.titleIcon}/>
                            <p className={style.titleCard}>Create New PC</p>
                        </div>
                    </IonCard>

                    <IonListHeader>
                        Previously Built PCs
                    </IonListHeader>

                    {
                        this.props.save.map((e,i) => {
                            return (
                                <IonCard key={`load_${i}`} color="tertiary">
                                    <IonCardHeader>
                                        <IonCardTitle>{e.vars.Name}</IonCardTitle>
                                    </IonCardHeader>
                                    <IonCardContent>
                                        <div className={style.cardGrid}>
                                            <p><sub>Processor</sub> <br/>{e.parts.CPU.element[0] ? e.parts.CPU.element[0]["Part Name"] : ""}</p>
                                            <p><sub>GPU</sub> <br/>{e.parts.GPU.element[0] ? e.parts.GPU.element[0]["Part Name"] : ""}</p>
                                            <p><sub>RAM</sub> <br/>{e.parts.Memory.element.length}</p>
                                            <p><sub>Storage</sub> <br/>{e.parts.Storage.element.length}</p>
                                        </div>
                                        <div className="ion-text-right">
                                            <IonButton color="success" onClick={this.load_build.bind(this, e)}>Open</IonButton>
                                            <IonButton color="warning" onClick={this.remove_item.bind(this, i)}>Delete</IonButton>
                                        </div>
                                        
                                    </IonCardContent>
                                </IonCard>
                            )
                        })
                    }

                    <IonToast
                        color="danger"
                        position="bottom"
                        isOpen={this.state.toast_open}
                        onDidDismiss={() => this.setState.apply({...this.state, toast_open:false})}
                        message="PC Template Deleted."
                        duration={1500}
                    />
                    
                   
                </IonContent>
                
            </IonPage>
            
        )
    }
    
}

const mapStateToProps = state => {
    return {
        save : state.save.saves,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        remove_part : (index) => { 
            dispatch(
                {
                    type: 'REMOVE_PART', 
                    value: index
                }
            ) 
        },
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
        load_hot_save : () => { 
            dispatch(
                {
                    type: 'LOAD_HOT_SAVES', 
                }
            ) 
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BuildPC)
