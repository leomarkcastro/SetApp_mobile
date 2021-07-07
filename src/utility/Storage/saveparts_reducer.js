import { db_set, db_get ,db_check } from "./local_storage"

const saveSlot = "Parts"
const ver = "09062021"

const initialState = {
    ver: ver,
    uid : false,
    lastBackup: false,
    first_load: false,
    saves : [

    ],
}



async function load_profile(){
    
    let dat = {
        ...initialState
    }

    let check = await db_check(saveSlot)
    let loadSlot = null

    if (check) {
        loadSlot = await db_get(saveSlot)
        dat = {
            ...dat,
            ...loadSlot,
            ver: ver,
        }
    }

    db_set(saveSlot, dat)
        
    
    return dat

}

let _h = (async () => {
    let d = await load_profile()
    for (let key in initialState){
        initialState[key] = d[key]
    }
})()

function save_format(content, variables) {
    return (
        {
            parts : content,
            vars : variables,
        }
    )
    
}

const saveparts_reducer = (state = initialState, actions) => {

    let ret = null
    let key = null
    let content = null
    let index = null
    let variables = null

    // actions should come in the form of objects with { type , value , ... }
    switch (actions.type){

        case 'ADD_PART':

            ret = {
                ...state,
            }

            content = actions.value.content
            variables = actions.value.variables

            

            ret.saves.push(save_format(content, variables)) // should contain settings

            db_set(saveSlot, ret)
            return ret
        
        
        case 'LOAD_HOT_SAVES':
            
            return { 
                ...initialState,
                first_start_done : true
                }
    
        default:
            return state
    }

    
}

export default saveparts_reducer