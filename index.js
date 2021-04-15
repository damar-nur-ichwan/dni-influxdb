const config = require('./config')
const client = config.client

let insert = async(measurement,value)=>{
    try {
      const rows = [{
          measurement,
          fields: {value},
        }];
      await client.writePoints(rows);
      console.log('Data stored successfully!');
    } catch (err) {
      console.log(`Error while processing ${err}`);
    }
  };
  
  let selectLast = async (measurement) => {
    try{
        let results = await client.query(
            `select last(*) from ${measurement}`);
        return results[0]
    } catch(err){
        console.log('err while processing $(err)')
    }
  };
  
  let selectAll = async (measurement) => {
    try{
        const results = await client.query(
            `select * from ${measurement}`);
        return results[0]
    } catch(err){
        console.log('err while processing $(err)')
    }
  };

  module.exports={insert, selectAll, selectLast}