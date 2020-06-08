const Pool = require('pg').Pool
const {user, password} = require('../config.json')

const pool = new Pool({
	user,
	password,
	host: 'localhost',
	port: 5432,
	database: 'perntodo'
})

module.exports = pool