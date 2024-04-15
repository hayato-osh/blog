import { getPosts } from "./getPosts";

export const getTags = async () => {
	const posts = await getPosts();

	const tags = new Map<string, Post[]>();

	for (const post of posts) {
		for (const tag of post.data.tags) {
			const posts = tags.get(tag) ?? [];
			posts.push(post);
			tags.set(tag, posts);
		}
	}

	return tags;
};
