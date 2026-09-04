import { posts } from './data.js';

export function load() {
	return {
		summaries: posts.map((post) => ({
			slug: post.slug,
			title: post.title,
			content: Object.values(post.content as Object)[0] as string
		}))
	};
}