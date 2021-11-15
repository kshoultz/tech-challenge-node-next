import ContactForm from './components/ContactForm';

export default function Home() {
  return (
    <div class="mwi-split-layout">
        <div class="mwi-full-layout mwi-split-dark-container">
            <div class="mwi-full-content mwi-dark-content">
                <header>
                    <img src="images/Logo.png" class="mwi-logo" alt="Midwestern Interactive" />
                    <div class="mwi-navigation" >
                        <a href="/" class="mwi-navigation-condensed">home</a>
                    </div>
                </header>
                <div class="mwi-copy-section">
                    <h1 class="mwi-conditional-space">
                        <span class="mwi-underline">Heading</span> One
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
            
        <div class="mwi-split-light-container">
            <div class="mwi-light-content">
                <header class="mwi-navigation-expanded">
                    <span></span>
                    <div class="mwi-navigation">
                        <a href="/">home</a>
                    </div>
                </header>
                <ContactForm />
            </div>
        </div>
    </div>
  )
}
