const express = require('express')
const { createProxyMiddleware } = require('http-proxy-middleware')
const cors = require('cors')
const app = express()

const API_SERVICE_URL = 'https://c09d77b640e64327.mokky.dev';

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0
app.use(cors({
    exposedHeaders: '*'
}))

app.use('/', createProxyMiddleware({
    terget: API_SERVICE_URL,
    changeOrigin: true,
    ws: true,
    logLevel: 'debug'
}))

app.listen(PORT, HOST, () => {
    console.log(`Sterting Proxy Server at ${HOST}:${PORT} `)
})