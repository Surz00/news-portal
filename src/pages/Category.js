// // import { useParams, Link } from "react-router-dom";
// // import { useEffect, useState } from "react";
// // import { client, urlFor } from "../sanity";
// // // import { Link } from "react-router-dom";
// // import "../styles/category.css";


// // export default function Category() {
// //   const { slug } = useParams();
// //   const [posts, setPosts] = useState([]);

// //   useEffect(() => {
// //     client.fetch(
// //       `
// //       *[_type=="post" && category->slug.current==$slug]
// //       | order(publishedAt desc){
// //         _id,
// //         title,
// //         slug,
// //         image,
// //         publishedAt
// //       }
// //       `,
// //       { slug }
// //     ).then(setPosts);
// //   }, [slug]);

// //   // if (posts.length === 0) {
// //   //   return <p className="container">No news found</p>;
// //   // }

// //   if (posts.length === 0) {
// //     return (
// //       <div className="category-container">

// //         {/* BREADCRUMB */}
// //         <div className="breadcrumb">
// //           <Link to="/">Home</Link>
// //           <span>›</span>
// //           <span className="breadcrumb-current">
// //             {slug.replace("-", " ")}
// //           </span>
// //         </div>

// //         {/* AD — ALWAYS SHOW */}
// //         <div
// //           className="category-ad-box"
// //           onClick={() =>
// //             window.open("https://otieu.com/4/10572072", "_blank")
// //           }
// //         >
// //           <span>Sponsored</span>
// //           <p>आज की खास खबर देखें</p>
// //         </div>

// //         <p style={{ padding: "20px", color: "#555" }}>
// //           No news found
// //         </p>
// //       </div>
// //     );
// //   }


// //   const main = posts[0];
// //   const others = posts.slice(1);

// //   return (
// //     <div className="category-container">

// //       {/* ===== BREADCRUMB ===== */}
// //       <div className="breadcrumb">
// //         <Link to="/">Home</Link>
// //         <span>›</span>
// //         <span className="breadcrumb-current">
// //           {slug.replace("-", " ")}
// //         </span>
// //       </div>

// //       {/* ===== STICKY CATEGORY AD ===== */}
// //       {/* <div className="category-ad-wrapper">
// //         <div className="category-ad">
// //           Advertisement
// //         </div>
// //       </div> */}
// //       <div
// //         className="category-ad-box"
// //         onClick={() => window.open('https://otieu.com/4/10572072', "_blank")}
// //       >
// //         <span>Sponsored</span>
// //         <p>आज की खास खबर देखें</p>
// //       </div>

// //       {/* CATEGORY TITLE */}
// //       <div className="category-sticky">
// //         <div className="category-header">
// //           <span className="category-bar"></span>

// //           <h1 className="category-title">
// //             {slug.replace("-", " ").toUpperCase()}
// //           </h1>
// //         </div>
// //       </div>


// //       {/* MAIN NEWS */}
// //       <Link to={`/news/${main.slug.current}`} className="category-main">
// //         {main.image && (
// //           <img
// //             src={urlFor(main.image).width(1000).url()}
// //             alt={main.title}
// //           />
// //         )}
// //         <h2>{main.title}</h2>
// //       </Link>

// //       {/* LIST NEWS */}
// //       <div className="category-list">
// //         {others.map(post => (
// //           <Link
// //             key={post._id}
// //             to={`/news/${post.slug.current}`}
// //             className="category-item"
// //           >
// //             {post.image && (
// //               <img
// //                 src={urlFor(post.image).width(300).url()}
// //                 alt={post.title}
// //               />
// //             )}
// //             <div>
// //               <h3>{post.title}</h3>
// //               <span>
// //                 {new Date(post.publishedAt).toDateString()}
// //               </span>
// //             </div>
// //           </Link>
// //         ))}
// //       </div>

// //     </div>
// //   );
// // }


// // import { useParams, Link } from "react-router-dom";
// // import { useEffect, useState } from "react";
// // import { client, urlFor } from "../sanity";
// // import { Helmet } from "react-helmet-async";
// // import "../styles/category.css";

