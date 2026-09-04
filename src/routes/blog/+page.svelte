<script lang="ts">
    let { data } = $props();

    let innerHeight = $state(0);
    let innerWidth = $state(0);
</script>

<svelte:head><title>M.O.T.E.</title></svelte:head>
<svelte:window bind:innerHeight bind:innerWidth></svelte:window>

<h1><u>m</u>ike's <u>o</u>nline <u>t</u>hought <u>e</u>xpulsion</h1>

<p style="text-align:center;">would you rather read this in your inbox? <br><a href="https://buttondown.com/mote">subscribe to my newsletter!</a></p>
<iframe width=88px height=31px title="number go up" src="//incr.easrng.net/badge?key=motemikedotcom" style="display:block; margin:10px auto; background: url(//incr.easrng.net/bg.gif)"></iframe>

<main>
    {#if innerWidth > 1080}
        <iframe width="150" height="450" style="border:none" src="https://dogspit.nekoweb.org/sidelink.html" title="sidelink"></iframe>
    {:else}
        <iframe width="180" height="180" style="border:none; margin-bottom:10px;" src="https://dimden.neocities.org/navlink/" title="neolink"></iframe>
    {/if}
    <section>
        {#each data.summaries as { slug, title, content }}
        <a href="blog/{slug}">
            <div>
                <h3>{title}</h3>
                <p class="date">{slug}</p>
                <p class="preview">{(content as string).split('\n')[4].substring(0,50).replaceAll('#', '')}...</p>
            </div>
        </a>
        {/each}
    </section>
    {#if innerWidth > 1080}
    <iframe width="150" height="450" style="border:none" src="https://dogspit.nekoweb.org/sidelink.html" title="sidelink"></iframe>
    {:else}
        <iframe width="180" height="180" style="border:none; margin-bottom:10px;" src="https://dimden.neocities.org/navlink/" title="neolink"></iframe>
    {/if}
</main>

<style>
    main{
        display:flex;
        flex-direction:row;
        align-items:center;
        justify-items: center;
        margin-bottom:72px;
    }
    section{
        width:fit-content;
        display: grid;
		grid-template-columns: repeat(auto-fill, minmax(250px, 270px));
		gap: 20px;
		max-width: 80%;
		margin: 0 auto;
    }
    @keyframes grow {
        from {transform:scale(1.0); border-radius:8px;}
        to {transform:scale(1.1); border-radius:0px;}
    }
    div{
        border:double white;
        border-radius:8px;
        background-color: #111111;
        min-width:250px;
        height:fit-content;
        padding:8px;
        margin:8px;
        transition: 200ms;
    }
    div:hover{
        animation-name:grow;
        animation-timing-function: ease;
        animation-duration:200ms;
        transform:scale(1.1);
        border-radius:0px;
    }
    a{
        border-radius:8px;
        font-family:monospace;
        font-size:large;
        text-decoration: none;
    }
    .date{
        color: #AAA;
        text-decoration: none;
        text-align:center;
    }
    p,h3{
        margin:8px;
    }
    @media (width < 1080px){
        main{
            flex-direction:column;
        }
    }
</style>