export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "app",
	appPath: "app",
	assets: new Set([".nojekyll","img/.DS_Store","img/alliens.gif","img/antinazi.gif","img/bestview.gif","img/bitwarden.gif","img/bufreepalestine.gif","img/chrmevil.gif","img/ddg.gif","img/debian-powered.gif","img/dog_digging.webp","img/fftake.gif","img/goodieblink.png","img/internetprivacy.gif","img/kirby-headphones.gif","img/pear.gif","img/roly-saynotoweb3.gif","img/shr.gif","img/spongebob_flag_twirlers_stamp_by_cassiecros.gif","img/sucks2.gif","img/water.gif","img/web.gif","robots.txt"]),
	mimeTypes: {".gif":"image/gif",".webp":"image/webp",".png":"image/png",".txt":"text/plain"},
	_: {
		client: {start:"app/immutable/entry/start.BAj1VS9M.js",app:"app/immutable/entry/app.D9YgrrnV.js",imports:["app/immutable/entry/start.BAj1VS9M.js","app/immutable/chunks/Bnji5Dpb.js","app/immutable/chunks/DIOywX2B.js","app/immutable/chunks/C-1ZElge.js","app/immutable/entry/app.D9YgrrnV.js","app/immutable/chunks/DIOywX2B.js","app/immutable/chunks/DFq6RVgE.js","app/immutable/chunks/C-1ZElge.js","app/immutable/chunks/DAEBLU6U.js","app/immutable/chunks/D7pFjNOB.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/blog",
				pattern: /^\/blog\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/blog/[slug]",
				pattern: /^\/blog\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/projects",
				pattern: /^\/projects\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
