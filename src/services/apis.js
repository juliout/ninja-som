import axios from 'axios'

const ninjaApi = axios.create({
    baseURL: 'https://thingproxy.freeboard.io/fetch/http://econverse.digital/'
})
export default ninjaApi