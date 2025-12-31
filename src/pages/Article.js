import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { client, urlFor } from '../sanity'
import { PortableText } from '@portabletext/react'


export default function Article() {
  const { slug } = useParams()
  const [post, setPost] = useState(null)

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
      .then(setPost)
  }, [slug])

  if (!post) return <p className="container">Loading...</p>

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
          <span>
            {new Date(post.publishedAt).toDateString()}
          </span>
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
            marginBottom: '20px',
          }}
        />
      )}

      {/* CONTENT */}
      {/* <div style={{ lineHeight: '1.8', fontSize: '17px' }}>
        {post.content?.map((block) => {
          if (block._type === 'block') {
            return (
              <p key={block._key} style={{ marginBottom: '15px' }}>
                {block.children.map((child) => child.text).join('')}
              </p>
            )
          }
          return null
        })}
      </div> */}

      {/* CONTENT */}
      {/* CONTENT */}
      <div className="article-content" style={{ lineHeight: '1.8', fontSize: '17px' }}>
        <PortableText
          value={post.content}
          components={{
            block: {
              h2: ({ children }) => (
                <h2 style={{ marginTop: '25px', marginBottom: '10px' }}>
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 style={{ marginTop: '20px', marginBottom: '10px' }}>
                  {children}
                </h3>
              ),
              normal: ({ children }) => (
                <p style={{ marginBottom: '15px' }}>{children}</p>
              ),
            },
            list: {
              bullet: ({ children }) => (
                <ul style={{ paddingLeft: '20px', marginBottom: '15px' }}>
                  {children}
                </ul>
              ),
            },
            listItem: {
              bullet: ({ children }) => (
                <li style={{ marginBottom: '8px' }}>{children}</li>
              ),
            },
          }}
        />
      </div>
    </div>
  )
}
