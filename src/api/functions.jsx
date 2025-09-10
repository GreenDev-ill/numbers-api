import api from "./api"

export const getMath = async (number) => {
    if(number === ''){
        number = 0;
    }
    const response = await api.get('/'+number+'/math')

    if(response.status !== 200){
        return[] // throw new Error('')
    }
    
    console.log('response do AXIOS:', response.data)
    return response.data;
} //não exportar default pq vai ter várias funções // função assincrona que fica standby até que alguem a chame

export const getTrivia = async (number) => {
    if(number === ''){
        number = 0;
    }
    const response = await api.get('/'+number+'/trivia')

    if(response.status !== 200){
        return[] // throw new Error('')
    }
    
    console.log('response do AXIOS:', response.data)
    return response.data;
} 

export const getDateFact = async (number) => {
    if(number === ''){
        number = 0;
    }
    const response = await api.get('/'+number+'/date')

    if(response.status !== 200){
        return[] // throw new Error('')
    }
    
    console.log('response do AXIOS:', response.data)
    return response.data;
} 