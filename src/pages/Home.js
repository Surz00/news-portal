// import { useEffect, useState } from "react";
// import { client, urlFor } from '../sanity'
// import { Link } from "react-router-dom";

// export default function Home() {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     client.fetch(`
//   *[_type == "post"] | order(publishedAt desc){
//     title,
//     slug,
//     category,
//     image
//   }
// `)
//   }, []);

//   return (
//     <div>
//       <h1>Latest News</h1>
//       {posts.map(post => (
//         <Link key={post.slug.current} to={`/news/${post.slug.current}`}>
//           <h3>{post.title}</h3>
//         </Link>
//       ))}
//     </div>
//   );
// }
import { useEffect, useState } from 'react'
import { client, urlFor } from '../sanity'
import { Link } from 'react-router-dom'

export default function Home() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    client
      .fetch(`
        *[_type == "post"] | order(publishedAt desc){
          title,
          slug,
          image,
          category->{
            title
          }
        }
      `)
      .then((data) => setPosts(data))
      .catch(console.error)
  }, [])

  return (
    <div className="container">
      <h1 style={{ marginBottom: '20px' }}>Latest News</h1>

      <div className="news-grid">
        {posts.map((post) => (
          <div
            key={post.slug.current}
            style={{
              background: '#fff',
              padding: '15px',
              borderRadius: '6px',
            }}
          >
            
           {post.image && (
            <Link
              to={`/news/${post.slug.current}`}
              className="news-card-link"
            >
            <div className="news-card">

              <img
                src={urlFor(post.image).width(800).url()}
                alt={post.title}
                className="news-image"
              />

              <div className="news-overlay">
                {post.category && (
                  <span className="news-category">
                    {post.category.title}
                  </span>
                )}

                {/* <h2 className="news-title">
                  {post.title}
                </h2> */}
              </div>
            </div>
            </Link>
          )}


            {/* TITLE */}
            <h2 style={{ margin: '10px 0' }}>{post.title}</h2>

            {/* CATEGORY */}
            {post.category && (
              <span
                style={{
                  background: '#0b1c2d',
                  color: '#fff',
                  padding: '4px 8px',
                  fontSize: '12px',
                  borderRadius: '4px',
                }}
              >
                {post.category.title}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
