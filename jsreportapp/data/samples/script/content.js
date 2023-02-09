// server side script fetching remote data and preparing report data source
const axios = require('axios');

async function beforeRender(req, res) {
    const resAuthors = await axios.get('http://localhost:8000/api/events')
    req.data.authors = [];
    req.data.authors.push(resAuthors.data.data);
    return req.data.authors;
}