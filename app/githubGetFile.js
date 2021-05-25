const axios = require('axios');
const url = 'https://raw.githubusercontent.com/Narayanbhat166/git_contest/master/server.py'

axios.get(url)
    .then((response) => console.log(response))