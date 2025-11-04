

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/home/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.CQ7cTiOf.js","_app/immutable/chunks/CHZ13H-M.js","_app/immutable/chunks/DZGmtrSd.js","_app/immutable/chunks/DOAqkIzK.js"];
export const stylesheets = [];
export const fonts = [];
