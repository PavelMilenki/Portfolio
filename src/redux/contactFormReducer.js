import {contactFormAPI} from "../api/api";

const MESSAGE_LOADING = 'MESSAGE/LOADING';
const MESSAGE_ERROR = 'MESSAGE/ERROR';

const signInInitialState = {
    loading: false,
    error: ''
};

export const ContactFormReducer = (state = signInInitialState, action) => {
    switch (action.type) {
        case MESSAGE_LOADING: {
            return {
                ...state,
                loading: action.loading
            }
        }
        case MESSAGE_ERROR: {
            return {
                ...state,
                loading: true,
                error: action.error
            }
        }
        default: {
            return state;
        }
    }
};

export const messageLoading = (loading) => ({
    type: MESSAGE_LOADING,
    loading,
});

export const messageError = (error) => ({
    type: MESSAGE_ERROR,
    error,
});

export const contactFormSend = (name, email, message) => async (dispatch) => {
    dispatch(messageLoading(true));
    try {
        const data = await contactFormAPI.contactForm(name, email, message);
        if (data.msg === 'fail') {
            dispatch(messageError("Message failed to send"));
        }
    } catch (e) {
        dispatch(e.msg);
    }
};




