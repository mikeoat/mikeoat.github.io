import { h as head, e as ensure_array_like, c as attr, b as escape_html, s as stringify } from "../../../chunks/renderer.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data } = $$props;
    head("u4k2t", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>M.O.T.E.</title>`);
      });
    });
    $$renderer2.push(`<h1><u>m</u>ike's <u>o</u>nline <u>t</u>hought <u>e</u>xpulsion</h1> <p style="text-align:center;" class="svelte-u4k2t">would you rather read this in your inbox? <br/><a href="https://buttondown.com/mote" class="svelte-u4k2t">subscribe to my newsletter!</a></p> <iframe width="88px" height="31px" title="number go up" src="//incr.easrng.net/badge?key=motemikedotcom" style="display:block; margin:10px auto; background: url(//incr.easrng.net/bg.gif)"></iframe> <main class="svelte-u4k2t">`);
    {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<iframe width="180" height="180" style="border:none; margin-bottom:10px;" src="https://dimden.neocities.org/navlink/" title="neolink"></iframe>`);
    }
    $$renderer2.push(`<!--]--> <section class="svelte-u4k2t"><!--[-->`);
    const each_array = ensure_array_like(data.summaries);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let { slug, title, content } = each_array[$$index];
      $$renderer2.push(`<a${attr("href", `blog/${stringify(slug)}`)} class="svelte-u4k2t"><div class="svelte-u4k2t"><h3 class="svelte-u4k2t">${escape_html(title)}</h3> <p class="date svelte-u4k2t">${escape_html(slug)}</p> <p class="preview svelte-u4k2t">${escape_html(content.split("\n")[4].substring(0, 50).replaceAll("#", ""))}...</p></div></a>`);
    }
    $$renderer2.push(`<!--]--></section> `);
    {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<iframe width="180" height="180" style="border:none; margin-bottom:10px;" src="https://dimden.neocities.org/navlink/" title="neolink"></iframe>`);
    }
    $$renderer2.push(`<!--]--></main>`);
  });
}
export {
  _page as default
};
