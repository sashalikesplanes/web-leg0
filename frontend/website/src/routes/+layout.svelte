<script>
	import '../app.postcss';
	import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/footer.svelte';
</script>

<div class="max-w-[850px] h-full vflex m-auto w-[97.5%]">
	<Header />
	<main class="vflex">
		<div class="divider" />
		<slot />
		<div class="divider" />
	</main>
	<Footer />
</div>
