<script>
	import '../app.postcss';
	import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/footer.svelte';
</script>

<div class="max-w-[850px] h-full flex flex-col m-auto w-[97.5%]">
	<Header />
	<slot />
	<Footer />
</div>