// // export default function Category() {
// //   const { slug } = useParams();
// //   const [posts, setPosts] = useState([]);

// //   // useEffect(() => {
// //   //   client.fetch(
// //   //     `
// //   //     *[_type=="post" && category->slug.current==$slug]
// //   //     | order(publishedAt desc){
// //   //       _id,
// //   //       title,
// //   //       slug,
// //   //       image,
// //   //       publishedAt
// //   //     }
// //   //     `,
// //   //     { slug }
// //   //   ).then(setPosts);
// //   // }, [slug]);

// //       useEffect(() => {
// //       client.fetch(
// //         `
// //         *[
// //           _type=="post"
// //           && defined(category)
// //           && category._ref in *[_type=="category" && slug.current==$slug]._id
// //         ]
// //         | order(publishedAt desc){
// //           _id,
// //           title,
// //           slug,
// //           image,
// //           publishedAt
// //         }
// //         `,
// //         { slug }
// //       ).then((res) => {
// //         console.log("CATEGORY POSTS:", res);
// //         setPosts(res);
// //       });
// //     }, [slug]);


// //   /* 🔹 STEP 3: SEO VARIABLES */
// //   const categoryName = slug.replace("-", " ");
// //   const pageTitle = `Latest ${categoryName} News Today`;
// //   const pageDescription = `Latest ${categoryName} News Today: ${categoryName} से जुड़ी ताज़ा और ब्रेकिंग खबरें पढ़ें।`;
// //   const canonicalUrl = `https://news-portal-three-blue.vercel.app/category/${slug}`;

// //   if (posts.length === 0) {
// //     return (
// //       <div className="category-container">

// //         {/* ✅ SEO (EVEN IF NO POSTS) */}
// //         <Helmet>
// //           <title>{pageTitle} | हिंदी न्यूज़</title>
// //           <meta name="description" content={pageDescription} />
// //           <link rel="canonical" href={canonicalUrl} />
// //         </Helmet>

// //         {/* BREADCRUMB */}
// //         <div className="breadcrumb">
// //           <Link to="/">Home</Link>
// //           <span>›</span>
// //           <span className="breadcrumb-current">
// //             {categoryName}
// //           </span>
// //         </div>

// //         {/* AD */}
// //         <div
// //           className="category-ad-box"
// //           onClick={() =>
// //             window.open("https://otieu.com/4/10572072", "_blank")
// //           }
// //         >
// //           <span>Sponsored</span>
// //           <p>आज की खास खबर देखें</p>
// //         </div>

// //         <p style={{ padding: "20px", color: "#555" }}>
// //           No news found
// //         </p>
// //       </div>
// //     );
// //   }

// //   const main = posts[0];
// //   const others = posts.slice(1);

// //   return (
// //     <div className="category-container">

// //       {/* ✅ STEP 3: DYNAMIC SEO META */}
// //       <Helmet>
// //         <title>{pageTitle} | हिंदी न्यूज़</title>
// //         <meta name="description" content={pageDescription} />
// //         <link rel="canonical" href={canonicalUrl} />
// //       </Helmet>

// //       {/* BREADCRUMB */}
// //       <div className="breadcrumb">
// //         <Link to="/">Home</Link>
// //         <span>›</span>
// //         <span className="breadcrumb-current">
// //           {categoryName}
// //         </span>
// //       </div>

// //       {/* AD */}
// //       <div
// //         className="category-ad-box"
// //         onClick={() =>
// //           window.open("https://otieu.com/4/10572072", "_blank")
// //         }
// //       >
// //         <span>Sponsored</span>
// //         <p>आज की खास खबर देखें</p>
// //       </div>

// //       {/* CATEGORY TITLE (H1 = SEO GOLD) */}
// //       <div className="category-sticky">
// //         <div className="category-header">
// //           <span className="category-bar"></span>
// //           <h1 className="category-title">
// //             {pageTitle}
// //           </h1>
// //         </div>
// //       </div>

// //       {/* MAIN NEWS */}
// //       <Link to={`/news/${main.slug.current}`} className="category-main">
// //         {main.image && (
// //           <img
// //             src={urlFor(main.image).width(1000).url()}
// //             alt={main.title}
// //           />
// //         )}
// //         <h2>{main.title}</h2>
// //       </Link>

