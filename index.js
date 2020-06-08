const express = require('express')
const port = 5000
const app = express()
const router = require('./config/routes')
const cors = require('cors')

// middleware
app.use(cors())
app.use(express.json()) 
app.use('/', router)
// 

app.listen(port, () => {
	const router = require('./config/routes')
	app.use('/', router)

	console.log('listening on ' + port)
})