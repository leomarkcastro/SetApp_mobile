const saveSlot = "Parts"
const ver = "09062021"

const default_parts =  {
    CPU : {
        source: "CPUs",
        element: [null],
    },
    Motherboard : {
        source: "Motherboards",
        element: [null],
    },
    Memory : {
        source: "Memory",
        element: [],
    },
    Storage : {
        source: "Storage",
        element: [],
    },
    GPU : {
        source: "GPUs",
        element: [null],
    },
    Case : {
        source: "Cases",
        element: [null],
    },
    PSU : {
        source: "Power Supplies",
        element: [null],
    },
}

export const def_parts = {
    CPU : {
        source: "CPUs",
        element: [null],
    },
    Motherboard : {
        source: "Motherboards",
        element: [null],
    },
    Memory : {
        source: "Memory",
        element: [],
    },
    Storage : {
        source: "Storage",
        element: [],
    },
    GPU : {
        source: "GPUs",
        element: [null],
    },
    Case : {
        source: "Cases",
        element: [null],
    },
    PSU : {
        source: "Power Supplies",
        element: [null],
    },
}

const initialState = {
    ver: ver,
    uid : false,
    lastBackup: false,
    first_load: false,
    parts : {
        ...default_parts
    },
    variables: {
        CPUSocket: null,
        MemorySocket: null,
        RAMSockets: 0,
        TowerType: null,
        "M.2 Slots": 0,
        "SATA Slots": 0,
        Cost: null,
        Name: "New PC Build"
    },
}

const parts_reducer = (state = initialState, actions) => {

    let ret = null
    let key = null
    let content = null
    let index = null

    // actions should come in the form of objects with { type , value , ... }
    switch (actions.type){

        case 'UPDATE_PART':

            ret = {
                ...state,
            }

            key = actions.value.key
            content = actions.value.content
            index = actions.value.index

            console.log(content)

            switch(key){
                case 'CPU':
                    if(content) {
                        ret.variables.CPUSocket = content.Socket
                    }
                    else{
                        ret.variables.CPUSocket = null
                    }
                    break;
                case 'Motherboard':
                    if (content) {
                        ret.variables.CPUSocket = content["CPU Socket"]
                        ret.variables.MemorySocket = content["RAM Type"]
                        ret.variables.RAMSockets = content["RAM Slots"]
                        ret.variables["SATA Slots"]= content["SATA Slots Visible"]
                        ret.variables["M.2 Slots"] = content["M.2 Slots"]
                        ret.variables.TowerType = content["Size"]

                        if (ret.variables.RAMSockets != ret.parts["Memory"].element.length){
                            ret.parts["Memory"].element = []
                            for(let i=0; i < ret.variables.RAMSockets; i++){
                                ret.parts["Memory"].element.push(null)
                            }
                        }

                        if (ret.variables["SATA Slots"] != ret.parts["Storage"].element.length){
                            ret.parts["Storage"].element = []
                            for(let i=0; i < ret.variables["SATA Slots"]; i++){
                                ret.parts["Storage"].element.push(null)
                            }
                        }
                    }
                    else{
                        ret.variables.CPUSocket = null
                        ret.variables.MemorySocket = null
                        ret.variables.RAMSockets = 0
                        ret.variables["SATA Slots"]= 0
                        ret.variables["M.2 Slots"] = 0
                        ret.variables.TowerType = null
                    }
                    break;
            }

            ret.parts[key].element[index] = content // should contain settings
            
            console.log(ret)
            return ret
        
        case 'UPDATE_NAME':

            ret = {
                ...state,
            }

            ret.variables.Name = actions.value // should contain settings

            return ret
        
        case 'UPDATE_COUNT':

            ret = {
                ...state,
            }

            key = actions.value.key
            content = actions.value.content

            switch(key){
                case 'Memory':
                    if (state.variables.RAMSockets != ret.parts["Memory"].element.length){
                        ret.parts["Memory"].element = []
                        for(let i=0; i < state.variables.RAMSockets; i++){
                            ret.parts["Memory"].element.push(null)
                        }
                    }
                    break;
                case 'Storage':
                    if (state.variables["SATA Slots"] != ret.parts["Storage"].element.length){
                        ret.parts["Storage"].element = []
                        for(let i=0; i < state.variables.RAMSockets; i++){
                            ret.parts["Storage"].element.push(null)
                        }
                    }
            }

            return ret
        
        

        default:
            return state
    }

    
}

export default parts_reducer