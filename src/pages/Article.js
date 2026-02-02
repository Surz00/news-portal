import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { client, urlFor } from "../sanity";
import { PortableText } from "@portabletext/react";

export default function Article() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    client.fetch(`
      *[_type=="post" && slug.current==$slug][0]{
        title,image,content,publishedAt,category->{title}
      }
    `, { slug }).then(setPost);
  }, [slug]);

  if (!post) return <p className="container">Loading...</p>;

  return (
    <div className="container article">
      <p className="meta">
        {post.category?.title} | {new Date(post.publishedAt).toDateString()}
      </p>

      <h1>{post.title}</h1>

      {post.image && (
        <img src={urlFor(post.image).width(1200).url()} alt={post.title} />
      )}

      {post.content ? (
        <PortableText value={post.content} />
      ) : (
        <p>Content not available</p>
      )}
    </div>
  );
}
