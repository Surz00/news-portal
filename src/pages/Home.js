import { useEffect, useState } from "react";
import { client, urlFor } from "../sanity";
import { Link } from "react-router-dom";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    client
      .fetch(`
        *[_type=="post"] | order(publishedAt desc){
          _id,
          title,
          slug,
          image
        }
      `)
      .then(setPosts)
      .catch(console.error);
  }, []);

  return (
    <div className="container">
      <h2 className="section-title">ताज़ा खबरें</h2>

      <div className="latest-grid">
        {posts.map((post) => (
          <Link
            key={post._id}
            to={`/news/${post.slug.current}`}
            className="latest-card"
          >
            {post.image && (
              <img
                src={urlFor(post.image).width(600).url()}
                alt={post.title}
              />
            )}
            <h3>{post.title}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}
