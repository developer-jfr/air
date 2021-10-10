import axios from 'axios'
const api = 'AIzaSyBoq4qT-mCxXcn5Mx77PAYVWXriJrVEY9A'

const key = '9109953d1fmsh96f6aadcac3a429p133e68jsn391d3446902e';
const nearby = '9109953d1fmsh96f6aadcac3a429p133e68jsn391d3446902e';
let auto = '9109953d1fmsh96f6aadcac3a429p133e68jsn391d3446902e';
export const mapAPI = {
    getAiports : () => {
        return axios.get(`https://maps.googleapis.com/maps/api/distancematrix/json?units=imperia&origins=smt&destinations=smt&key=AIzaSyBoq4qT-mCxXcn5Mx77PAYVWXriJrVEY9A`)
    },
    searchAirport:(search) => {
        return axios.get(`https://aerodatabox.p.rapidapi.com/airports/search/term`, {params: { q: search, limit: '10'}, headers: {'x-rapidapi-key': key, 'x-rapidapi-host': 'aerodatabox.p.rapidapi.com',}} )
    },
    autoCompleteAirport:(search) => {
        return axios.post('https://airportix.p.rapidapi.com/autocomplete/airport/', {}, {params :{query: search}, headers: {'x-rapidapi-key': auto}}).then(data => data.data)
    },
    nearbyAiports:(lan, lon) => {
        return axios.get(`https://nearby-airport.p.rapidapi.com/airport/nearby`, {  params: {longitude: lon, latitude: lan, limit: '3'},
        headers: {
          'x-rapidapi-host': 'nearby-airport.p.rapidapi.com',
          'x-rapidapi-key': '9109953d1fmsh96f6aadcac3a429p133e68jsn391d3446902e'
        }})
    }
}