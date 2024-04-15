import { getCollection } from "astro:content";

export const getPosts = async () => {
	const posts = await getCollection("posts");

	posts.sort((a, b) => b.data.createdAt.getTime() - a.data.createdAt.getTime());

	return posts;
};