// //       {/* LIST NEWS */}
// //       <div className="category-list">
// //         {others.map((post) => (
// //           <Link
// //             key={post._id}
// //             to={`/news/${post.slug.current}`}
// //             className="category-item"
// //           >
// //             {post.image && (
// //               <img
// //                 src={urlFor(post.image).width(300).url()}
// //                 alt={post.title}
// //               />
// //             )}
// //             <div>
// //               <h3>{post.title}</h3>
// //               <span>
// //                 {new Date(post.publishedAt).toDateString()}
// //               </span>
// //             </div>
// //           </Link>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }


// import { useParams, Link } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { client, urlFor } from "../sanity";
// import { Helmet } from "react-helmet-async";
// import "../styles/category.css";

// export default function Category() {
//   const { slug } = useParams();
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     client
//       .fetch(
//         `
//         *[
//           _type=="post"
//           && defined(category)
//           && category._ref in *[_type=="category" && slug.current==$slug]._id
//         ]
//         | order(publishedAt desc){
//           _id,
//           title,
//           slug,
//           image,
//           publishedAt
//         }
//         `,
//         { slug }
//       )
//       .then((res) => {
//         console.log("CATEGORY POSTS:", res);
//         setPosts(res);
//       });
//   }, [slug]);

//   /* 🔹 SEO VARIABLES */
//   const categoryName = slug.replace(/-/g, " ");
//   const pageTitle = `Latest ${categoryName} News Today`;
//   const pageDescription = `Latest ${categoryName} News Today: ${categoryName} से जुड़ी ताज़ा और ब्रेकिंग खबरें पढ़ें।`;
//   const canonicalUrl = `https://news-portal-three-blue.vercel.app/category/${slug}`;

//   /* 🔹 SAFETY GUARDS (NO BLANK PAGE EVER) */
//   const main = posts.length > 0 ? posts[0] : null;
//   const others = posts.length > 1 ? posts.slice(1) : [];

//   /* 🔹 EMPTY CATEGORY STATE */
//   if (posts.length === 0) {
//     return (
//       <div className="category-container">
//         <Helmet>
//           <title>{pageTitle} | हिंदी न्यूज़</title>
//           <meta name="description" content={pageDescription} />
//           <link rel="canonical" href={canonicalUrl} />
//         </Helmet>

//         <div className="breadcrumb">
//           <Link to="/">Home</Link>
//           <span>›</span>
//           <span className="breadcrumb-current">{categoryName}</span>
//         </div>

//         <div
//           className="category-ad-box"
//           onClick={() =>
//             window.open("https://otieu.com/4/10572072", "_blank")
//           }
//         >
//           <span>Sponsored</span>
//           <p>आज की खास खबर देखें</p>
//         </div>

//         <p style={{ padding: "20px", color: "#555" }}>
//           No news found
//         </p>
//       </div>
//     );
//   }

//   return (
//     <div className="category-container">
//       {/* ✅ SEO META */}
//       <Helmet>
//         <title>{pageTitle} | हिंदी न्यूज़</title>
//         <meta name="description" content={pageDescription} />
//         <link rel="canonical" href={canonicalUrl} />
//       </Helmet>

//       {/* BREADCRUMB */}
//       <div className="breadcrumb">
//         <Link to="/">Home</Link>
//         <span>›</span>
//         <span className="breadcrumb-current">{categoryName}</span>
//       </div>

//       {/* AD */}
//       <div
//         className="category-ad-box"
//         onClick={() =>
//           window.open("https://otieu.com/4/10572072", "_blank")
//         }
//       >
//         <span>Sponsored</span>
//         <p>आज की खास खबर देखें</p>
//       </div>

//       {/* CATEGORY TITLE */}
//       <div className="category-sticky">
//         <div className="category-header">
//           <span className="category-bar"></span>
//           <h1 className="category-title">{pageTitle}</h1>
//         </div>
//       </div>

