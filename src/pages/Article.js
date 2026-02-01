// import { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import { client, urlFor } from '../sanity'
// import { PortableText } from '@portabletext/react'

// export default function Article() {
//   const { slug } = useParams()
//   const [post, setPost] = useState(null)

//   // Monetag direct link (SAFE)
//   const openAd = () => {
//     window.open(
//       'https://otieu.com/4/10400707',
//       '_blank'
//     )
//   }

//     // const shareUrl = `https://news-portal-three-blue.vercel.app/${slug}`
//     // const shareText = encodeURIComponent(post.title)


//   useEffect(() => {
//     client
//       .fetch(
//         `
//         *[_type == "post" && slug.current == $slug][0]{
//           title,
//           publishedAt,
//           image,
//           category->{
//             title
//           },
//           content
//         }
//         `,
//         { slug }
//       )
//       .then((data) => setPost(data))
//       .catch((err) => console.error(err))
//   }, [slug])

//   if (!post) {
//     return <p className="container">Loading...</p>
//   }

//   return (
//     <div className="container">
//       {/* CATEGORY + DATE */}
//       <div style={{ marginBottom: '10px', color: '#555' }}>
//         {post.category && (
//           <span style={{ fontWeight: 'bold', marginRight: '10px' }}>
//             {post.category.title}
//           </span>
//         )}
//         {post.publishedAt && (
//           <span>{new Date(post.publishedAt).toDateString()}</span>
//         )}
//       </div>

//       {/* TITLE */}
//       <h1 style={{ marginBottom: '20px' }}>{post.title}</h1>

//       {/* IMAGE */}
//       {post.image && (
//         <img
//           src={urlFor(post.image).width(1000).url()}
//           alt={post.title}
//           style={{
//             width: '100%',
//             borderRadius: '8px',
//             marginBottom: '20px'
//           }}
//         />
//       )}

//       {/* CONTENT */}
//       <div
//         className="article-content"
//         style={{ lineHeight: '1.8', fontSize: '17px' }}
//       >
//         <PortableText value={post.content} />
//       </div>

//       {/* MONETAG CTA BUTTON */}
//       <div style={{ textAlign: 'center', margin: '40px 0' }}>
//         <button
//           onClick={openAd}
//           style={{
//             padding: '12px 24px',
//             background: '#d32f2f',
//             color: '#fff',
//             border: 'none',
//             borderRadius: '6px',
//             fontSize: '16px',
//             cursor: 'pointer'
//           }}
//         >
//           👉 पूरी खबर पढ़ें
//         </button>

//         {/* SOCIAL SHARE BUTTONS
//         <div style={{ textAlign: 'center', marginBottom: '30px' }}>
//           <a
//             href={`https://wa.me/?text=${shareText}%20${shareUrl}`}
//             target="_blank"
//             rel="noopener noreferrer"
//             style={{ marginRight: '10px' }}
//           >
//             📲 WhatsApp
//           </a>

//           <a
//             href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
//             target="_blank"
//             rel="noopener noreferrer"
//             style={{ marginRight: '10px' }}
//           >
//             📘 Facebook
//           </a>

//           <a
//             href={`https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`}
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             🐦 X
//           </a>
//         </div> */}

//       </div>
//     </div>
//   )
// }



// import { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import { client, urlFor } from '../sanity'
// import { PortableText } from '@portabletext/react'

// export default function Article() {
//   const { slug } = useParams()
//   const [post, setPost] = useState(null)

//   // Monetag direct link
//   const openAd = () => {
//     window.open('https://otieu.com/4/10400707', '_blank')
//   }

//   useEffect(() => {
//     client
//       .fetch(
//         `
//         *[_type == "post" && slug.current == $slug][0]{
//           title,
//           publishedAt,
//           image,
//           category->{ title },
//           content
//         }
//         `,
//         { slug }
//       )
//       .then(setPost)
//   }, [slug])

//   if (!post) return <p className="container">Loading...</p>

//   return (
//     <div className="container" style={{ maxWidth: '850px' }}>
      
//       {/* CATEGORY + DATE */}
//       <div style={{ color: '#666', marginBottom: '8px', fontSize: '14px' }}>
//         <strong>{post.category?.title}</strong> |{' '}
//         {new Date(post.publishedAt).toDateString()}
//       </div>

