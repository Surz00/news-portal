// import { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import { client, urlFor } from "../sanity";
// import { PortableText } from "@portabletext/react";
// import "../styles/article.css";

// export default function Article() {
//   const { slug } = useParams();
//   const [post, setPost] = useState(null);

//   useEffect(() => {
//     if (!slug) return;

//     client
//       .fetch(
//         `
//         *[_type=="post" && slug.current==$slug][0]{
//           title,
//           publishedAt,
//           image,
//           content,
//           category->{title, "slug": slug.current}
//         }
//         `,
//         { slug }
//       )
//       .then(setPost)
//       .catch(console.error);
//   }, [slug]);

//   if (!post) return <p className="container">Loading...</p>;

//   return (
//     <article className="article-page container">
      
//       {/* ===== BREADCRUMB ===== */}
//       <div className="breadcrumb">
//         <Link to="/">Home</Link>
//         <span>›</span>
//         <Link to={`/category/${post.category?.slug}`}>
//           {post.category?.title}
//         </Link>
//       </div>

//       {/* ===== TITLE ===== */}
//       <h1 className="article-title">{post.title}</h1>

//       {/* ===== META ===== */}
//       <div className="article-meta">
//         <span className="article-category">
//           {post.category?.title}
//         </span>
//         <span>•</span>
//         <span>
//           {new Date(post.publishedAt).toDateString()}
//         </span>
//         <span>•</span>
//         <span>3 min read</span>
//       </div>

//       {/* ===== FEATURED IMAGE ===== */}
//       {post.image && (
//         <img
//           src={urlFor(post.image).width(1200).url()}
//           alt={post.title}
//           className="article-image"
//         />
//       )}

//       {/* ===== INLINE AD (TOP) ===== */}
//       <div className="article-ad">Advertisement</div>

//       {/* ===== CONTENT ===== */}
//       <div className="article-content">
//         <PortableText value={post.content} />
//       </div>

//       {/* ===== INLINE AD (BOTTOM) ===== */}
//       <div className="article-ad">Advertisement</div>

//     </article>
//   );
// }


import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { client, urlFor } from "../sanity";
import { PortableText } from "@portabletext/react";
import "../styles/article.css";

export default function Article() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    client.fetch(
      `
      *[_type=="post" && slug.current==$slug][0]{
        title,
        publishedAt,
        image,
        content,
        category->{title, "slug": slug.current}
      }
      `,
      { slug }
    ).then(setPost);
  }, [slug]);

  if (!post) return <p className="container">Loading...</p>;

  return (
    <div className="article-container">

      {/* Breadcrumb */}
      <div className="breadcrumb">
        <Link to="/">Home</Link>
        <span>›</span>
        <Link to={`/category/${post.category?.slug}`}>
          {post.category?.title}
        </Link>
      </div>

      {/* ===== MOBILE SHARE BAR ===== */}
        <div className="share-mobile">
          <a href={`https://wa.me/?text=${window.location.href}`}>WhatsApp</a>
          <a href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}>Facebook</a>
          <a href={`https://twitter.com/intent/tweet?url=${window.location.href}`}>X</a>
        </div>


      {/* Category + Date */}
      <div className="article-meta">
        <span className="article-category">
          {post.category?.title}
        </span>
        <span>
          {new Date(post.publishedAt).toDateString()}
        </span>
      </div>

      {/* Title */}
      <h1 className="article-title">{post.title}</h1>

      {/* Image */}
      {post.image && (
        <img
          src={urlFor(post.image).width(1200).url()}
          alt={post.title}
          className="article-image"
        />
      )}
      {/* ===== STICKY SHARE ===== */}
        <div className="share-desktop">
          <a
            href={`https://wa.me/?text=${encodeURIComponent(window.location.href)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>

          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>

          <a
            href={`https://twitter.com/intent/tweet?url=${window.location.href}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            X
          </a>
        </div>


      {/* Content */}
      <div className="article-content">
        <PortableText value={post.content} />
      </div>

      {/* Bottom Ad placeholder */}
      {/* <div className="article-ad">
        Advertisement
      </div> */}
      <button
        onClick={() => window.open('https://otieu.com/4/10572072', "_blank")}
        className="article-ad-btn"
      >
        🔴 पूरी खबर पढ़ें
      </button>

    </div>
  );
}
