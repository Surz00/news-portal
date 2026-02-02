import { useEffect, useState } from "react";
import { client, urlFor } from "../sanity";
import { Link } from "react-router-dom";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    client.fetch(`
      *[_type=="post"] | order(publishedAt desc){
        _id,
        title,
        slug,
        image,
        category->{title}
      }
    `).then(setPosts);
  }, []);

  return (
    <div className="container">
      <h2 className="section-title">ताज़ा खबरें</h2>

      <div className="news-grid">
        {posts.map(post => (
          <Link
            key={post._id}
            to={`/news/${post.slug.current}`}
            className="news-card"
          >
            {post.image && (
              <img
                src={urlFor(post.image).width(800).url()}
                alt={post.title}
              />
            )}

            {post.category && (
              <span className="news-category">
                {post.category.title}
              </span>
            )}

            <h3 className="news-title">{post.title}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}
