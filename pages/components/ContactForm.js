import { useRef } from 'react';

function ContactForm(props) {

    const firstNameInputRef = useRef(),
        lastNameInputRef = useRef(),
        titleInputRef = useRef(),
        emailInputRef = useRef(),
        messageInputRef = useRef();

        function submitHandler(event) {
            event.preventDefault();
            const enteredFirstName = firstNameInputRef.current.value,
                enteredLastName = lastNameInputRef.current.value,
                enteredTitle = titleInputRef.current.value,
                enteredEmail = emailInputRef.current.value,
                enteredMessage = messageInputRef.current.value;

            const contactFormData = {
                'first_name': enteredFirstName,
                'last_name': enteredLastName,
                'title': enteredTitle,
                'email': enteredEmail,
                'message': enteredMessage
            };
            
            props.onAddContact(contactFormData);
        }
    return (
        <form className="mwi-form" onSubmit={submitHandler} >
            <h2>Heading Two</h2>
            <div className="mwi-fields-container">
                <input placeholder="First Name" name="first_name" ref={firstNameInputRef} />
                <input placeholder="Last Name" name="last_name" ref={lastNameInputRef} />
                <input placeholder="Title" name="title" ref={titleInputRef} />
                <input placeholder="Email" name="email" required="required" ref={emailInputRef} />
                <textarea placeholder="Message" name="message" rows="4" ref={messageInputRef}></textarea>
            </div>
            <div className="mwi-toolbar">
                <input type="submit" value="submit"  />
            </div>
        </form>
    );
}

export default ContactForm;