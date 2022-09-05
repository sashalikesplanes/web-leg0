<script lang="ts">
	export let tag: string | undefined = undefined;
	export let limit: number | undefined = undefined;
	export let detailed = false;
	import { getPosts } from '$lib/api';
	import timestampToString from '$lib/utils/timestamp-to-string';

	let postsPromise = getPosts(tag, limit);
</script>

{#await postsPromise}
	<p>Loading posts...</p>
{:then posts}
	{#each posts as post (post.title)}
		<div class="card w-full bg-base-200 hover:bg-base-100 shadow-xl">
			<a href="/blog/{post.url_title}" class="card-body">
				<div class="flex">
					<img
						src={post.thumbnail_image_url}
						alt="An icon for the post {post.title}"
						class="h-8 w-8 md:h-16 md:w-16"
					/>
					<span class="ml-4 flex-shrink card-title "><h2>{post.title}</h2></span>
				</div>
				{#if detailed}
					<h5 class="basis-full">{timestampToString(post.date_timestamp)}</h5>
				{/if}
			</a>
		</div>
	{:else}
		<p>No posts yet...</p>
	{/each}
{:catch e}
	<p>{e.message}</p>
{/await}
