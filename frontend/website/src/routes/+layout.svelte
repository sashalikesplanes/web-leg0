<script>
	import '../app.postcss';
	import Header from '$lib/components/header.svelte';
</script>

<Header />

<main class="max-w-[850px] m-auto w-[97.5%]">
<slot />
</main>
