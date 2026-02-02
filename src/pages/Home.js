import { useEffect, useState } from "react";
import { client, urlFor } from "../sanity";
import { Link } from "react-router-dom";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    client.fetch(`
      *[_type=="post"] | order(publishedAt desc){
        _id,
        title,
        slug,
        image,
        category->{title, "slug": slug.current}
      }
    `).then(setPosts);

    client.fetch(`
      *[_type=="category"]{
        title,
        "slug": slug.current
      }
    `).then(setCategories);
  }, []);

  const latestNews = posts.slice(0, 6);
  const latestIds = new Set(latestNews.map(p => p._id));

  return (
    <div className="container">

      {/* 🔥 LATEST NEWS */}
      <h2 className="section-title">ताज़ा खबरें</h2>

      <div className="news-list">
        {latestNews.map(post => (
          <Link
            key={post._id}
            to={`/news/${post.slug.current}`}
            className="news-card"
          >
            {post.image && (
              <img src={urlFor(post.image).width(600).url()} alt={post.title} />
            )}
            <h3>{post.title}</h3>
          </Link>
        ))}
      </div>

      <div className="ad-banner">Advertisement</div>

      {/* 🔥 CATEGORY SECTIONS */}
      {categories.map(cat => {
        const catPosts = posts.filter(
          p => p.category?.slug === cat.slug && !latestIds.has(p._id)
        );

        if (catPosts.length === 0) return null;

        return (
          <div key={cat.slug} className="category-block">
            <h2 className="section-title">{cat.title}</h2>

            <div className="news-list">
              {catPosts.slice(0, 3).map(post => (
                <Link
                  key={post._id}
                  to={`/news/${post.slug.current}`}
                  className="news-card"
                >
                  {post.image && (
                    <img src={urlFor(post.image).width(600).url()} alt={post.title} />
                  )}
                  <h3>{post.title}</h3>
                </Link>
              ))}
            </div>

            <div className="ad-banner">Advertisement</div>
          </div>
        );
      })}
    </div>
  );
}
