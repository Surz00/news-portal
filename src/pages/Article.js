import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { client, urlFor } from '../sanity'
import { PortableText } from '@portabletext/react'

export default function Article() {
  const { slug } = useParams()
  const [post, setPost] = useState(null)

  // Monetag direct link (SAFE)
  const openAd = () => {
    window.open(
      'https://otieu.com/4/10400707',
      '_blank'
    )
  }

    // const shareUrl = `https://news-portal-three-blue.vercel.app/${slug}`
    // const shareText = encodeURIComponent(post.title)


  useEffect(() => {
    client
      .fetch(
        `
        *[_type == "post" && slug.current == $slug][0]{
          title,
          publishedAt,
          image,
          category->{
            title
          },
          content
        }
        `,
        { slug }
      )
      .then((data) => setPost(data))
      .catch((err) => console.error(err))
  }, [slug])

  if (!post) {
    return <p className="container">Loading...</p>
  }

  return (
    <div className="container">
      {/* CATEGORY + DATE */}
      <div style={{ marginBottom: '10px', color: '#555' }}>
        {post.category && (
          <span style={{ fontWeight: 'bold', marginRight: '10px' }}>
            {post.category.title}
          </span>
        )}
        {post.publishedAt && (
          <span>{new Date(post.publishedAt).toDateString()}</span>
        )}
      </div>

      {/* TITLE */}
      <h1 style={{ marginBottom: '20px' }}>{post.title}</h1>

      {/* IMAGE */}
      {post.image && (
        <img
          src={urlFor(post.image).width(1000).url()}
          alt={post.title}
          style={{
            width: '100%',
            borderRadius: '8px',
            marginBottom: '20px'
          }}
        />
      )}

      {/* CONTENT */}
      <div
        className="article-content"
        style={{ lineHeight: '1.8', fontSize: '17px' }}
      >
        <PortableText value={post.content} />
      </div>

      {/* MONETAG CTA BUTTON */}
      <div style={{ textAlign: 'center', margin: '40px 0' }}>
        <button
          onClick={openAd}
          style={{
            padding: '12px 24px',
            background: '#d32f2f',
            color: '#fff',
            border: 'none',
            borderRadius: '6px',
            fontSize: '16px',
            cursor: 'pointer'
          }}
        >
          👉 पूरी खबर पढ़ें
        </button>

        {/* SOCIAL SHARE BUTTONS
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <a
            href={`https://wa.me/?text=${shareText}%20${shareUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginRight: '10px' }}
          >
            📲 WhatsApp
          </a>

          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginRight: '10px' }}
          >
            📘 Facebook
          </a>

          <a
            href={`https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            🐦 X
          </a>
        </div> */}

      </div>
    </div>
  )
}
