const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://api-nba-v1.p.rapidapi.com/seasons',
  headers: {
    'X-RapidAPI-Key': 'dfc6a86024msh37670db087ef57dp10b792jsncb122f4aef9f',
    'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});