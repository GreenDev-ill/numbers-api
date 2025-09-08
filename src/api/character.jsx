import api from "./api"

export const getCharacters = async () => {
    const response = await api.get('/character')

    if(response.status !== 200){
        return[] // throw new Error('')
    }
    
    console.log('response do AXIOS', response)
    return response.data.results;
} //não exportar default pq vai ter várias funções // função assincrona que fica standby até que alguem a chame

export const getEpisodes = async () => {
    const response = await api.get('/episode')

    if(response.status !== 200){
        return[] // throw new Error('')
    }
    
    console.log('response do AXIOS', response)
    return response.data.results;
}