const Influx = require('influx');

const client = new Influx.InfluxDB({
  database: 'Trial',
  host: process.env.HOST,
  port: 8086,
  username: process.env.UNAME,
  password: process.env.PASSWORD,
})

module.exports = {client}