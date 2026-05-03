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
			__memo(() => import('./nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set(["/","/about","/blog","/blog/__data.json","/projects","/blog/02-05-2026","/blog/02-05-2026/__data.json","/blog/01-30-2026","/blog/01-30-2026/__data.json","/blog/01-12-2026","/blog/01-12-2026/__data.json","/blog/04-25-2025","/blog/04-25-2025/__data.json","/blog/04-05-2025","/blog/04-05-2025/__data.json","/blog/04-01-2025","/blog/04-01-2025/__data.json","/blog/03-10-2025","/blog/03-10-2025/__data.json","/blog/03-06-2025","/blog/03-06-2025/__data.json","/blog/12-23-2024","/blog/12-23-2024/__data.json","/blog/12-04-2024","/blog/12-04-2024/__data.json","/blog/11-04-2024","/blog/11-04-2024/__data.json","/blog/09-04-2024","/blog/09-04-2024/__data.json"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
