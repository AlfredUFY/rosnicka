require('dotenv').config();

const axios = require('axios');

const url = 'https://generativelanguage.googleapis.com/v1beta2/models/text-bison-001:generateText?key='+process.env.API_KEY;
const payload = {
    prompt: { text: 'Write a story about a magic backpack.' },
};

axios({
    method: 'post',
    url,
    headers: { 'Content-Type': 'application/json' },
    data: payload,
})
    .then((response) => {
        console.log(response.data);
    })
    .catch((error) => {
        console.error('Error:', error.message);
    });