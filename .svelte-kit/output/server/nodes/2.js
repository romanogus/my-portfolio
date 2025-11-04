

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.Rkwwa6Kf.js","_app/immutable/chunks/CHZ13H-M.js","_app/immutable/chunks/DZGmtrSd.js","_app/immutable/chunks/DOAqkIzK.js"];
export const stylesheets = [];
export const fonts = [];
