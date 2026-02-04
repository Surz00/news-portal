import { useEffect, useState } from "react";
import { client, urlFor } from "../sanity";
import { Link } from "react-router-dom";
import "../styles/home.css";


/* ================= CATEGORY BLOCK ================= */
function CategoryBlock({ title, posts }) {
  if (!posts || posts.length === 0) return null;

  return (
    <section className="home-category">
      <h2 className="section-title">{title}</h2>

      <div className="news-grid">
        {posts.slice(0, 6).map(post => (
          <Link
            key={post._id}
            to={`/news/${post.slug.current}`}
            className="news-card"
          >
            {post.image && (
              <img
                src={urlFor(post.image).width(600).url()}
                alt={post.title}
              />
            )}
            <h3 className="news-title">{post.title}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
}

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
        _id,
        title,
        "slug": slug.current
      }
    `).then(setCategories);
  }, []);

  const latestNews = posts.slice(0, 6);

  return (
    <div className="container">

      {/* ===== LATEST NEWS ===== */}
      <section className="latest-section">
        <h2 className="section-title">ताज़ा खबरें</h2>

        <div className="news-grid">
          {latestNews.map(post => (
            <Link
              key={post._id}
              to={`/news/${post.slug.current}`}
              className="news-card"
            >
              {post.image && (
                <img
                  src={urlFor(post.image).width(600).url()}
                  alt={post.title}
                />
              )}
              <h3 className="news-title">{post.title}</h3>
            </Link>
          ))}
        </div>
      </section>

      {/* AD */}
      <div className="home-ad">Advertisement</div>

      {/* ===== CATEGORY SECTIONS ===== */}
      {categories.map(cat => {
        const catPosts = posts.filter(
          post => post.category?.slug === cat.slug
        );

        // 🔥 remove latest posts from category
        const filtered = catPosts.filter(
          p => !latestNews.some(l => l._id === p._id)
        );

        return (
          <div key={cat._id}>
            <CategoryBlock title={cat.title} posts={filtered} />
            <div className="home-ad">Advertisement</div>
          </div>
        );
      })}

    </div>
  );
}
