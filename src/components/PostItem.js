import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";

  export default function PostItem( { post } ){
    
    const [featuredImage, setFeaturedImage] = useState('https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg');
    const [item, setItem] = useState(post);
    const [isLoading, setIsLoading] = useState(true);
    
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
    const date = new Date(post.date).toLocaleDateString("it-IT", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  useEffect(() => {
    // https://dev.to/femi_dev/how-to-use-axios-with-react-5fom
    axios
    .get(post?._links?.["wp:featuredmedia"]?.[0]?.href)
    .then(res => {
      // https://flaviocopes.com/react-useeffect-two-times/
      // console.log(res.data);
      if(typeof res.data.source_url === "string"){
        setFeaturedImage(res.data.source_url);
      }
    })
    .catch(error => console.log(error))
    .finally(() => setIsLoading(false))
  }, []);

  return(
    <div className="post-container">
      <div className="post-content" id={post.slug}>
        <div className="post-featured-image">
          {
            isLoading ? <p>Loading...</p> : <img src={featuredImage} />
          }
        </div>
        <div className="post-details">
          <div className="post-date">
            {date}
          </div>
          <h2 className="post-title">
            <Link to={`/post/${post.slug}`} state={ { post: { item } } }>
              <p dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
            </Link>
          </h2>
          <div
            className="post-excerpt"
            dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
          />
        </div>
      </div>
    </div>
  );
}