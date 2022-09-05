<script lang="ts">
	import PostPreview from '$lib/components/post-preview.svelte';
</script>

<svelte:head>
	<title>WebLeg0</title>
	<meta
		name="description"
		content="A blog about all things software engineering by Alexander Kiselev"
	/>
</svelte:head>

<h1>Alexander Kiselev, a builder of a better future.</h1>
<div class="mockup-code">
	<pre data-prefix="$"><span>Bringing order to chaos one brick at a time...</span></pre>
</div>
<p>
	A full stack software engineer striving to build the better tomorrow. Open to opportunities to join an exciting project on a mission to make an impact and improve the world.
</p>
  <p>
	This blog is a documentation of the journey into web development, explaining complex concepts simply, and showing how they can be put together - like Lego bricks.
</p>
<div class="divider" />
<h2>Latest Posts</h2>
<PostPreview limit={5} />
<div class="divider" />
<h2>Projects</h2>
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
