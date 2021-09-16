import axios from 'axios'

const ninjaApi = axios.create({
    baseURL: 'https://cors-anywhere.herokuapp.com/http://econverse.digital/'
})
export default ninjaApi