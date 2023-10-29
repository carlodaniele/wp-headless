import { useEffect, useState } from "react";
import axios from "axios";
import PostItem from "./PostItem";

const url = 'https://developer.wordpress.org/news/wp-json/wp/v2/posts?_fields=id,slug,date,title,excerpt,content,link,_links&_embed=author,wp:featuredmedia';

export default function Blog() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // https://dev.to/femi_dev/how-to-use-axios-with-react-5fom
    axios
    .get(url)
    .then(res => {
      // https://flaviocopes.com/react-useeffect-two-times/
      console.log(res.data);
      setPosts(res.data);
    })
    .catch(error => console.log(error));
  }, []);

  return (
    <div className="blog">
      {posts.map(item => (
        <PostItem
            key={item.id}
            post={item}
        />
      ))}
    </div>
  );
}
