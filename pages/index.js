import Card from './components/Card';
import {Helmet} from "react-helmet";
import {useState, useEffect} from 'react';

export default function Home() {
  const [isLoading1, setIsLoading1] = useState(true);
  const [loadedPosts, setLoadedPosts] = useState([]);

  const [isLoading2, setIsLoading2] = useState(true);
  const [pageTitle1, setPageTitle1] = useState([]);
  const [pageTitle2, setPageTitle2] = useState([]);

  useEffect(() => {
    setIsLoading1(true);
    fetch ('https://mwi-challenge.com/api/posts')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const posts = [];

        for (const key in data) {
          const post = {
            key: key, 
            ...data[key]
          };
          posts.push(post);
        }

        setIsLoading1(false);
        setLoadedPosts(posts);
      });
  }, [ ]);

  useEffect(() => {
      setIsLoading2(true);
      fetch ('https://api.mwi.dev/content/home')
      .then((response) => {
          return response.json();
      })
      .then((json) => {
          let random = Math.floor(Math.random() * 3),
            title = json.data[random].title.split(' '),
              title1 = title[0];
              
          title.shift();

          setIsLoading2(false);
          setPageTitle1(title1);
          setPageTitle2(title.join(' '));
          // setPageContent(json.data[0].content);
      });
  }, [ ]);


  if (isLoading1 || isLoading2) {
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
                    loadedPosts.map((post) => (
                      <Card 
                        key={post.id} 
                        id={post.id} 
                        image={`/images/${post.image_url}`}
                        title={post.title}
                        paragraph={post.paragraph}
                      />
                    ))
                  }
                </div>
                <div className="mwi-copy-section">
                    <h1><span className="mwi-underline">{pageTitle1}</span> {pageTitle2}</h1>
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
