
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	type MatcherParam<M> = M extends (param : string) => param is (infer U extends string) ? U : string;

	export interface AppTypes {
		RouteId(): "/" | "/about" | "/blog" | "/blog/blog_posts" | "/blog/[slug]" | "/projects" | "/projects/components";
		RouteParams(): {
			"/blog/[slug]": { slug: string }
		};
		LayoutParams(): {
			"/": { slug?: string };
			"/about": Record<string, never>;
			"/blog": { slug?: string };
			"/blog/blog_posts": Record<string, never>;
			"/blog/[slug]": { slug: string };
			"/projects": Record<string, never>;
			"/projects/components": Record<string, never>
		};
		Pathname(): "/" | "/about" | "/blog" | `/blog/${string}` & {} | "/projects";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/.nojekyll" | "/img/.DS_Store" | "/img/alliens.gif" | "/img/antinazi.gif" | "/img/bestview.gif" | "/img/bitwarden.gif" | "/img/bufreepalestine.gif" | "/img/chrmevil.gif" | "/img/ddg.gif" | "/img/debian-powered.gif" | "/img/dog_digging.webp" | "/img/fftake.gif" | "/img/goodieblink.png" | "/img/internetprivacy.gif" | "/img/kirby-headphones.gif" | "/img/pear.gif" | "/img/roly-saynotoweb3.gif" | "/img/shr.gif" | "/img/spongebob_flag_twirlers_stamp_by_cassiecros.gif" | "/img/sucks2.gif" | "/img/water.gif" | "/img/web.gif" | "/robots.txt" | string & {};
	}
}