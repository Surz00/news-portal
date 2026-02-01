import { Link } from "react-router-dom";
import { urlFor } from "../sanity";

export default function NewsCard({ post }) {
  return (
    <Link to={`/news/${post.slug.current}`} className="news-card">
      <div className="news-media">
        {post.image && (
          <img
            src={urlFor(post.image).width(600).url()}
            alt={post.title}
          />
        )}

        {post.category && (
          <span className="news-category">
            {post.category.title}
          </span>
        )}
      </div>

      <h3 className="news-title">{post.title}</h3>
    </Link>
  );
}
