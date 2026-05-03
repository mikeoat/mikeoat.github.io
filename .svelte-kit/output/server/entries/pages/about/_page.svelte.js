import { h as head, e as ensure_array_like, b as escape_html, c as attr } from "../../../chunks/renderer.js";
const people = [
  {
    name: "belle cirino",
    link: "https://www.bcaudio.net/",
    notes: ["live sound", "musician", "producer", "nerd", "we go way back"]
  },
  {
    name: "lilith",
    link: "https://lilithmode.neocities.org/",
    notes: ["musician", "producer", "nerd", "programmer"]
  },
  {
    name: "Smilley",
    link: "https://smilleyhasawebsite.com/",
    notes: ["musician", "producer", "we go way back"]
  },
  {
    name: "jacob",
    link: "https://linktr.ee/jacobdurbin?utm_source=ig&utm_medium=social&utm_content=link_in_bio",
    notes: ["musician", "producer", "influencer"]
  },
  {
    name: "wolfie",
    link: "https://soundcloud.com/wolfiei",
    notes: ["musician", "producer"]
  },
  {
    name: "dooho",
    link: "https://www.instagram.com/dooho.han/",
    notes: ["musician", "producer", "nerd", "hardware"]
  },
  {
    name: "nat",
    link: "https://www.instagram.com/natalieguerrra/",
    notes: ["CNA", "nerd", "we go way back"]
  },
  {
    name: "lily",
    link: "https://www.instagram.com/lil._.e_/",
    notes: ["family", "we go way back"]
  },
  {
    name: "jojoberrydrummer",
    link: "https://www.instagram.com/jojoberrydrummer/",
    notes: ["musician", "drummer"]
  },
  {
    name: "michelle langelier",
    link: "https://www.instagram.com/michelle.langelier/",
    notes: ["musician", "teacher", "we go way back"]
  }
];
function _page($$renderer) {
  const buttons = [
    //buttons
    {
      path: "/img/alliens.gif",
      alt: "",
      link: "https://alliens.net/"
    },
    { path: "/img/antinazi.gif", alt: "", link: "" },
    {
      path: "/img/bestview.gif",
      alt: "",
      link: "https://en.wikipedia.org/wiki/Human_eye"
    },
    {
      path: "/img/bitwarden.gif",
      alt: "",
      link: "https://bitwarden.com/"
    },
    { path: "/img/bufreepalestine.gif", alt: "", link: "" },
    { path: "/img/chrmevil.gif", alt: "", link: "" },
    {
      path: "/img/ddg.gif",
      alt: "",
      link: "https://duckduckgo.com/"
    },
    {
      path: "/img/debian-powered.gif",
      alt: "",
      link: "https://www.debian.org/"
    },
    { path: "/img/goodieblink.png", alt: "", link: "" },
    { path: "/img/internetprivacy.gif", alt: "", link: "" },
    { path: "/img/web.gif", alt: "", link: "" },
    {
      path: "/img/roly-saynotoweb3.gif",
      alt: "",
      link: "https://yesterweb.org/no-to-web3/"
    },
    { path: "/img/sucks2.gif", alt: "", link: "" },
    {
      path: "https://zonaplankton.net/buttons/zonabutton.gif",
      alt: "",
      link: "https://zonaplankton.net"
    }
  ];
  const large_images = [
    //larger images
    { path: "/img/kirby-headphones.gif", alt: "", link: "" },
    { path: "/img/water.gif", alt: "", link: "" },
    {
      path: "/img/spongebob_flag_twirlers_stamp_by_cassiecros.gif",
      alt: "",
      link: ""
    },
    { path: "/img/shr.gif", alt: "", link: "" },
    {
      path: "/img/pear.gif",
      alt: "",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    { path: "/img/dog_digging.webp", alt: "", link: "" },
    {
      path: "https://publictransit.neocities.org/souv/stamps/map.gif",
      alt: "",
      link: "https://publictransit.neocities.org/"
    },
    {
      path: "https://zonaplankton.net/art-gallery/ge-artbook.png",
      alt: "",
      link: "https://zonaplankton.net/"
    }
  ];
  head("cwls5q", $$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>about mike</title>`);
    });
  });
  $$renderer.push(`<h1>about</h1> <main class="svelte-cwls5q"><h2>bio</h2> <div class="svelte-cwls5q"><p style="font-size:x-large; line-height:200%;" class="svelte-cwls5q">i'm mike mcdonald, an audio programmer, sound designer, and musician. i have chosen this path 
        because of my interest in technology and music that has consumed me for my entire life. i use my experience gained from <a href="https://governors.pwcs.edu/" class="svelte-cwls5q">the governor's
        school @ innovation park</a> and <a href="https://www.berklee.edu/" class="svelte-cwls5q">berklee college of music</a> in order to create <a href="/projects" class="svelte-cwls5q">devices for creativity</a>, <a href="/projects" class="svelte-cwls5q">build instruments</a>, and <a href="https://www.lmthegame.com/" class="svelte-cwls5q">design sounds for games</a>. the creation of novel tools and new
        experiences bring me great joy. creation is what makes us human and providing tools for that creation is of major interest to me. 
        outside of audio, i also do some web development. information about some of the projects i've worked on can be found on my <a href="projects" class="svelte-cwls5q">projects page</a>.</p></div> <h2>contact me</h2> <div class="contact svelte-cwls5q"><button class="svelte-cwls5q"><p style="display:inline;" class="svelte-cwls5q"><u>email</u></p> <p class="svelte-cwls5q">micgmcd@proton.me</p></button> <button class="svelte-cwls5q"><p class="svelte-cwls5q"><u>signal (preferred)</u></p> <p class="svelte-cwls5q">mikeoat.23</p></button> <button class="svelte-cwls5q"><p class="svelte-cwls5q"><u>discord</u></p> <p class="svelte-cwls5q">mikeoat</p></button> <button class="svelte-cwls5q"><p class="svelte-cwls5q"><u>instagram</u></p> <p class="svelte-cwls5q">mikgmcd</p></button></div> <h2>status</h2> <div style="display:flex; flex-direction:column; align-items:center;" class="svelte-cwls5q"><div id="statuscafe" class="svelte-cwls5q"><div id="statuscafe-username" class="svelte-cwls5q"></div><div id="statuscafe-content" class="svelte-cwls5q"></div></div>`);
  $$renderer.push(`<script src="https://status.cafe/current-status.js?name=mikeoat" defer=""><\/script>`);
  $$renderer.push(` <hr style="width:70%"/> <section><p style="display:inline-block;" class="svelte-cwls5q">feeling:</p><a style="display:inline-block;" href="https://www.imood.com/users/mikeoat" class="svelte-cwls5q"><img src="https://moods.imood.com/display/uname-mikeoat/fg-FFFFFF/trans-1/imood.gif" alt="The current mood of mikeoat at www.imood.com" class="svelte-cwls5q"/></a></section> <hr style="width:70%"/> <section style="width:100%; display:flex; flex-direction:column; align-items:center; color:white; font-family:'Courier New', Courier, monospace;" class="svelte-cwls5q"><div id="contain_moon" style="display:flex; flex-direction:column; align-items:center;;width:fit-content;text-align:center;padding-top:5px;padding-bottom:5px;font-size:18px" class="svelte-cwls5q"><div style="font-weight:bold" class="svelte-cwls5q">Moon phase</div><div style="margin-top:-7px;margin-bottom:-15px;padding:30px;filter:drop-shadow(0 0 30px hsl(220,100%,15%))" class="svelte-cwls5q"></div><div class="svelte-cwls5q">.</div><div style="font-size:small" class="svelte-cwls5q">.</div></div>`);
  $$renderer.push(`<script>(function(){var d=new Date().getDate();var m=document.querySelectorAll("#contain_moon div");var a=new XMLHttpRequest();var url="https://www.icalendar37.net/lunar/api/?lang=en&month="+(new Date().getMonth()+1)+"&year="+(new Date().getFullYear())+"&size=100&lightColor=rgb(245,245,245)&shadeColor=rgb(17,17,17)&LDZ="+new Date(new Date().getFullYear(),new Date().getMonth(),1)/1000+"";m[1].style.height="100px";a.onreadystatechange=function(){if(a.readyState==4&&a.status==200){var b=JSON.parse(a.responseText);m[1].innerHTML=b.phase[d].svg;if(typeof moon_widget_loaded=="function")moon_widget_loaded(b);m[2].innerHTML=b.phase[d].npWidget;m[3].innerHTML="next full moon<br>"+b.nextFullMoon}};a.open("GET",url,true);a.send()})()<\/script>`);
  $$renderer.push(`</section></div> <h2>cool people</h2> <iframe width="180" height="180" style="border:none; margin-bottom:10px;" src="https://dimden.neocities.org/navlink/" title="neolink"></iframe> <div style="display:flex; flex-flow: row wrap; justify-content:center;" class="svelte-cwls5q"><!--[-->`);
  const each_array = ensure_array_like(people);
  for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
    let person = each_array[$$index_1];
    $$renderer.push(`<button class="svelte-cwls5q"><p style="text-align:center;" class="svelte-cwls5q">${escape_html(person.name)}</p> `);
    if (person.link.match("instagram")) {
      $$renderer.push("<!--[0-->");
      $$renderer.push(`<p style="font-size:15px; color:red; text-align:center;" class="svelte-cwls5q">! opens instagram !</p>`);
    } else if (person.link.match("soundcloud")) {
      $$renderer.push("<!--[1-->");
      $$renderer.push(`<p style="font-size:15px; color:red; text-align:center;" class="svelte-cwls5q">! opens soundcloud !</p>`);
    } else {
      $$renderer.push("<!--[-1-->");
    }
    $$renderer.push(`<!--]--> <div class="tagContainer svelte-cwls5q"><!--[-->`);
    const each_array_1 = ensure_array_like(person.notes);
    for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
      let tag = each_array_1[$$index];
      $$renderer.push(`<div class="tag svelte-cwls5q"><p class="svelte-cwls5q">${escape_html(tag)}</p></div>`);
    }
    $$renderer.push(`<!--]--></div></button>`);
  }
  $$renderer.push(`<!--]--></div> <h2>buttons and gifs i like</h2> <div style="display:flex; flex-flow: row wrap; justify-content:center; align-items:baseline;" class="svelte-cwls5q"><iframe width="88px" height="31px" title="number go up" src="//incr.easrng.net/badge?key=motemikedotcom" style="margin:10px; background: url(//incr.easrng.net/bg.gif)"></iframe> <!--[-->`);
  const each_array_2 = ensure_array_like(buttons);
  for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
    let img = each_array_2[$$index_2];
    if (img.link != "") {
      $$renderer.push("<!--[0-->");
      $$renderer.push(`<a${attr("href", img.link)} class="svelte-cwls5q"><img style="max-height:100px; padding:5px;"${attr("src", img.path)}${attr("alt", img.alt)} class="svelte-cwls5q"/></a>`);
    } else {
      $$renderer.push("<!--[-1-->");
      $$renderer.push(`<img style="max-height:100px; padding:5px;"${attr("src", img.path)}${attr("alt", img.alt)} class="svelte-cwls5q"/>`);
    }
    $$renderer.push(`<!--]-->`);
  }
  $$renderer.push(`<!--]--></div> <div style="display:flex; flex-flow: row wrap; justify-content:center; align-items:baseline;" class="svelte-cwls5q"><!--[-->`);
  const each_array_3 = ensure_array_like(large_images);
  for (let $$index_3 = 0, $$length = each_array_3.length; $$index_3 < $$length; $$index_3++) {
    let img = each_array_3[$$index_3];
    if (img.link != "") {
      $$renderer.push("<!--[0-->");
      $$renderer.push(`<a${attr("href", img.link)} class="svelte-cwls5q"><img style="max-height:100px; padding:5px;"${attr("src", img.path)}${attr("alt", img.alt)} class="svelte-cwls5q"/></a>`);
    } else {
      $$renderer.push("<!--[-1-->");
      $$renderer.push(`<img style="max-height:150px; padding:5px;"${attr("src", img.path)}${attr("alt", img.alt)} class="svelte-cwls5q"/>`);
    }
    $$renderer.push(`<!--]-->`);
  }
  $$renderer.push(`<!--]--></div> <h2>library</h2> <div style="display:flex; flex-flow: row wrap; justify-content:center; align-items:baseline;" class="svelte-cwls5q"><p class="svelte-cwls5q"><a href="https://s.ai/nlws/" class="svelte-cwls5q">Unker Non-Linear Writing System</a> - helped develop my understanding of what language actually <strong>is</strong>. has been useful in my language learning journey for that reason</p> <p class="svelte-cwls5q"><a href="https://slatestarcodex.com/2020/06/01/book-review-origin-of-consciousness-in-the-breakdown-of-the-bicameral-mind/" class="svelte-cwls5q">Book Review: Origin Of Consciousness In The Breakdown Of The Bicameral Mind</a> - sparked my interest in consciousness and theory of mind, also got me into slate star codex, though i dont read scott's work as much as i used to</p> <p class="svelte-cwls5q"><a href="https://meltingasphalt.com/music-in-human-evolution/" class="svelte-cwls5q">music in human evolution</a> - very formative for my perspective on music and what it means for humans</p> <p class="svelte-cwls5q"><a href="https://www.soundonsound.com/techniques/synthesizing-brass-instruments" class="svelte-cwls5q">Synthesizing Brass Instruments</a> - more symbolically important to me than what is included in the article; representative of the start of my love for DSP</p> <p class="svelte-cwls5q"><a href="https://slimemoldtimemold.com/2021/07/13/a-chemical-hunger-part-iii-environmental-contaminants/" class="svelte-cwls5q">A Chemical Hunger Part III: Environmental Contaminants</a> - a great overview of the obesity epidemic that isnt bogged down by pseudoscience (something unfortunately rare to see when researching things regarding health and fitness)</p> <p class="svelte-cwls5q"><a href="https://libre.town/thoughts/entry_9.xhtml" class="svelte-cwls5q">The Hypertext Maximalist's Manifesto</a> - rationalizes my reasons for putting links everywhere, whenever possible (i started doing it because i'm used to using <a href="https://obsidian.md/" class="svelte-cwls5q">obsidian</a>)</p></div> <div style="height:100px; border:none;" class="svelte-cwls5q"></div></main>`);
}
export {
  _page as default
};
