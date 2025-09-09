import api from "./api"

export const getMath = async (number) => {
    const response = await api.get('/23/math')

    if(response.status !== 200){
        return[] // throw new Error('')
    }
    
    console.log('response do AXIOS:', response.data)
    return response.data;
} //não exportar default pq vai ter várias funções // função assincrona que fica standby até que alguem a chame
