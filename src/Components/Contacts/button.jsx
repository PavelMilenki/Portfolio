import React from 'react';
import { AwesomeButtonSocial } from 'react-awesome-button';
import AwesomeButtonStyles from 'react-awesome-button/src/styles/styles.scss'

export function Button() {
    return (
        <AwesomeButtonSocial
            cssModule={AwesomeButtonStyles}
            type="facebook"
            url="https://caferati.me"
        >
            Button
        </AwesomeButtonSocial>
    );
}