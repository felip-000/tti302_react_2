import axios from 'axios'
export default axios.create({
    baseURL: 'https://api.pexels.com/v1/',
    headers: {
        Authorization: 'T7bwNCRAKRad5zIYpu0Q7RsVvPdwFVMNpteLwLHz52GxWF9pd763jrVT'
    }
})