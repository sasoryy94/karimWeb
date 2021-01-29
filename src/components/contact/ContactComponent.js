import React from 'react'
import { SocialMedia } from './SocialMedia'

export const ContactComponent = () => {
    return (
        <div className="contact-container center">
            <h1>Contact</h1>
            <h4>If you want to say hello! Best way to reach me is on social media 👋</h4>
            <div className="socialMedia">
                <SocialMedia></SocialMedia>
            </div>
            <hr className="contact-hr"></hr>
            <div className="contact-improve ">
                <h5>Spot a bug on the site?</h5>
                <h5>Can the site be improved?</h5>
                <h5>Got a topic you want me to cover?</h5>
            </div>
            <hr className="contact-hr"></hr>
            <div>
                <p className="p-email" ><strong>For all business inquiries, please email me 🤝</strong></p>
            </div>
            <a className="contact-mail" href="mailto:karim.sasor@gmail.com">karim.sasor@gmail.com</a>
        </div>
    )
}
