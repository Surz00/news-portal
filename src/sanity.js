// import { createClient } from '@sanity/client'

// export const client = createClient({
//   projectId: 'yer1iozn',
//   dataset: 'production',
//   apiVersion: '2025-01-01',
//   useCdn: true,
// })


// import { createClient } from '@sanity/client'
// import imageUrlBuilder from '@sanity/image-url'

// export const client = createClient({
//   projectId: 'yer1iozn', // your projectId
//   dataset: 'production',
//   apiVersion: '2025-01-01',
//   useCdn: true,
// })

// const builder = imageUrlBuilder(client)

// export function urlFor(source) {
//   return builder.image(source)
// }


// import { createClient } from '@sanity/client'
// import imageUrlBuilder from '@sanity/image-url'

// export const client = createClient({
//   projectId: 'yer1iozn', // your real projectId
//   dataset: 'production',
//   apiVersion: '2025-01-01',
//   useCdn: true,
// })

// const builder = imageUrlBuilder(client)

// export function urlFor(source) {
//   return builder.image(source)
// }


import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: 'yer1iozn',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)




