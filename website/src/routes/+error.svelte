<script>
	import { page } from '$app/stores';
</script>

<svelte:head>
  <title>Error | WebLeg0</title>
</svelte:head>
<h2 class="text-center">{$page.status}</h2>
<h4 class="text-center">{$page.error.message}</h4>

<img class="w-48 mx-auto mask mask-squircle" src="error.gif" alt="Person enjoy a rave too much">
