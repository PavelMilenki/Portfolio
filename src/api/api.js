import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://contact-form-node.herokuapp.com/'

});

export const contactFormAPI = {
    contactForm: async (name, email, message) => {
        const response = await instance.post('/send',
            {name, email, message});
        return response.data;
    },
};