//       {/* MAIN NEWS */}
//       {main && (
//         <Link to={`/news/${main.slug.current}`} className="category-main">
//           {main.image && (
//             <img
//               src={urlFor(main.image).width(1000).url()}
//               alt={main.title}
//             />
//           )}
//           <h2>{main.title}</h2>
//         </Link>
//       )}

//       {/* LIST NEWS */}
//       <div className="category-list">
//         {others.map((post) => (
//           <Link
//             key={post._id}
//             to={`/news/${post.slug.current}`}
//             className="category-item"
//           >
//             {post.image && (
//               <img
//                 src={urlFor(post.image).width(300).url()}
//                 alt={post.title}
//               />
//             )}
//             <div>
//               <h3>{post.title}</h3>
//               <span>
//                 {new Date(post.publishedAt).toDateString()}
//               </span>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }

import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { client, urlFor } from "../sanity";
import { Helmet } from "react-helmet-async";
import "../styles/category.css";

export default function Category() {
  const { slug } = useParams();
  const [posts, setPosts] = useState([]);

  /* 🔒 SAFETY: IF SLUG IS MISSING */
  if (!slug) {
    return (
      <div className="category-container">
        <h1 style={{ padding: "20px" }}>Select a Category</h1>
        <p style={{ padding: "20px", color: "#555" }}>
          Please open a category like Politics, Business, Sports, etc.
        </p>
      </div>
    );
  }

  useEffect(() => {
    client
      .fetch(
        `
        *[
          _type == "post"
          && defined(category)
          && category._ref in *[_type=="category" && slug.current==$slug]._id
        ]
        | order(publishedAt desc){
          _id,
          title,
          slug,
          image,
          publishedAt
        }
        `,
        { slug }
      )
      .then((res) => {
        setPosts(res || []);
      });
  }, [slug]);

  /* 🔹 SEO VARIABLES */
  const categoryName = slug.replace(/-/g, " ");
  const pageTitle = `Latest ${categoryName} News Today`;
  const pageDescription = `Latest ${categoryName} News Today: ${categoryName} से जुड़ी ताज़ा और ब्रेकिंग खबरें पढ़ें।`;
  const canonicalUrl = `https://tazatruth.vercel.app/category/${slug}`;

  const main = posts.length > 0 ? posts[0] : null;
  const others = posts.length > 1 ? posts.slice(1) : [];

  /* 🔹 NO POSTS STATE */
  if (posts.length === 0) {
    return (
      <div className="category-container">
        <Helmet>
          <title>{pageTitle} | हिंदी न्यूज़</title>
          <meta name="description" content={pageDescription} />
          <link rel="canonical" href={canonicalUrl} />
        </Helmet>

        <div className="breadcrumb">
          <Link to="/">Home</Link>
          <span>›</span>
          <span className="breadcrumb-current">{categoryName}</span>
        </div>

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
          No news found in this category.
        </p>
      </div>
    );
  }

  return (
    <div className="category-container">
      {/* ✅ SEO META */}
      <Helmet>
        <title>{pageTitle} | हिंदी न्यूज़</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>

      {/* BREADCRUMB */}
      <div className="breadcrumb">
        <Link to="/">Home</Link>
        <span>›</span>
        <span className="breadcrumb-current">{categoryName}</span>
      </div>

      {/* AD */}
      <div
        className="category-ad-box"
        onClick={() =>
          window.open("https://otieu.com/4/10572072", "_blank")
        }
      >
        <span>Sponsored</span>
        <p>आज की खास खबर देखें</p>
      </div>

      {/* CATEGORY TITLE */}
      <div className="category-sticky">
        <div className="category-header">
          <span className="category-bar"></span>
          <h1 className="category-title">{pageTitle}</h1>
        </div>
      </div>

      {/* MAIN NEWS */}
      {main && (
        <Link to={`/news/${main.slug.current}`} className="category-main">
          {main.image && (
            <img
              src={urlFor(main.image).width(1000).url()}
              alt={main.title}
            />
          )}
          <h2>{main.title}</h2>
        </Link>
      )}

      {/* LIST NEWS */}
      <div className="category-list">
        {others.map((post) => (
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
