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


// import { useParams, Link } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { client, urlFor } from "../sanity";
// import { PortableText } from "@portabletext/react";
// import "../styles/article.css";

// export default function Article() {
//   const { slug } = useParams();
//   const [post, setPost] = useState(null);

//   useEffect(() => {
//     client.fetch(
//       `
//       *[_type=="post" && slug.current==$slug][0]{
//         title,
//         publishedAt,
//         image,
//         content,
//         category->{title, "slug": slug.current}
//       }
//       `,
//       { slug }
//     ).then(setPost);
//   }, [slug]);

//   if (!post) return <p className="container">Loading...</p>;

//   return (
//     <div className="article-container">

//       {/* Breadcrumb */}
//       <div className="breadcrumb">
//         <Link to="/">Home</Link>
//         <span>›</span>
//         <Link to={`/category/${post.category?.slug}`}>
//           {post.category?.title}
//         </Link>
//       </div>

//       {/* ===== MOBILE SHARE BAR ===== */}
//         <div className="share-mobile">
//           <a href={`https://wa.me/?text=${window.location.href}`}>WhatsApp</a>
//           <a href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}>Facebook</a>
//           <a href={`https://twitter.com/intent/tweet?url=${window.location.href}`}>X</a>
//         </div>


//       {/* Category + Date */}
//       <div className="article-meta">
//         <span className="article-category">
//           {post.category?.title}
//         </span>
//         <span>
//           {new Date(post.publishedAt).toDateString()}
//         </span>
//       </div>

//       {/* Title */}
//       <h1 className="article-title">{post.title}</h1>

//       {/* Image */}
//       {post.image && (
//         <img
//           src={urlFor(post.image).width(1200).url()}
//           alt={post.title}
//           className="article-image"
//         />
//       )}
//       {/* ===== STICKY SHARE ===== */}
//         <div className="share-desktop">
//           <a
//             href={`https://wa.me/?text=${encodeURIComponent(window.location.href)}`}
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             WhatsApp
//           </a>

//           <a
//             href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Facebook
//           </a>

//           <a
//             href={`https://twitter.com/intent/tweet?url=${window.location.href}`}
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             X
//           </a>
//         </div>


//       {/* Content */}
//       <div className="article-content">
//         <PortableText value={post.content} />
//       </div>

//       {/* Bottom Ad placeholder */}
//       {/* <div className="article-ad">
//         Advertisement
//       </div> */}
//       <button
//         onClick={() => window.open('https://otieu.com/4/10572072', "_blank")}
//         className="article-ad-btn"
//       >
//         🔴 पूरी खबर पढ़ें
//       </button>

//     </div>
//   );
// }


import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { client, urlFor } from "../sanity";
import { PortableText } from "@portabletext/react";
import { Helmet } from "react-helmet-async";
import "../styles/article.css";

export default function Article() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    client
      .fetch(
        `
        *[_type=="post" && slug.current==$slug][0]{
          title,
          excerpt,
          publishedAt,
          image,
          content,
          author,
          category->{title, "slug": slug.current}
        }
        `,
        { slug }
      )
      .then(setPost);
  }, [slug]);

  if (!post) return <p className="container">Loading...</p>;

  const articleUrl = `https://news-portal-three-blue.vercel.app/${slug}`;
  const imageUrl = post.image
    ? urlFor(post.image).width(1200).height(675).url()
    : "";

  return (
    <div className="article-container">
      {/* ✅ SEO META TAGS */}
      <Helmet>
        <title>
          {post.title} | Latest {post.category?.title} News
        </title>

        <meta
          name="description"
          content={
            post.excerpt ||
            "Latest Chamba News Today और Himachal News की ताज़ा खबरें पढ़ें।"
          }
        />

        <link rel="canonical" href={articleUrl} />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:url" content={articleUrl} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />
        <meta name="twitter:image" content={imageUrl} />
      </Helmet>

      {/* Breadcrumb */}
      <div className="breadcrumb">
        <Link to="/">Home</Link>
        <span>›</span>
        <Link to={`/category/${post.category?.slug}`}>
          {post.category?.title}
        </Link>
      </div>

      {/* Mobile Share */}
      <div className="share-mobile">
        <a
          href={`https://wa.me/?text=${encodeURIComponent(articleUrl)}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp
        </a>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${articleUrl}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>
        <a
          href={`https://twitter.com/intent/tweet?url=${articleUrl}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          X
        </a>
      </div>

      {/* Meta */}
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
          src={imageUrl}
          alt={post.title}
          className="article-image"
          loading="lazy"
        />
      )}

      {/* Desktop Share */}
      <div className="share-desktop">
        <a
          href={`https://wa.me/?text=${encodeURIComponent(articleUrl)}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp
        </a>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${articleUrl}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>
        <a
          href={`https://twitter.com/intent/tweet?url=${articleUrl}`}
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

      {/* CTA / Ad Button */}
      <button
        onClick={() =>
          window.open("https://otieu.com/4/10572072", "_blank")
        }
        className="article-ad-btn"
      >
        🔴 पूरी खबर पढ़ें
      </button>
    </div>
  );
}
