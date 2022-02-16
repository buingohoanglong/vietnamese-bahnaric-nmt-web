import axios from 'axios';

const baseUrl = 'http://localhost:5000/'

const instance = axios.create({
    baseURL: baseUrl,
    timeout: 500000,
});

const translateAPI = (text, model) => {
    return instance.post('/translate', {
        'text': text,
        'model': model
    })
}

export {
    translateAPI
};