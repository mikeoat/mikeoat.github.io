<script lang="ts">
    import { people } from "./data";

    const buttons = [
        //buttons
        {path:"/img/alliens.gif",alt:"",link:"https://alliens.net/"},
        {path:"/img/antinazi.gif",alt:"",link:""},
        {path:"/img/bestview.gif",alt:"",link:"https://en.wikipedia.org/wiki/Human_eye"},
        {path:"/img/bitwarden.gif",alt:"",link:"https://bitwarden.com/"},
        {path:"/img/bufreepalestine.gif",alt:"",link:""},
        {path:"/img/chrmevil.gif",alt:"",link:""},
        {path:"/img/ddg.gif",alt:"",link:"https://duckduckgo.com/"},
        {path:"/img/debian-powered.gif",alt:"",link:"https://www.debian.org/"},
        {path:"/img/goodieblink.png",alt:"",link:""},
        {path:"/img/internetprivacy.gif",alt:"",link:""},
        {path:"/img/web.gif",alt:"",link:""},
        {path:"/img/roly-saynotoweb3.gif",alt:"",link:"https://yesterweb.org/no-to-web3/"},
        {path:"/img/sucks2.gif",alt:"",link:""},
        {path: "https://zonaplankton.net/buttons/zonabutton.gif", alt:"", link:"https://zonaplankton.net"},
    ];
    const large_images = [
        //larger images
        {path:"/img/kirby-headphones.gif",alt:"",link:""},
        {path:"/img/water.gif",alt:"",link:""},
        {path:"/img/spongebob_flag_twirlers_stamp_by_cassiecros.gif",alt:"",link:""},
        {path:"/img/shr.gif",alt:"",link:""},
        {path:"/img/pear.gif",alt:"",link:"https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
        {path:"/img/dog_digging.webp",alt:"",link:""},
        {path: "https://publictransit.neocities.org/souv/stamps/map.gif", alt:"", link:"https://publictransit.neocities.org/"},
        {path: "https://zonaplankton.net/art-gallery/ge-artbook.png", alt:"", link:"https://zonaplankton.net/"}
    ];
</script>

<svelte:head><title>about mike</title></svelte:head>

<h1>about</h1>
<main>
    <h2>bio</h2>
    <div>
        <p style="font-size:x-large; line-height:200%;">i'm mike mcdonald, an audio programmer, sound designer, and musician. i have chosen this path 
        because of my interest in technology and music that has consumed me for my entire life. i use my experience gained from <a href="https://governors.pwcs.edu/"> the governor's
        school @ innovation park</a> and <a href="https://www.berklee.edu/">berklee college of music</a> in order to create <a href="/projects">devices for creativity</a>, <a href="/projects">build instruments</a>, and 
        <a href="https://www.lmthegame.com/">design sounds for games</a>. the creation of novel tools and new
        experiences bring me great joy. creation is what makes us human and providing tools for that creation is of major interest to me. 
        outside of audio, i also do some web development. information about some of the projects i've worked on can be found on my <a href="projects">projects page</a>.
        </p>
    </div>
    <h2>contact me</h2>
    <div class="contact">
        <button onclick={() => window.location.href="mailto:micgmcd@proton.me"}>
            <p style="display:inline;"><u>email</u></p>
            <p>micgmcd@proton.me</p>
        </button>
        <button onclick={() => window.location.href="mailto:https://signal.me/#eu/HkBXrvXqY-0CFrySs1r_xS0V0SeRqSrrj__r4MTQNAKopdIESOdNCJkkYFzRt66h"}>
            <p><u>signal (preferred)</u></p>
            <p>mikeoat.23</p>
        </button>
        <button onclick={() => window.location.href="https://discord.com/users/398496693135343636"}>
            <p><u>discord</u></p>
            <p>mikeoat</p>
        </button>
        <button onclick={() => window.location.href="https://www.instagram.com/mikgmcd/"}>
            <p><u>instagram</u></p>
            <p>mikgmcd</p>
        </button>
    </div>

    <h2>status</h2>
        <div style="display:flex; flex-direction:column; align-items:center;">
            <div id="statuscafe"><div id="statuscafe-username"></div><div id="statuscafe-content"></div></div><script src="https://status.cafe/current-status.js?name=mikeoat" defer></script>
            <hr style="width:70%">
            <section>
                <p style="display:inline-block;">feeling:</p><a style="display:inline-block;" href="https://www.imood.com/users/mikeoat"><img src="https://moods.imood.com/display/uname-mikeoat/fg-FFFFFF/trans-1/imood.gif" alt="The current mood of mikeoat at www.imood.com"></a>
            </section>
            <hr style="width:70%">
            <section style="width:100%; display:flex; flex-direction:column; align-items:center; color:white; font-family:'Courier New', Courier, monospace;">
                <!-- © wdisseny --><div id="contain_moon" style="display:flex; flex-direction:column; align-items:center;;width:fit-content;text-align:center;padding-top:5px;padding-bottom:5px;font-size:18px"><div style="font-weight:bold">Moon phase</div><div style="margin-top:-7px;margin-bottom:-15px;padding:30px;filter:drop-shadow(0 0 30px hsl(220,100%,15%))"></div><div>.</div><div style="font-size:small">.</div></div><script>(function(){var d=new Date().getDate();var m=document.querySelectorAll("#contain_moon div");var a=new XMLHttpRequest();var url="https://www.icalendar37.net/lunar/api/?lang=en&month="+(new Date().getMonth()+1)+"&year="+(new Date().getFullYear())+"&size=100&lightColor=rgb(245,245,245)&shadeColor=rgb(17,17,17)&LDZ="+new Date(new Date().getFullYear(),new Date().getMonth(),1)/1000+"";m[1].style.height="100px";a.onreadystatechange=function(){if(a.readyState==4&&a.status==200){var b=JSON.parse(a.responseText);m[1].innerHTML=b.phase[d].svg;if(typeof moon_widget_loaded=="function")moon_widget_loaded(b);m[2].innerHTML=b.phase[d].npWidget;m[3].innerHTML="next full moon<br>"+b.nextFullMoon}};a.open("GET",url,true);a.send()})()</script>
            </section>
            <!-- wait for more tests
            <hr style="width:70%">
            <h3>tests</h3>
            <a href="http://www.nerdtests.com/ft_loser.php?im">
                <img src="http://www.nerdtests.com/images/ft/lsr.php?val=9694" alt="I am 66% loser. What about you? Click here to find out!">
            </a>
            -->
        </div>

    <h2>cool people</h2>
    <iframe width="180" height="180" style="border:none; margin-bottom:10px;" src="https://dimden.neocities.org/navlink/" title="neolink"></iframe>
    <div style="display:flex; flex-flow: row wrap; justify-content:center;">
        {#each people as person}
            <button onclick={() => window.location.href=person.link}>
                <p style="text-align:center;">{person.name}</p>
                {#if person.link.match("instagram")}
                    <p style="font-size:15px; color:red; text-align:center;">! opens instagram !</p>
                {:else if person.link.match("soundcloud")}
                    <p style="font-size:15px; color:red; text-align:center;">! opens soundcloud !</p>
                {/if}
                <div class="tagContainer">
                    {#each person.notes as tag}
                        <div class="tag">
                            <p>{tag}</p>
                        </div>
                    {/each}
                </div>
            </button>
        {/each}
    </div>

    <h2>buttons and gifs i like</h2>
    <div style="display:flex; flex-flow: row wrap; justify-content:center; align-items:baseline;">
        <iframe width=88px height=31px title="number go up" src="//incr.easrng.net/badge?key=motemikedotcom" style="margin:10px; background: url(//incr.easrng.net/bg.gif)"></iframe>
        {#each buttons as img}
        {#if img.link != ""}
            <a href="{img.link}"><img style="max-height:100px; padding:5px;" src="{img.path}" alt="{img.alt}"/></a>
        {:else}
            <img style="max-height:100px; padding:5px;" src="{img.path}" alt="{img.alt}"/>
        {/if}
        {/each}
    </div>
    <div style="display:flex; flex-flow: row wrap; justify-content:center; align-items:baseline;">
        {#each large_images as img}
        {#if img.link != ""}
            <a href="{img.link}"><img style="max-height:100px; padding:5px;" src="{img.path}" alt="{img.alt}"/></a>
        {:else}
            <img style="max-height:150px; padding:5px;" src="{img.path}" alt="{img.alt}"/>
        {/if}
        {/each}
    </div>

    <h2>library</h2>
    <div style="display:flex; flex-flow: row wrap; justify-content:center; align-items:baseline;">
        <p><a href="https://s.ai/nlws/">Unker Non-Linear Writing System</a> - helped develop my understanding of what language actually <strong>is</strong>. has been useful in my language learning journey for that reason</p>
        <p><a href="https://slatestarcodex.com/2020/06/01/book-review-origin-of-consciousness-in-the-breakdown-of-the-bicameral-mind/">Book Review: Origin Of Consciousness In The Breakdown Of The Bicameral Mind</a> - sparked my interest in consciousness and theory of mind, also got me into slate star codex, though i dont read scott's work as much as i used to</p>
        <p><a href="https://meltingasphalt.com/music-in-human-evolution/">music in human evolution</a> - very formative for my perspective on music and what it means for humans</p>
        <p><a href="https://www.soundonsound.com/techniques/synthesizing-brass-instruments">Synthesizing Brass Instruments</a> - more symbolically important to me than what is included in the article; representative of the start of my love for DSP</p>
        <p><a href="https://slimemoldtimemold.com/2021/07/13/a-chemical-hunger-part-iii-environmental-contaminants/">A Chemical Hunger Part III: Environmental Contaminants</a> - a great overview of the obesity epidemic that isnt bogged down by pseudoscience (something unfortunately rare to see when researching things regarding health and fitness)</p>
        <p><a href="https://libre.town/thoughts/entry_9.xhtml">The Hypertext Maximalist's Manifesto</a> - rationalizes my reasons for putting links everywhere, whenever possible (i started doing it because i'm used to using <a href="https://obsidian.md/">obsidian</a>)</p>
    </div>

    <div style="height:100px; border:none;"></div>
</main>

<style>
    p {
        font-size:x-large; 
        line-height:200%;
        text-align:left;
        margin:8px;
    }
    div{
        width:70%;
        border:double white;
        margin-bottom:20px;
    }
    @media (width < 600px){
        div{
            width:100%;
        }
    }
    main{
        display:flex;
        align-items:center;
        flex-direction:column;
    }
    a:visited{
        color: #771100;
    }
    .contact{
        display:flex;
        flex-wrap:wrap;
        justify-content:center;
        text-align:center;
    }
    .contact p{
        text-align:center;
    }
    #statuscafe {
        font-family:'Courier New', Courier, monospace;
        background-color: transparent;
        border:none;
        display:flex; 
        flex-direction:column; 
        align-items:center;
    }
    #statuscafe-username {
        font-size:large;
        margin-bottom: .5em;
        border:none;
        color:white;
        margin:.5em;
    }
    #statuscafe-content {
        font-size:x-large;
        border:none;
        color:white;
        margin:.5em;
    }
    section div{
        border:none;
    }
    button{
        background:#111111;
        border-color:white; 
        border:single; 
        border-radius:10px; 
        margin:5px; 
        width:fit-content; 
        height:fit-content;
        min-width:250px;

        display:flex;
        flex-direction:column;
        justify-content:center;


        transition:background 0.5s;
    }
    button:hover{
        cursor:pointer;
        background:#444444;

        transition:background 0.5s;
    }
    .tag{
        border:none;
        border-radius:15px;
        width:fit-content;
        height:fit-content;
        background:#222222;
        white-space:nowrap;
        margin:3px;
    }
    .tag p{
        font-size:small;
        margin:0 5px 0 5px;
    }
    .tagContainer{
        width:100%;
        border:none;
        display:flex;
        flex-direction:row wrap;
        justify-content:center;
        overflow:scroll;
    }
    img{
        max-width:100%;
        height:auto;
    }
</style>