import api from "./api"

var stringRequest = '';

export const getMath = async (number) => {
    if(number === ''){
        return 'Sem número, sem fato. Por favor, insira um número válido.';
    }else{
        number = '/'+(number);
    }
    const response = await api.get(number+'/math')

    if(response.status !== 200){
        return[] // throw new Error('')
    }
    
    console.log('response do AXIOS:', response.data)
    return response.data;

} //não exportar default pq vai ter várias funções // função assincrona que fica standby até que alguem a chame

export const getTrivia = async (number) => {
    if(number === ''){
        return 'Sem número, sem fato. Por favor, insira um número válido.';
    }else{
        number = '/'+(number);
    }
    const response = await api.get(number+'/trivia')

    if(response.status !== 200){
        return[] // throw new Error('')
    }
    
    console.log('response do AXIOS:', response.data)
    return response.data;
} 

export const getDateFact = async (inputDate) => {
    stringRequest = '';
    if(inputDate === ''){
        return 'Sem número, sem fato. Por favor, insira um número válido.';
    }else{
        stringRequest = '/'+inputDate.slice(5,10);
        stringRequest = stringRequest.replace('-','/');
    }
   // alert(stringRequest);
    const response = await api.get(stringRequest+'/date')

    if(response.status !== 200){
        return[] // throw new Error('')
    }
    
    console.log('response do AXIOS:', response.data)
    return response.data;
} 

export const getYearFact = async (inputDate) => {
    stringRequest = '';
    if(inputDate === ''){
        return 'Sem número, sem fato. Por favor, insira um número válido.';
    }else{
        stringRequest = '/'+inputDate.slice(0,4);
    }
    const response = await api.get(stringRequest+'/year')

    if(response.status !== 200){
        return[] // throw new Error('')
    }
    
    console.log('response do AXIOS:', response.data)
    return response.data;
} 