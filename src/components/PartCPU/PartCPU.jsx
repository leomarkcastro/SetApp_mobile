import React from "react"

import { connect } from "react-redux"

import { 
    IonIcon,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonCardSubtitle,
 } from '@ionic/react';
import {  desktopOutline,  } from 'ionicons/icons';

import style from "./PartCPU.module.css"

const templateStyle = {
    "CPUs" : {
        "Cores" : {
            text: "#dat#",
            data: "Cores",
        },
        "Socket" : {
            text: "#dat#",
            data: "Socket",
        },
        "Price" : {
            text: "$#dat#",
            data: "Price",
        },
        "Series" : {
            text: "#dat#",
            data: "Series",
        },
        "Frequency" : {
            text: "#dat# Mhz",
            data: "Frequency",
        },
        "Memory Channels" : {
            text: "#dat#",
            data: "Max Memory Channels",
        },
        "Voltage" : {
            text: "#dat# V",
            data: "Voltage",
        },
        "Wattage" : {
            text: "#dat# W",
            data: "Wattage",
        },
    },
    "Motherboards": {
        "CPU Socket" : {
            text: "#dat#",
            data: "CPU Socket",
        },
        "Price" : {
            text: "$#dat#",
            data: "Price",
        },
        "Chipset" : {
            text: "#dat#",
            data: "Chipset",
        },
        "RAM Type" : {
            text: "#dat#",
            data: "RAM Type",
        },
        "RAM Slots" : {
            text: "#dat#",
            data: "RAM Slots",
        },
        "Dual GPU Max Slot" : {
            text: "#dat#",
            data: "Dual GPU Max Slot Size",
        },
        "SATA Slots Visible" : {
            text: "#dat#",
            data: "SATA Slots Visible",
        },
        "M.2 Slots" : {
            text: "#dat#",
            data: "M.2 Slots",
        },
        "Size" : {
            text: "#dat#",
            data: "Size",
        },

    },
    "Memory" : {
        "Memory Size" : {
            text: "#dat#GB",
            data: "Size (GB)",
        },
        "Price" : {
            text: "$#dat#",
            data: "Price",
        },
        "Price per GB" : {
            text: "$#dat#/GB",
            data: "Price per GB",
        },
        "RAM Type" : {
            text: "#dat#",
            data: "RAM Type",
        },
        "Voltage" : {
            text: "#dat# V",
            data: "Voltage",
        },
        "Frequency" : {
            text: "#dat# Mhz",
            data: "Frequency",
        },
        "Base Model" : {
            text: "#dat#",
            data: "Part Name (Base)",
        },
    },
    "Storage" : {
        "Type" : {
            text: "#dat#",
            data: "Type",
        },
        "Size (GB)" : {
            text: "#dat# GB",
            data: "Size (GB)",
        },
        "Price" : {
            text: "$#dat#",
            data: "Price",
        },
        "Transfer Speed" : {
            text: "#dat#MB/s",
            data: "Transfer Speed (MB/s)",
        },
    },
    "GPUs" : {
        "Manufacturer" : {
            text: "#dat#",
            data: "Chipset Brand",
        },
        "Core Frequency" : {
            text: "#dat# Mhz",
            data: "Base Core Freq",
        },
        "Memory Frequency" : {
            text: "#dat# Mhz",
            data: "Base Mem Freq",
        },
        "Price" : {
            text: "$#dat#",
            data: "Price",
        },
        "Chipset Series" : {
            text: "#dat#",
            data: "Chipset Series",
        },
        "VRAM" : {
            text: "#dat#",
            data: "VRAM (GB)",
        },
        "Length" : {
            text: "#dat# cm",
            data: "Length",
        },
        "Wattage" : {
            text: "#dat#",
            data: "Wattage",
        },
        "Multi-GPU" : {
            text: "#dat#",
            data: "Multi-GPU",
        },
        "Slot Size" : {
            text: "#dat#",
            data: "Slot Size",
        },
        "Power Connectors" : {
            text: "#dat#",
            data: "Power Connectors",
        },
        "Single GPU Graphics Score" : {
            text: "#dat#",
            data: "Single GPU Graphics Score",
        },
        "Double GPU Graphics Score" : {
            text: "#dat#",
            data: "Double GPU Graphics Score",
        },
        
    },
    "Cases" : {
        "Size" : {
            text: "#dat#",
            data: "Size",
        },
        "Price" : {
            text: "$#dat#",
            data: "Price",
        },
        "Mini-ITX" : {
            text: "#dat#",
            data: "Mini-ITX",
        },
        "Micro-ATX" : {
            text: "#dat#",
            data: "Micro-ATX",
        },
        "S-ATX" : {
            text: "#dat#",
            data: "S-ATX",
        },
        "E-ATX" : {
            text: "#dat#",
            data: "E-ATX",
        },
        "XL-ATX" : {
            text: "#dat#",
            data: "XL-ATX",
        },
        "PSU ATX" : {
            text: "#dat#",
            data: "PSU ATX",
        },
        "PSU SFX" : {
            text: "#dat#",
            data: "PSU SFX",
        },
        "Max 120mm Radiators" : {
            text: "#dat#",
            data: "Max 120mm Radiators",
        },
        "Max 140mm Radiators" : {
            text: "#dat#",
            data: "Max 140mm Radiators",
        },
        "Max PSU length" : {
            text: "#dat#",
            data: "Max PSU length",
        },
        "Max GPU length" : {
            text: "#dat#",
            data: "Max GPU length",
        },
        "Max CPU Fan Height" : {
            text: "#dat#",
            data: "Max CPU Fan Height",
        },
        "Inherent Cooling" : {
            text: "#dat#",
            data: "Inherent Cooling",
        }

    },
    "Power Supplies" : {
        "Wattage" : {
            text: "#dat# W",
            data: "Wattage",
        },
        "Price" : {
            text: "$#dat#",
            data: "Price",
        },
        "Wattage" : {
            text: "#dat# W",
            data: "Wattage",
        },
        "Length" : {
            text: "#dat#cm",
            data: "Length",
        },
        "Type" : {
            text: "#dat#",
            data: "Type",
        },
        "Size" : {
            text: "#dat#",
            data: "Size",
        },
    },
}

