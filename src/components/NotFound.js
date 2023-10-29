import { Link } from "react-router-dom";

export default function NotFound(){

    return(
        <div className="single">
        <div className="post-container">
            <div className="post-content">
                <div className="top">
                    <Link to="/">Home Page</Link>
                </div>
                <h2 className="title">404 - Page Not Found</h2>
                <div className="content">
                    <p>Sorry, the page you are looking for does not exist.</p>
                </div>
                <div className="bottom">
                <Link to="/">Home Page</Link>
            </div>
            </div>
        </div>
        </div>
    );
}