import { sanityClient } from 'sanity:client'

export async function getPosts() {
  const posts = await sanityClient.fetch(
    `*[_type == "post"]{
      title,
    }`,
  )
  return posts
}
