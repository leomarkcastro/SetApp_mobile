const parts = require("./parts.json")

export const computer_parts = parts

export const computer_parts_keys = Object.keys(parts)

function getparts(key="CPUs"){

    return parts[key]

}

export default getparts