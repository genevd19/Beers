import Axios from 'axios'

const url = 'https://api.irail.be/'

//const key = '?key=afbac2827f8e61f8b0ec1422c74c8781'
const format = "?format=json"

export default {
        getStations(){
            return Axios.get(url+'stations'+format)
        .then(response => response.data)
        },
         getTrains(idgare){
            return Axios.get(url+"liveboard="+idgare+"&id"+idgare)
        .then(response => response.data)
    
    }
}
