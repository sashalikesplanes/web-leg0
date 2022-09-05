<script>
import AboutMe from "../about-me.svelte";
import Projects from "../projects.svelte";

</script>
<svelte:head>
	<title>About Me | WebLeg0</title>
	<meta
		name="description"
		content="Alexander Kiselev is a full stack software engineer. Read about him, their education, their experience and his projects."
	/>
</svelte:head>

<h1>About</h1>
<AboutMe/>
<div class="divider"></div>
<h2>Skills</h2>
<ul class="list-inside list-disc">
  <li><h4 class="inline">Languages: </h4>TypeScript, JavaScript, Python, SQL, HTML, CSS, LaTeX</li>
  <li><h4 class="inline">Frameworks/Libraries: </h4>SvelteKit, Svelte, Node.js, Express, PyTorch, Numpy, Scipy, Pandas, PostgreSQL, Tailwind CSS</li>
  <li><h4 class="inline">Platforms: </h4>Google Cloud Platform, Digital Ocean, Supabase</li>
  <li><h4 class="inline">Tools: </h4>nginx, Jupyter Notebooks, Vim, VSCode, Linux, MacOS, CLI</li>
  <li><h4 class="inline">Soft Skills: </h4>Leadership, technical communication, just-in-time learning, independent problem solving,
technical mentoring</li>
</ul>
<div class="divider"></div>
<h2>Education</h2>
<ul class="list-inside list-disc">
  <li><h3 class="inline-block">BSc Aerospace Engineering, TU Delft, Netherlands (09/19 - 02/23)</h3>
    <ul class="ml-6 list-inside list-disc">
      <li>GPA: 8.5/10 (Cum Laudae)</li>
      <li>Honours Program, Independent Research Paper - Neural Network Classification of Human Inputs</li>
      <li>Bachelor Thesis - Prelimanary Design Tool for a Hydrogen Seagoing Aircraft</li>
  </li>
  <li><h3 class="inline-block">Core Cirriculum, Launch School, Online (01/22 - 08/22)</h3>
</ul>
<div class="divider"></div>
<h2>Experiences</h2>
<ul class="list-inside list-disc">
  <li><h3 class="inline-block">Junior Risk Analyst, SnapSwap S.A, Luxembourg (01/21 - 09/22)</h3></li>
  <li><h3 class="inline-block">Freelance web developer / domain management, Futoripinativo, Portugal (02/22 - 07/22)</h3>
</ul>
<div class="divider"></div>
<h2>Notable Achievements</h2>
<div class="divider"></div>
<Projects/>
<div class="divider"></div>
<a class="text-accent text-center underline" href="./CV_Alexander_Kiselev.pdf"><h2>Latest CV</h2></a>
