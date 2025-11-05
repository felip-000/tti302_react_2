//T7bwNCRAKRad5zIYpu0Q7RsVvPdwFVMNpteLwLHz52GxWF9pd763jrVT
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const axios = require('axios')
const app = express()
app.use(cors())
console.log(process.env.PEXELS_API_KEY)
app.get('/search', async (req, res) => {
    const pexelsClient = axios.create({
        baseURL: 'https://api.pexels.com/v1/',
        headers: {
            Authorization: process.env.PEXELS_API_KEY
        }
    })
    const result = await pexelsClient.get('/search', {
        params: {
            query: req.query.query
        }
    })
    console.log({photos: result.data.photos})
    res.json({photos: result.data.photos})
})
const port = 3000
app.listen(port, () => console.log(`Back OK. Porta ${port}.`))

//Cross Origin Resource Sharing
//PROTOCOLO://HOST:PORTA
//http://localhost:3000
//http://localhost:5173