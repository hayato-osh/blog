import { getCollection } from "astro:content";
import { config } from "@/config";
import { getPosts } from "@/utils/getPosts";
import rss from "@astrojs/rss";

export async function GET(context) {
	const posts = await getPosts();
	return rss({
		title: config.title,
		description: config.description,
		site: context.site,
		items: posts.map((post) => ({
			title: post.data.title,
			pubDate: post.data.createdAt,
			description: post.data.description,
			link: `/posts/${post.slug}/`,
		})),
	});
}
