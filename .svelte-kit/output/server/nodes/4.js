import * as server from '../entries/pages/blog/_page.server.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/blog/+page.server.ts";
export const imports = ["app/immutable/nodes/4.DK3VDAe_.js","app/immutable/chunks/DFq6RVgE.js","app/immutable/chunks/DIOywX2B.js","app/immutable/chunks/DAEBLU6U.js","app/immutable/chunks/D7pFjNOB.js","app/immutable/chunks/D1b3GSal.js","app/immutable/chunks/CmPj9pVb.js"];
export const stylesheets = ["app/immutable/assets/4.B55QgUNs.css"];
export const fonts = [];
