import React from 'react';

import fb_icon from './../assets/facebook_icon.png';
import wa_icon from './../assets/whatsapp_icon.png';
import ig_icon from './../assets/instagram_icon.png';
import email_icon from './../assets/email_icon.png';

const ContactInfo = () => {
    return (
        <div>

            <a href="" target="_blank" className="contactGroup">

                <img src={wa_icon} className="contactIcon" alt="Ícone WhatsApp"/>

                <div className="paragraph contactText">
                    WhatsApp
                </div>

            </a>

            <br/>
            <br/>

            <a href="https://www.instagram.com/joycaferp/" target="_blank" rel="noreferrer" className="contactGroup">

                <img src={ig_icon} className="contactIcon" alt="Ícone Instagram"/>

                <div className="paragraph contactText">
                    Instagram
                </div>

            </a>

            <br/>
            <br/>

            <a href="https://www.facebook.com/joycaferp" target="_blank" rel="noreferrer" className="contactGroup">

                <img src={fb_icon} className="contactIcon" alt="Ícone Facebook"/>

                <div className="paragraph contactText">
                    Facebook
                </div>

            </a>

            <br/>
            <br/>

            <a href="mailto:joycaferp@gmail.com" target="_blank" rel="noreferrer" className="contactGroup">

                <img src={email_icon} className="contactIcon" alt="Ícone Email"/>

                <div className="paragraph contactText">
                    Email
                </div>

            </a>

        </div>
    )
}

export default ContactInfo;