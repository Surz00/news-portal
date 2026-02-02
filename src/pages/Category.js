import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { client, urlFor } from "../sanity";
import { Link } from "react-router-dom";

export default function Category() {
  const { slug } = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    client.fetch(`
      *[_type=="post" && category->slug.current==$slug] | order(publishedAt desc){
        _id,title,slug,image
      }
    `, { slug }).then(setPosts);
  }, [slug]);

  return (
    <div className="container">
      <h2 className="section-title">{slug} News</h2>

      {posts.length === 0 && <p>No news found</p>}

      <div className="news-grid">
        {posts.map(post => (
          <Link key={post._id} to={`/news/${post.slug.current}`} className="news-card">
            {post.image && (
              <img src={urlFor(post.image).width(600).url()} alt={post.title} />
            )}
            <h3>{post.title}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}
