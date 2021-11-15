import Card from './components/Card';

const posts = [
  {
    id: 1,
    title: 'test 1',
    paragraph: 'desc 1',
    image_url: '/images/Talkie.png'
  },
  {
    id: 1,
    title: 'test 2',
    paragraph: 'desc 2',
    image_url: '/images/Rabbit.png'
  },
  {
    id: 1,
    title: 'test 3',
    paragraph: 'desc 3',
    image_url: '/images/Shield.png'
  }
]

export default function Home() {
  return (
    <div>
      <div>
        <div class="mwi-full-layout">
            <div class="mwi-full-content"mwi-full-width-content>
                <header>
                    <img src="images/Logo.png" class="mwi-logo" alt="Midwestern Interactive" />
                    <div class="mwi-navigation">
                        <a href="contact">contact</a>
                    </div>
                </header>
                <div class="mwi-card-layout">
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
                <div class="mwi-copy-section">
                    <h1><span class="mwi-underline">Heading</span> One</h1>
                        <p>
                            Remove the duplicates in 2 Javascript objects and output the list of distinct names in an unordered list when <a href="#mwi-bottom" onclick="mwi.generateCandidatesList();">this link</a> is clicked. 
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
