<script>
	import Icon from '$lib/components/icon.svelte';
</script>

<main class="flex flex-col gap-4">
	<div class="divider" />
	<h1 class="text-3xl font-bold">
		Hello Web! I am Alexander Kiselev, a builder of the better future.
	</h1>
	<p>
		A fullstack software engineer striving to build the better tomorrow. Currently looking for work.
		This blog is a documentation of my journey into web development.
	</p>
	<div class="divider" />
	<h2 class="text-2xl font-bold">Latest Posts</h2>
	<div class="card w-full bg-base-200 shadow-xl">
		<div class="card-body flex ">
			<a href="/blog" class="card-title">
				<Icon iconType="webrtc" classCss="h-10 w-10" />
				<span class="ml-4">WebRTC Chat server with WebSockets</span>
			</a>
		</div>
	</div>
	<div class="divider" />
	<h2 class="text-2xl font-bold">My Projects</h2>
	<div class="card w-full bg-base-200 shadow-xl">
		<div class="card-body">
			<h2 class="card-title">CudiZone</h2>
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
	<div class="card w-full bg-base-200 shadow-xl">
		<div class="card-body">
			<h2 class="card-title">Preliminary Aircraft Design</h2>
			<p>
				A software model designed to solve for the optimal aircraft design given a set of
				constraints. The model iterates over all the considered aircraft subsystems updating their
				parameters in order to satisfy the constraints due to all other subsystems, until
				convergence.
			</p>
			<div class="card-actions justify-end">
				<a disabled class="btn btn-primary">GitHub</a>
			</div>
		</div>
	</div>
	<div class="divider" />
</main>
