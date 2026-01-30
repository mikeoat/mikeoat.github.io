<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import { Tween } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing'
	import { goto } from '$app/navigation';
    import { onMount } from 'svelte';

	let { children } = $props();

	let selectedSize = new Tween(64.38333129882812, {duration: 400, easing: cubicOut});
	let selectedPosition = new Tween(0, {duration: 400, easing: cubicOut});

    let container: HTMLButtonElement[] = [];

	let navItems = [
		{url:"/",text:"home"},
		{url:"/about",text:"about"},
		{url:"/projects",text:"projects"},
		{url:"/blog",text:"blog"},
	];

	function assignElementsToArray(discreteElement: HTMLButtonElement, index: number) {
		container[index] = discreteElement;
	}
    
	function moveRectangle(index: number, navItem: {url: string, text: string}) {
		selectedSize.target = container[index].getBoundingClientRect().width;
		selectedPosition.target = container[index].getBoundingClientRect().left;
		goto(navItem.url);
	}

    onMount(() => {
        switch (window.location.pathname){
            case '/':
                moveRectangle(0, navItems[0]);
                break;
            case '/about':
                moveRectangle(1, navItems[1]);
                break;
            case '/portfolio':
                moveRectangle(2, navItems[2]);
                break;
            case '/blog':
                moveRectangle(3, navItems[3]);
                break;
        }
    });

</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<nav>
	<div class="selected-page" style="z-index:-1; position:fixed; width:{selectedSize.current}px; left:{selectedPosition.current}px;"></div>
	{#each navItems as navItem, i}
		<button {@attach (node) => {assignElementsToArray(node, i)}} onclick={() => moveRectangle(i, navItem)}>{navItem.text}</button>
	{/each}
</nav>

<style>
    :global(body) {
        background-color: #1D1D1D;
    }
    :global(h1, h2, h3, h4, h5){
        color: white;
        font-family: monospace;
        text-align: center;
		line-height: 100%;
    }
	:global(p, ol, ul){
		color: white;
        font-family: monospace;
		font-size:20px;
	}
	:global(a) {
		color: #6699CC;
	}
	:global(a:visited) {
		color: #CC99CC;
	}
	:global(h1){
        font-size:900%;
    }
    :global(h2){
        font-size:50px;
    }
	.selected-page{
		height:100%;
		background-color: #1D1D1D;
	}
    button{
		z-index:2;
        transition: transform 0.5s ease;
        padding:5px 40px;
        color:white;
		background-color: transparent;
        border:none;
		font-size:large;

		width:fit-content;
    }
    button:hover{
        transition: transform 0.5s ease;
        background-color: #00000044;
		cursor: pointer;
    }
    nav {
		z-index:2;
        background-color: #222222;
        display: flex;
        justify-content:space-between;
        width:100%;
        position: fixed;
        color: white;
        font-family: monospace;
        right: 0;
        bottom: 0;
        text-align: center;
        font-size: 1.5em;
    }
	@media (max-width:600px) {
		:global(body){
			padding-top:72px;
		}
		:global(h1){
            font-size:500%;
        }
		button{
			z-index:2;
			transition: transform 0.5s ease;
			padding:5px 20px;
			color:white;
			background-color: transparent;
			border:none;
			font-size:large;
			height:70px;
		}
		nav {
			bottom:auto;
			top:0;
			height:70px;
		}
		.selected-page{
			height:70px;
		}
	}
</style>

{@render children?.()}
