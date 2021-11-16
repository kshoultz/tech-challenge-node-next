import ContactForm from './components/ContactForm';

export default function Home() {
    function contactFormHandler(contactFormData) {
        fetch('https://mwi-challenge.com'),
        {
            method: 'POST',
            body: JSON.stringify(contactFormData),
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'https://mwi-challenge.com'
            }
        }
    };

    return (
        <div className="mwi-split-layout">
            <div className="mwi-full-layout mwi-split-dark-container">
                <div className="mwi-full-content mwi-dark-content">
                    <header>
                        <img src="images/Logo.png" className="mwi-logo" alt="Midwestern Interactive" />
                        <div className="mwi-navigation" >
                            <a href="/" className="mwi-navigation-condensed">home</a>
                        </div>
                    </header>
                    <div className="mwi-copy-section">
                        <h1 className="mwi-conditional-space">
                            <span className="mwi-underline">Heading</span> One
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do dos eiusmod tempor incididunt ut labore et trace 
                            dolore magna aliqua.
                        </p>
                        <p>
                            Proin sagittis nisl rhoncus mattis rhoncus. at augue eget
                            arcu dictum varius duis at consectetur lorem. 
                        </p>
                    </div>
                </div>
            </div>
                
            <div className="mwi-split-light-container">
                <div className="mwi-light-content">
                    <header className="mwi-navigation-expanded">
                        <span></span>
                        <div className="mwi-navigation">
                            <a href="/">home</a>
                        </div>
                    </header>
                    <ContactForm onAddContact={contactFormHandler} />
                </div>
            </div>
        </div>
    )
}
