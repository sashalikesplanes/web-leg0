<script lang="ts">
	import type { PageData } from './$types';
	import Icon from '$lib/components/icon.svelte';
	export let data: PageData;
</script>

<div class="divider"/>
<h1>Blog Posts tagged as <span class="underline">{data.tag}</span></h1>
<div class="card w-full bg-base-200 hover:bg-base-300 shadow-xl">
	<a href="/blog" class="card-body flex-row flex-wrap">
		<Icon iconType="webrtc" classCss="h-8 w-8 md:h-16 md:w-16"/>
		<span class="ml-4 flex-shrink card-title "><h2>WebRTC Chat server with WebSockets</h2></span>
		<p class="basis-full text-primary">April 04th, 2022</p>
	</a>
</div>
<div class="divider"/>
