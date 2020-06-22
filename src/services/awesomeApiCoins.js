//Make requisitions to this public api
//https://docs.awesomeapi.com.br/api-de-moedas

import axios from 'axios'

const baseUrl = 'https://economia.awesomeapi.com.br/json'

function GetAllCoins(){
  return axios.get(baseUrl + "/all")
}

function GetCoinHistory(coinID, quantity){
  return axios.get(baseUrl + `/${coinID}/${quantity}`)
}

function GetCoinHistoryDays(coinID, quantity){
  return axios.get(baseUrl + `/daily/${coinID}/${quantity}`)
}
export { GetAllCoins, GetCoinHistory, GetCoinHistoryDays }