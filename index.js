const Influx = require('influx');

module.exports = class InfluxDB {
  constructor(database,host,port,username,password){
    this.client = new Influx.InfluxDB({
      database,
      host,
      port: port || 8086,
      username: username || process.env.UNAME,
      password: password || process.env.PASSWORD,
    })
  }

  Insert = async(measurement,value)=>{
    try {
      const rows = [{
        measurement,
        fields: {value},
      }];
      await this.client.writePoints(rows);
      console.log('Data stored successfully!');
    } catch (err) {
      console.log(`Error while processing ${err}`);
    }
  };

  Select = async (param,measurement,column,where) => {
    if(Param === 'all'){param===''}
    where = `where ${where}` || ''
    try{
      const results = await this.client.query(
        `select ${param}(${column}) from ${measurement} ${where}`);
        return results[0]
      } catch(err){
        console.log('err while processing $(err)')
      }
    }
    
    Delete = async (measurement,where) => {
      where = `where ${where}` || ''
      try{
        const results = await this.client.query(
          `select from ${measurement} ${where}`);
          return results[0]
        } catch(err){
          console.log('err while processing $(err)')
        }
      }
    }

