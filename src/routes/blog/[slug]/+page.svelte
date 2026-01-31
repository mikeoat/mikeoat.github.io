<script lang="ts">
    import { marked } from "marked";

    let { data } = $props();
</script>

<svelte:head><title>{data.post?.title}</title></svelte:head>

<main>
    <h3>{data.post?.slug}</h3>
    {@html marked(Object.values(data.post?.content as Object)[0] as string)}
</main>

<p>want me in your inbox? <a href="https://buttondown.com/mote">subscribe to my newsletter!</a> if you'd rather an rss feed, you can <a href="https://kill-the-newsletter.com/">kill my newsletter</a></p>

<div style="height:100px"></div>

<style>
    main{
        display:flex;
        flex-direction:column;
        margin-bottom:70px;
        justify-content: center;
    }
    :global(h1){
        font-size:1000%;
    }
    :global(h2){
        font-size:50px;
    }
    :global(p, ol, ul){
        line-height: 150%;
        margin: 0 30% 0 30%;
        text-align:left;
    }
    :global(ol, ul){
        background-color:#111;
        padding-top:10px;
        padding-bottom:10px;
    }
    :global(ul){
        list-style-type:square;
        align-self:center;
        justify-self: center;
        min-width:40%;
    }
    :global(img){
        display:block;
        margin:auto;
    }
    @media (width < 1200px){
        :global(h1){
            font-size:500%;
        }
        :global(p, ol, ul){
            line-height: 150%;
            padding-right:0;
            margin: 8px;
            text-align:left;
        }
    }
</style>