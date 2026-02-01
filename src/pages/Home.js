import { useEffect, useState } from "react";
import { client, urlFor } from "../sanity";
import { Link } from "react-router-dom";

/* ===== CATEGORY SECTION ===== */
function CategorySection({ category, posts }) {
  if (!posts || posts.length === 0) return null;

  const main = posts[0];
  const others = posts.slice(1, 4);

  return (
    <section className="category-section">
      <h2 className="section-title">{category.title}</h2>

      <div className="section-grid">
        {/* MAIN */}
        <Link to={`/news/${main.slug.current}`} className="main-news">
          {main.image && (
            <img
              src={urlFor(main.image).width(900).url()}
              alt={main.title}
            />
          )}
          <h3>{main.title}</h3>
        </Link>

        {/* SIDE */}
        <div className="side-news">
          {others.map(post => (
            <Link
              key={post._id}
              to={`/news/${post.slug.current}`}
              className="side-news-item"
            >
              {post.image && (
                <img
                  src={urlFor(post.image).width(300).url()}
                  alt={post.title}
                />
              )}
              <p>{post.title}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const [categories, setCategories] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    client.fetch(`
      *[_type=="category"] | order(title asc){
        _id,
        title,
        "slug": slug.current
      }
    `).then(setCategories);

    client.fetch(`
      *[_type=="post"] | order(publishedAt desc){
        _id,
        title,
        slug,
        image,
        category->{title, "slug": slug.current}
      }
    `).then(setPosts);
  }, []);

  const latestNews = posts.slice(0, 5); // 🔥 TOP 5 LATEST

  return (
    <div className="container">

      {/* ===== LATEST NEWS ===== */}
      <section className="latest-section">
        <h2 className="section-title">ताज़ा खबरें</h2>

        <div className="latest-grid">
          {latestNews.map(post => (
            <Link
              key={post._id}
              to={`/news/${post.slug.current}`}
              className="latest-card"
            >
              {post.image && (
                <img
                  src={urlFor(post.image).width(500).url()}
                  alt={post.title}
                />
              )}
              <h3>{post.title}</h3>
            </Link>
          ))}
        </div>
      </section>

      {/* TOP AD */}
      <div className="ad-banner">Advertisement</div>

      {/* ===== CATEGORY BLOCKS ===== */}
      {categories.map(cat => {
        const catPosts = posts.filter(
          post => post.category?.slug === cat.slug
        );

        return (
          <div key={cat._id}>
            <CategorySection category={cat} posts={catPosts} />
            <div className="ad-banner">Advertisement</div>
          </div>
        );
      })}
    </div>
  );
}
