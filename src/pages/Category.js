import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { client } from "../sanity";
import NewsCard from "../components/NewsCard";

function Category() {
  const { slug } = useParams();
  const [posts, setPosts] = useState([]);

      useEffect(() => {
        client.fetch(
          `
          *[_type == "post" && category->slug.current == $slug] | order(publishedAt desc){
            _id,
            title,
            slug,
            image,
            category->{title}
          }
          `,
          { slug }
        ).then(setPosts)
      }, [slug])


  return (
  <div className="container">
    <h1 style={{ textTransform: "capitalize" }}>
      {slug.replace("-", " ")} 
    </h1>


    {/* SHOW MESSAGE IF NO POSTS */}
    {posts.length === 0 && (
      <p style={{ marginTop: "20px", color: "#777" }}>
        No news found
      </p>
    )}

    {/* NEWS GRID */}
    <div className="news-grid">
      {posts.map((post) => (
        <NewsCard key={post._id} post={post} />
      ))}
    </div>
  </div>
  );

}

export default Category;
 