import React from 'react'

function ContactDetails({ phone, email }) {
    return (
        <>
            <div className="contact-details">
                <p><i className="fas fa-phone-alt"></i> {phone}</p>
                <p><i className="fas fa-envelope"></i> {email}</p>
            </div>
        </>
    )
}

export default ContactDetails
