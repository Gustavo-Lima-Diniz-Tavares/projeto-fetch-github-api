import { basUrl } from '../variables.js'

async function getUser(userName) {
    const response = await fetch(`${basUrl}/${userName}`)
    return await response.json()
}

export{ getUser }