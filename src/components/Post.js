import { Link, useLocation } from "react-router-dom";

export default function Post(){
  
  const location = useLocation();
  console.log(location);
  
  const post = location?.state?.post?.item;

  const date = new Date(post.date).toLocaleDateString("it-IT", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return(
    <div className="single">
      <div className="post-container">
        <div className="post-content" id={post.slug}>
            <div className="top">
              <Link to="/">Back</Link>
            </div>
            <h2 className="title">
              <p dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
            </h2>
            <div className="date">
              {date}
            </div>
            <div
              className="content"
              dangerouslySetInnerHTML={{ __html: post.content.rendered }}
            />
            <div className="bottom">
              <Link to="/">Back</Link>
          </div>
        </div>
      </div>
    </div>
  );
}