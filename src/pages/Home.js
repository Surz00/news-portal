import { useEffect, useState } from "react";
import { client, urlFor } from "../sanity";
import { Link } from "react-router-dom";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    client
      .fetch(`
        *[_type == "post"] | order(publishedAt desc){
          _id,
          title,
          slug,
          image,
          category->{ title }
        }
      `)
      .then(setPosts)
      .catch(console.error);
  }, []);

  return (
    <div className="container">
      <h1 style={{ marginBottom: "20px" }}>Latest News</h1>

      <div
        className="news-grid">
      {posts.map((post) => (
        <Link
          key={post._id}
          to={`/news/${post.slug.current}`}
          className="news-card"
        >
          {/* IMAGE + OVERLAY */}
          <div className="news-media">
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
      </div>

      {/* TITLE BELOW IMAGE */}
      <h3 className="news-title">{post.title}</h3>
    </Link>
  ))}
      </div>

    </div>
  );
}
