function ContactForm() {
    return (
        <form class="mwi-form" action="https://api.mwi.dev/contact" method="POST">
            <h2>Heading Two</h2>
            <div class="mwi-fields-container">
                <input placeholder="First Name" name="first_name" />
                <input placeholder="Last Name" name="last_name" />
                <input placeholder="Title" name="title" />
                <input placeholder="Email" name="email" required="required" />
                <textarea placeholder="Message" name="message" rows="4"></textarea>
            </div>
            <div class="mwi-toolbar">
                <input type="submit" value="submit" />
            </div>
        </form>
    );
}

export default ContactForm;