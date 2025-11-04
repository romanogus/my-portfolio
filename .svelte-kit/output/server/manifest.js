export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["robots.txt"]),
	mimeTypes: {".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.DLJUylXJ.js",app:"_app/immutable/entry/app.Cs6YJJ3s.js",imports:["_app/immutable/entry/start.DLJUylXJ.js","_app/immutable/chunks/Bxi4wKkU.js","_app/immutable/chunks/DZGmtrSd.js","_app/immutable/chunks/9kGApzT9.js","_app/immutable/entry/app.Cs6YJJ3s.js","_app/immutable/chunks/DZGmtrSd.js","_app/immutable/chunks/BrU9ml-h.js","_app/immutable/chunks/CHZ13H-M.js","_app/immutable/chunks/9kGApzT9.js","_app/immutable/chunks/Cgxrdvh9.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js'))
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
				id: "/home",
				pattern: /^\/home\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
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
