import axios from 'axios';

// const baseUrl = 'http://localhost:5000/'
const baseUrl = 'https://vi-ba-nmt-api-proxy.herokuapp.com';

const instance = axios.create({
    baseURL: baseUrl,
    timeout: 500000,
});

const textTranslateAPI = (text, model) => {
    return instance.post('/translate/text', {
        'text': text,
        'model': model
    })
}

const fileTranslateAPI = (file, model) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('model', model);
    return instance.post('/translate/file', formData, {
        headers: { "Content-Type": "multipart/form-data" }
    })
}

export {
    textTranslateAPI,
    fileTranslateAPI
};