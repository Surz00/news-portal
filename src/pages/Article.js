export default function Article() {
  const { slug } = useParams()
  const [post, setPost] = useState(null)

  // ✅ FIXED FUNCTION
  const openAd = () => {
    window.open(
      "https://otieu.com/4/10400707",
      "_blank"
    )
  }

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
      <div className="article-content" style={{ lineHeight: '1.8', fontSize: '17px' }}>
        <PortableText value={post.content} />
      </div>

      {/* ✅ MONETAG CTA BUTTON (WORKING) */}
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
      </div>
    </div>
  )
}
