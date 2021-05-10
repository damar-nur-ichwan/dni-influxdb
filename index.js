const config = require('./config')
const client = config.client

let Insert = async(measurement,value)=>{
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
  
  let Select = async (param,measurement,column,where) => {
      if(Param === 'all'){param===''}
      where = `where ${where}` || ''
    try{
        const results = await client.query(
            `select ${param}(${column}) from ${measurement} ${where}`);
        return results[0]
    } catch(err){
        console.log('err while processing $(err)')
    }
  };

 let Delete = async (measurement,where) => {
      where = `where ${where}` || ''
    try{
        const results = await client.query(
            `select from ${measurement} ${where}`);
        return results[0]
    } catch(err){
        console.log('err while processing $(err)')
    }
  };
module.exports={Insert, Select, SelectLast, Delete}
