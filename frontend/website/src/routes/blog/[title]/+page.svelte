<script lang="ts">
	import type { PageData } from './$types';
	import Highlight from 'svelte-highlight';
	import typescript from 'svelte-highlight/languages/typescript';
	import html from 'svelte-highlight/languages/vbscript-html';
	import bash from 'svelte-highlight/languages/bash';
	import highlightTheme from 'svelte-highlight/styles/a11y-dark';

	export let data: PageData;
</script>

<svelte:head>
	<title>{data.title} | WebLeg0</title>
	<!-- TODO -->
	<meta name="description" content="TODO" />
	{@html highlightTheme}
</svelte:head>

<article class="vflex">
	<header class="flex flex-row flex-wrap gap-4">
		<h1 class="basis-full">{data.title}</h1>
		<h5>5/11/2022</h5>
		<a href="/blog/tags/javascript" class="badge">javascript</a>
		<a href="/blog/tags/css" class="badge">css</a>
		<a href="/blog/tags/nodejs" class="badge">nodejs</a>
	</header>
	<h2>H2 heading</h2>
	<h3>H3 heading</h3>
	<h4>H4 heading</h4>
	<h5>H5 heading</h5>
	<p>
		Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
		the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
		of type and scrambled it to make a type specimen book. It has survived not only five centuries,
		but also the leap into electronic <a href="https://google.com">Google</a> typesetting, remaining
		essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
		Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including
		versions of Lorem Ipsum.
	</p>
	<Highlight
		language={html}
		code={`<div>
  <p>Html code example</p>
</div>`}
	/>
	<Highlight
		language={typescript}
		code={`function hello() {
  console.log('world'); `}
	/>
	<Highlight language={bash} code={`echo "hello world"`} />
	<ol>
		<li>One</li>
		<li>with link <a href="https://google.com">Google</a></li>
	</ol>
	<ul>
		<li>test</li>
		<li>with code <code>snippet</code></li>
	</ul>

	<img src="https://assets.coderrocketfuel.com/css-article-image.png" />
	<blockquote class="alert alert-warning shadow-lg">
		Warning or a special message which we wish to stand out
	</blockquote>
</article>
