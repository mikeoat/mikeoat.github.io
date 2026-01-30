<script lang="ts">
    let { data } = $props();
</script>

<h1>blog</h1>

<main>
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
</main>

<style>
    main{
        display:flex;
        flex-direction:column;
        justify-items: center;
        margin-bottom:72px;
    }
    section{
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
</style>