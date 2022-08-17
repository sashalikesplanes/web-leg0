<script lang="ts">
	import { onMount } from 'svelte';
	import { getPosts } from '$lib/api';
	import { error } from '@sveltejs/kit';
	import PostPreview from '$lib/components/post-preview.svelte';

</script>

<svelte:head>
  <title>WebLeg0</title>
  <meta name="description" content="A blog about all things software engineering by Alexander Kiselev"/>
</svelte:head>

<h1>
	Hello Web! I am Alexander Kiselev, a builder of the better future.
</h1>
<div class="mockup-code">
  <pre data-prefix="$"><code>Bringing order to chaos one brick at a time...</code></pre>
</div>
<p>
	A fullstack software engineer striving to build the better tomorrow. Currently looking for work.
	This blog is a documentation of my journey into web development.
</p>
<div class="divider" />
<h2>Latest Posts</h2>
<PostPreview limit={5} />
<div class="divider" />
<h2>My Projects</h2>
<div class="card w-full bg-base-200 hover:bg-base-100 shadow-xl">
	<div class="card-body">
		<h3 class="card-title">CudiZone</h3>
		<p>
			An online torrent streamer and video chat application with synronised playback between two
			parties. For people who wish to stream creative commons torrents together.
		</p>
		<div class="card-actions justify-end">
			<a href="/" disabled class="btn btn-primary">Demo</a>
			<a
				target="_blank"
				href="https://github.com/sashalikesplanes/cudi-zone"
				class="btn btn-primary">GitHub</a
			>
		</div>
	</div>
</div>
<div class="card w-full bg-base-200 hover:bg-base-100 shadow-xl">
	<div class="card-body">
		<h3 class="card-title">Preliminary Aircraft Design</h3>
		<p>
			A software model designed to solve for the optimal aircraft design given a set of constraints.
			The model iterates over all the considered aircraft subsystems updating their parameters in
			order to satisfy the constraints due to all other subsystems, until convergence.
		</p>
		<div class="card-actions justify-end">
			<a disabled class="btn btn-primary">GitHub</a>
		</div>
	</div>
</div>
