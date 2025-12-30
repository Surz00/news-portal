import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { client, urlFor } from '../sanity'

export default function Category() {
  const { slug } = useParams()
  const [posts, setPosts] = useState([])
  const [category, setCategory] = useState(null)

  useEffect(() => {
    client.fetch(
      `
      {
        "category": *[_type=="category" && slug.current==$slug][0]{
          title,
          description
        },
        "posts": *[_type=="post" && category->slug.current==$slug]{
          title,
          slug,
          image,
          category->{title}
        }
      }
      `,
      { slug }
    ).then(res => {
      setCategory(res.category)
      setPosts(res.posts)
    })
  }, [slug])

  if (!category) return <p className="container">Loading...</p>

  return (
    <div className="container">
      <h1>{category.title}</h1>

      {category.description && (
        <p style={{ color: '#555', marginBottom: '20px' }}>
          {category.description}
        </p>
      )}

      <div className="news-grid">
        {posts.map(post => (
          <Link
            key={post.slug.current}
            to={`/news/${post.slug.current}`}
            className="news-card-link"
          >
            <div className="news-card">
              {post.image && (
                <>
                  <img
                    src={urlFor(post.image).width(800).url()}
                    alt={post.title}
                    className="news-image"
                  />
                  <div className="news-overlay">
                    <span className="news-category">
                      {post.category.title}
                    </span>
                    <h2 className="news-title">{post.title}</h2>
                  </div>
                </>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
