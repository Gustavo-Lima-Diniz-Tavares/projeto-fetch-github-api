import { basUrl, repositoriesQuantity } from '../variables.js'

async function getRepositories(userName) {
    const response = await fetch(`${basUrl}/${userName}/repos?per_page=${repositoriesQuantity}`)
    return await response.json()
}

export { getRepositories }