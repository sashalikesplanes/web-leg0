<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	import PostPreview from '$lib/components/post-preview.svelte';
</script>

<svelte:head>
	<title>Blog Posts [{data.tag}] | WebLeg0</title>
	<meta
		name="description"
		content="All the blog posts which have been published by Alexander Kiselev on WebLeg0 containing the tag - {data.tag}"
	/>
</svelte:head>

<h1>Blog Posts tagged as <span class="underline">{data.tag}</span></h1>
<PostPreview tag={data.tag} />
