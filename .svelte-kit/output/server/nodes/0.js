import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["app/immutable/nodes/0.CCEnT2-I.js","app/immutable/chunks/DFq6RVgE.js","app/immutable/chunks/DIOywX2B.js","app/immutable/chunks/C-1ZElge.js","app/immutable/chunks/D1b3GSal.js","app/immutable/chunks/D7pFjNOB.js","app/immutable/chunks/CmPj9pVb.js","app/immutable/chunks/DTkEeL84.js","app/immutable/chunks/DJmLRMDG.js","app/immutable/chunks/Bnji5Dpb.js"];
export const stylesheets = ["app/immutable/assets/0.DIq3qj88.css"];
export const fonts = [];
