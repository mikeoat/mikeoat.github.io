<script lang="ts">
    import AudioPlayer from './components/AudioPlayer.svelte';
    import { projects } from './data.js';

    const sortedProjects = projects.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
</script>

<h1>projects</h1>
<main>
    {#each sortedProjects as project}
        {#if project.link}
            <section>
                <div class="title">
                    <button class="see-project" onclick={() => {window.location.href=project.link}}>
                        <h2><svg width="40"height="40"viewBox="0 0 24 17"fill="none"xmlns="http://www.w3.org/2000/svg"><path d="M14.8284 12L16.2426 13.4142L19.071 10.5858C20.6331 9.02365 20.6331 6.49099 19.071 4.9289C17.509 3.3668 14.9763 3.3668 13.4142 4.9289L10.5858 7.75732L12 9.17154L14.8284 6.34311C15.6095 5.56206 16.8758 5.56206 17.6568 6.34311C18.4379 7.12416 18.4379 8.39049 17.6568 9.17154L14.8284 12Z"fill="currentColor"/><path d="M12 14.8285L13.4142 16.2427L10.5858 19.0711C9.02372 20.6332 6.49106 20.6332 4.92896 19.0711C3.36686 17.509 3.36686 14.9764 4.92896 13.4143L7.75739 10.5858L9.1716 12L6.34317 14.8285C5.56212 15.6095 5.56212 16.8758 6.34317 17.6569C7.12422 18.4379 8.39055 18.4379 9.1716 17.6569L12 14.8285Z" fill="currentColor"/><path d="M14.8285 10.5857C15.219 10.1952 15.219 9.56199 14.8285 9.17147C14.4379 8.78094 13.8048 8.78094 13.4142 9.17147L9.1716 13.4141C8.78107 13.8046 8.78107 14.4378 9.1716 14.8283C9.56212 15.2188 10.1953 15.2188 10.5858 14.8283L14.8285 10.5857Z" fill="currentColor"/></svg>{project.title}</h2>
                    </button>
                    <h3>{project.date}</h3>
                </div>
                <div class="content">
                    <p style="text-align:right; margin-right:0px; margin-bottom:8px;">{@html project.blurb}</p>
                    <div style="margin-bottom:8px; padding-right:8px; display:flex; justify-content:right; flex-wrap:wrap;">
                        {#each project.tags as tag}
                            <p class="tag">{tag}</p>
                        {/each}
                    </div>
                </div>
            </section>
        {:else}
            <section>
                <div class="title">
                    <div class="see-project">
                        <AudioPlayer title={project.title} src={project.src}></AudioPlayer>
                    </div>
                    <h3 >{project.date}</h3>
                </div>
                <div class="content">
                    <p style="text-align:right; margin-right:0px; margin-bottom:8px;">{@html project.blurb}</p>
                    <div style="margin-bottom:8px; padding-right:8px; display:flex; justify-content:right; flex-wrap:wrap;">
                        {#each project.tags as tag}
                            <button class="tag">{tag}</button>
                        {/each}
                    </div>
                </div>
            </section>
        {/if}
    {/each}
</main>

<style>
    main{
        display:flex;
        flex-direction:column;
        align-items:center;
        padding-bottom:70px;
    }
    section{
        width:70%;
        margin:8px;

        display:flex;
        flex-direction:row;
        justify-content:space-between;

        background-color:#111;
        border:double white;
        border-radius:8px;
    }
    .title{
        min-width:40%;
        margin:8px;
        text-align:left;
        
        display:flex;
        flex-direction:column;
        justify-content:center;
    }
    .title h2, h3{
        text-align:left;
    }
    .content{
        padding-right:8px;
        display:flex;
        flex-direction:column;
        justify-content:flex-end;
        
    }
    .tag{
        font-family:monospace;
        color:white;
        font-size:large;

        border:none;
        background-color:#1D1D1D;
        margin:8px;
        padding:8px;
        display:inline-block;
        border-radius:8px;
        width:fit-content;
        height:fit-content;
        white-space:nowrap;
    }
    /* .tag:hover{
        cursor: crosshair;
        background-color:#AAA;
    } */
    .see-project{
        border:none;
        background-color:transparent;
        
        margin:8px;
        padding:8px;
        display:inline-block;
        border-radius:8px;
    }
    button:hover{
        cursor:pointer;
    }
    .see-project h2, svg {
        color: #6699CC;
    }
    @media (width < 600px){
        button{
            width: 100%;
        }
        section{
            flex-direction:column;
            width:100%;
        }
    }
</style>