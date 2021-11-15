import Card from './components/Card';
import {Helmet} from "react-helmet";
import {useState, useEffect} from 'react';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedPosts, setLoadedPosts] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch (
        'https://tech-challenge-node-next-eglt2.ondigitalocean.app//posts'
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const posts = [];

        for (const key in data) {
          console.log(key);
          posts.push(key);
        }

        setIsLoading(false);
        setLoadedPosts(posts);
      });
  }, [ ]);


  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  };

  function handleMWIClick(e){
    mwi.generateCandidatesList(); // TODO: This should be done in a React.js way.
  }

  return (
    <div>
      <Helmet>
        <script src="/js/mwi.js" type="text/javascript" />
      </Helmet>
      
      <div>
        <div className="mwi-full-layout">
            <div className="mwi-full-content"mwi-full-width-content>
                <header>
                    <img src="images/Logo.png" className="mwi-logo" alt="Midwestern Interactive" />
                    <div className="mwi-navigation">
                        <a href="contact">contact</a>
                    </div>
                </header>
                <div className="mwi-card-layout">
                  {
                    posts.map((post) => (
                      <Card 
                        key={post.id} 
                        id={post.id} 
                        image={post.image_url}
                        title={post.title}
                        paragraph={post.paragraph}
                      />
                    ))
                  }
                </div>
                <div className="mwi-copy-section">
                    <h1><span className="mwi-underline">Heading</span> One</h1>
                        <p>
                            Remove the duplicates in 2 Javascript objects and output the list of distinct names in an unordered list when <a href="#mwi-bottom" onClick={handleMWIClick}>this link</a> is clicked. 
                        </p>
                        <p>
                            If the operation completed already, notify the user that this has already been done.
                        </p>
                    </div>
                    <ul id="mwi-list"></ul>
                </div>
            </div>
        </div>
        <a name="mwi-bottom"></a>
    </div>
  )
}
