import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { client, urlFor } from "../sanity";
// import { Link } from "react-router-dom";
import "../styles/category.css";


export default function Category() {
  const { slug } = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    client.fetch(
      `
      *[_type=="post" && category->slug.current==$slug]
      | order(publishedAt desc){
        _id,
        title,
        slug,
        image,
        publishedAt
      }
      `,
      { slug }
    ).then(setPosts);
  }, [slug]);

  // if (posts.length === 0) {
  //   return <p className="container">No news found</p>;
  // }

  if (posts.length === 0) {
    return (
      <div className="category-container">

        {/* BREADCRUMB */}
        <div className="breadcrumb">
          <Link to="/">Home</Link>
          <span>›</span>
          <span className="breadcrumb-current">
            {slug.replace("-", " ")}
          </span>
        </div>

        {/* AD — ALWAYS SHOW */}
        <div
          className="category-ad-box"
          onClick={() =>
            window.open("https://otieu.com/4/10572072", "_blank")
          }
        >
          <span>Sponsored</span>
          <p>आज की खास खबर देखें</p>
        </div>

        <p style={{ padding: "20px", color: "#555" }}>
          No news found
        </p>
      </div>
    );
  }


  const main = posts[0];
  const others = posts.slice(1);

  return (
    <div className="category-container">

      {/* ===== BREADCRUMB ===== */}
      <div className="breadcrumb">
        <Link to="/">Home</Link>
        <span>›</span>
        <span className="breadcrumb-current">
          {slug.replace("-", " ")}
        </span>
      </div>

      {/* ===== STICKY CATEGORY AD ===== */}
      {/* <div className="category-ad-wrapper">
        <div className="category-ad">
          Advertisement
        </div>
      </div> */}
      <div
        className="category-ad-box"
        onClick={() => window.open('https://otieu.com/4/10572072', "_blank")}
      >
        <span>Sponsored</span>
        <p>आज की खास खबर देखें</p>
      </div>

      {/* CATEGORY TITLE */}
      <div className="category-sticky">
        <div className="category-header">
          <span className="category-bar"></span>

          <h1 className="category-title">
            {slug.replace("-", " ").toUpperCase()}
          </h1>
        </div>
      </div>


      {/* MAIN NEWS */}
      <Link to={`/news/${main.slug.current}`} className="category-main">
        {main.image && (
          <img
            src={urlFor(main.image).width(1000).url()}
            alt={main.title}
          />
        )}
        <h2>{main.title}</h2>
      </Link>

      {/* LIST NEWS */}
      <div className="category-list">
        {others.map(post => (
          <Link
            key={post._id}
            to={`/news/${post.slug.current}`}
            className="category-item"
          >
            {post.image && (
              <img
                src={urlFor(post.image).width(300).url()}
                alt={post.title}
              />
            )}
            <div>
              <h3>{post.title}</h3>
              <span>
                {new Date(post.publishedAt).toDateString()}
              </span>
            </div>
          </Link>
        ))}
      </div>

    </div>
  );
}
