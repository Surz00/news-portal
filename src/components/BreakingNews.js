import { useEffect, useState } from 'react'
import { client } from '../sanity'
import './BreakingNews.css'

export default function BreakingNews() {
  const [news, setNews] = useState([])

  useEffect(() => {
    client.fetch(`
      *[_type == "post" && breaking == true] | order(publishedAt desc)[0...5]{
        title,
        slug
      }
    `).then(setNews)
  }, [])

  if (news.length === 0) return null

  return (
    <div className="breaking-wrapper">
      <div className="breaking-label">BREAKING</div>

      <div className="breaking-marquee">
        <div className="breaking-track">
          {news.map((item, index) => (
            <span key={index} className="breaking-item">
              {item.title}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
