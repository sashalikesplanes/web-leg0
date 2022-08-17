<script lang="ts">
	import type { PageData } from './$types';
	import Highlight from 'svelte-highlight';
	import typescript from 'svelte-highlight/languages/typescript';
	import html from 'svelte-highlight/languages/vbscript-html';
	import bash from 'svelte-highlight/languages/bash';
	import highlightTheme from 'svelte-highlight/styles/a11y-dark';
	import { getPost } from '$lib/api';
	import timestampToString from '$lib/utils/timestamp-to-string';

	export let data: PageData;
	const postPromise = getPost(data.urlTitle);
</script>

<svelte:head>
	<title>{data.title} | WebLeg0</title>
	<!-- TODO -->
	<meta name="description" content="TODO" />
	{@html highlightTheme}
</svelte:head>

{#await postPromise}
	<p>Loading post...</p>
{:then post}
	<article class="vflex">
		<header class="flex flex-row flex-wrap gap-4">
			<h1 class="basis-full">{post.title}</h1>
			<h5>{timestampToString(post.date_timestamp)}</h5>
			{#each post.tags as tag}
				<a href="/blog/tags/{tag}" class="badge">{tag}</a>
			{/each}
		</header>
    {@html post.html_content} 
	</article>
{:catch e}
	<p>{e.message}</p>
{/await}
