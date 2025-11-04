

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const universal = {
  "ssr": false
};
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.DgckYTnT.js","_app/immutable/chunks/CHZ13H-M.js","_app/immutable/chunks/DZGmtrSd.js","_app/immutable/chunks/Cgxrdvh9.js"];
export const stylesheets = ["_app/immutable/assets/0.C6VKeiRb.css"];
export const fonts = [];
