export const postQuery = `
*[_type=="post" && slug.current==$slug][0]{
  title,
  excerpt,
  "slug": slug.current,
  category,
  publishedAt,
  mainImage{
    asset->{
      url
    }
  },
  body
}
`;
