import { defineCollection, z } from "astro:content";

const postCollection = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		tags: z.array(z.string()),
		description: z.string().optional(),
		createdAt: z.coerce.date(),
		updatedAt: z.coerce.date(),
	}),
});

export const collections = {
	posts: postCollection,
};
