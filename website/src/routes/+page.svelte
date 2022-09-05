<script lang="ts">
	import PostPreview from '$lib/components/post-preview.svelte';
import Projects from './projects.svelte';
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
<Projects/>
