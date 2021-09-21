import { getSearchPosts } from '../../lib/api'

export default async function search(req, res) {
    const { query } = req.query

    const posts = await getSearchPosts(query)

    // If the post doesn't exist prevent preview mode from being enabled
    if (!posts) {
        return res.status(401).json({ message: 'Post not found' })
    }

    res.status(200).json(posts)
}