class PartCPU extends React.Component {

    constructor(props){
        super(props)
        
        this.template = templateStyle[this.props.whatComp]
        //this.template = templateStyle["CPUs"]
    }

    onSelect(e){

        this.props.update_part(this.props.target, this.props.raw_data, this.props.targetindex)

        this.props.onClickAction()
    }

    render(){
        return (
            <IonCard button className={`${style.cardItem} ${this.props.incClass}`} color="light" onClick={this.onSelect.bind(this)}>
                <div className={style.cardContent}>

                    <div className={style.cardSprite}
                        style={{
                            background: `url(${this.props["Image"]})`,
                            backgroundPosition: "center",
                            backgroundSize: "contain",
                            backgroundRepeat: "no-repeat",
                        }}
                    ></div>
                    
                    <div className={style.cardInfo}>
                        <IonCardHeader>
                            <IonCardTitle className="comps_title">{this.props["Part Name"]}</IonCardTitle>
                            <IonCardSubtitle>{this.props["Chipset Brand"] ? this.props["Chipset Brand"] : this.props["Manufacturer"]}</IonCardSubtitle>
                        </IonCardHeader>
                        <IonCardContent>
                            <div className={style.cardGrid}>
                                {
                                    Object.keys(this.template).map((e,i) => (
                                        <p key={`part_detail_${i}`}><sub>{e}</sub><br/> {this.template[e].text.replace("#dat#", this.props[this.template[e].data]).replace("undefined", "0")}</p>
                                    ))
                                }
                            </div>
                        </IonCardContent>
                    </div>
                    
                </div>
            </IonCard>
        )
    }
    
}

const mapStateToProps = state => {
    return {
        parts : state.parts.parts,
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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PartCPU)