//       {/* TITLE */}
//       <h1 style={{ fontSize: '32px', lineHeight: '1.3', marginBottom: '10px' }}>
//         {post.title}
//       </h1>

//       {/* AUTHOR */}
//       <div style={{ fontSize: '14px', color: '#777', marginBottom: '20px' }}>
//         By News Portal Desk
//       </div>

//       {/* IMAGE */}
//       {post.image && (
//         <img
//           src={urlFor(post.image).width(1200).url()}
//           alt={post.title}
//           style={{
//             width: '100%',
//             borderRadius: '6px',
//             marginBottom: '25px'
//           }}
//         />
//       )}

//       {/* CONTENT */}
//       <div
//         className="article-content"
//         style={{ fontSize: '18px', lineHeight: '1.9' }}
//       >
//         <PortableText value={post.content} />
//       </div>

//       {/* SHARE */}
//       <div style={{ margin: '35px 0', fontSize: '15px' }}>
//         <strong>शेयर करें:</strong>{' '}
//         <a href="#" style={{ marginRight: '10px' }}>WhatsApp</a>
//         <a href="#" style={{ marginRight: '10px' }}>Facebook</a>
//         <a href="#">X</a>
//       </div>

//       {/* CTA / AD */}
//       <div style={{ textAlign: 'center', margin: '40px 0' }}>
//         <button
//           onClick={openAd}
//           style={{
//             padding: '12px 28px',
//             background: '#c62828',
//             color: '#fff',
//             border: 'none',
//             borderRadius: '6px',
//             fontSize: '16px',
//             cursor: 'pointer'
//           }}
//         >
//           👉 पूरी खबर पढ़ें
//         </button>
//       </div>

//     </div>
//   )
// }




// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { client, urlFor } from "../sanity";

// function Article() {
//   const { slug } = useParams();
//   const [post, setPost] = useState(null);

//   useEffect(() => {
//     client
//       .fetch(
//         `*[_type=="post" && slug.current==$slug][0]{
//           title,
//           mainImage,
//           body
//         }`,
//         { slug }
//       )
//       .then(setPost)
//       .catch(console.error);
//   }, [slug]);

//   if (!post) return <p>Loading...</p>;

//   return (
//     <div className="container">
//       <h1>{post.title}</h1>

//       {post.mainImage && (
//         <img
//           src={urlFor(post.mainImage).width(800).url()}
//           alt={post.title}
//         />
//       )}

//       <div className="content">
//         {Array.isArray(post.body) &&
//           post.body.map((block, i) =>
//             block._type === "block" ? (
//               <p key={i}>
//                 {block.children?.[0]?.text}
//               </p>
//             ) : null
//           )}
//       </div>
//     </div>
//   );
// }

// export default Article;


import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { client, urlFor } from "../sanity";
import { PortableText } from "@portabletext/react";

export default function Article() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

    useEffect(() => {
      if (!slug) return;

      client
        .fetch(
          `
          *[_type == "post" && slug.current == $slug][0]{
            title,
            publishedAt,
            image,
            content,
            category->{ title }
          }
          `,
          { slug }
        )
        .then(setPost)
        .catch(console.error);
    }, [slug]);


  if (!post) return <p className="container">Loading...</p>;

  return (
    <div className="container" style={{ maxWidth: "850px" }}>

      {/* CATEGORY + DATE */}
      <div style={{ color: "#666", marginBottom: "8px", fontSize: "14px" }}>
        <strong>{post.category?.title}</strong> |{" "}
        {post.publishedAt && new Date(post.publishedAt).toDateString()}
      </div>

      {/* TITLE */}
      <h1 style={{ fontSize: "32px", lineHeight: "1.3" }}>
        {post.title}
      </h1>

      {/* IMAGE */}
      {post.image && (
        <img
          src={urlFor(post.image).width(1200).url()}
          alt={post.title}
          style={{
            width: "100%",
            borderRadius: "6px",
            marginBottom: "25px",
          }}
        />
      )}

      {/* CONTENT */}
      <div
        className="article-content"
        style={{ fontSize: "18px", lineHeight: "1.9" }}
      >
        {post.content ? (
          <PortableText value={post.content} />
        ) : (
          <p style={{ color: "#999" }}>Content not available</p>
        )}
      </div>


    </div>
  );
}





 