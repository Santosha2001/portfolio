import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from './ContactStyles.module.css';

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_hdks0g9', // Replace with your EmailJS Service ID
                'template_izp83yl', // Replace with your EmailJS Template ID
                form.current,
                'E0jzvu-KVdhBJczwZ'  // Replace with your EmailJS Public Key
            )
            .then(
                (result) => {
                    alert('Your message has been sent successfully!');
                },
                (error) => {
                    alert('Failed to send the message. Please try again.');
                }
            );

        e.target.reset(); // Clear the form after submission
    };

    return (
        <section id="contact" className={styles.container}>
            <h1 className="sectionTitle">Contact</h1>
            <form ref={form} onSubmit={sendEmail}>
                <div className="formGroup">
                    <label htmlFor="name" hidden>
                        Name
                    </label>
                    <input
                        type="text"
                        name="user_name"
                        id="name"
                        placeholder="Name"
                        required
                    />
                </div>
                <div className="formGroup">
                    <label htmlFor="email" hidden>
                        Email
                    </label>
                    <input
                        type="email"
                        name="user_email"
                        id="email"
                        placeholder="Email"
                        required
                    />
                </div>
                <div className="formGroup">
                    <label htmlFor="message" hidden>
                        Message
                    </label>
                    <textarea
                        name="message"
                        id="message"
                        placeholder="Message"
                        required
                    ></textarea>
                </div>
                <input className="hover btn" type="submit" value="Submit" />
            </form>
        </section>
    );
}

export default Contact;
