import ContactForm from './components/ContactForm';
import {Helmet} from "react-helmet";
import {useState, useEffect} from 'react';

export default function Contact() {
    const [isLoading, setIsLoading] = useState(true);
    const [pageTitle1, setPageTitle1] = useState([]);
    const [pageTitle2, setPageTitle2] = useState([]);
    const [pageContent, setPageContent] = useState([]);
    const [formTitle, setFormTitle] = useState([]);

    function contactFormHandler(contactFormData) {
        var xhr = new XMLHttpRequest();
            xhr.open("POST", "https://mwi-challenge.com/api/contacts", true);
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.send(JSON.stringify(contactFormData));
    };

    useEffect(() => {
        setIsLoading(true);
        fetch ('https://api.mwi.dev/content/contact')
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            let title = json.data[0].title.split(' '),
                title1 = title[0];
                
            title.shift();

            setIsLoading(false);
            setPageTitle1(title1);
            setPageTitle2(title.join(' '));
            setPageContent(json.data[0].content);
            setFormTitle(json.data[0].page.name);
        });
    }, [ ]);


  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
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
                            <span className="mwi-underline">{pageTitle1}</span> {pageTitle2}
                        </h1>
                        <p>{pageContent}</p>
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
                    <ContactForm onAddContact={contactFormHandler} formTitle={formTitle} />
                </div>
            </div>
        </div>
    )
}
