import React, {Component} from 'react';
import axios from 'axios';
import s from './Contacts.module.css'

class ContactForm extends Component {

    state = {
        message: "Send your message"
    };

    handleSubmit(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        axios({
            method: "POST",
            url: "http://localhost:3002/send",
            data: {
                name: name,
                email: email,
                message: message
            }
        }).then((response) => {
            if (response.data.msg === 'success') {
                this.setState({
                    message: "Message Send"
                });
                this.resetForm()
            } else if (response.data.msg === 'fail') {
                this.setState({
                    message: "Message failed to send"
                });
            }
        })
    }

    resetForm() {
        document.getElementById('contact-form').reset();
    }

    render() {

        let classForLegend = this.state.message === "Send your message" ? s.legend : ""
        || this.state.message === "Message Send" ? s.legendSuccess : ""
        || this.state.message === "Message failed to send" ? s.legendError : "";

        return (

            <form id="contact-form"
                  onSubmit={this.handleSubmit.bind(this)}
                  method="POST"
                  className={s.formWrapper}>
                <legend className={classForLegend}>
                    {this.state.message}
                </legend>
                <input type="text"
                       className={s.formArea}
                       id="name"
                       placeholder={'Name'}/>
                <input type="email"
                       className={s.formArea}
                       id="email"
                       aria-describedby="emailHelp"
                       placeholder={'E-mail'}/>
                <textarea className={s.messageArea} id="message" placeholder={'Message'}/>
                <button type="submit" className={s.btnSubmit}>Send</button>
            </form>


        )
    }
}

export default ContactForm;