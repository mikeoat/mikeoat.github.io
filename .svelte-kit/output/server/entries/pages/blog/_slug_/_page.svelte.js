import { h as head, b as escape_html } from "../../../../chunks/renderer.js";
import { marked } from "marked";
import { h as html } from "../../../../chunks/html.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data } = $$props;
    head("1teoznn", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>${escape_html(data.post?.title)}</title>`);
      });
    });
    $$renderer2.push(`<main class="svelte-1teoznn"><h3>${escape_html(data.post?.slug)}</h3> ${html(marked(Object.values(data.post?.content)[0]))}</main> <p>want me in your inbox? <a href="https://buttondown.com/mote">subscribe to my newsletter!</a> if you'd rather an rss feed, you can <a href="https://kill-the-newsletter.com/">kill my newsletter</a></p> <div style="height:100px"></div>`);
  });
}
export {
  _page as default
};
