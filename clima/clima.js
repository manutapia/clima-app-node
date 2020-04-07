

const axios = require('axios');


let appid = 'f369635965b00ad16ced5da4da4b9f3b';

const getClima = async(lat, lng) => {
  
  const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${appid}&units=metric`)


  return resp.data.main.temp;
}

module.exports = {
  getClima
}