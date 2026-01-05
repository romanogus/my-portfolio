<script>
	import SideNav from "$lib/components/layout/SideNav.svelte";
	import About from "$lib/components/sections/Experience.svelte";
	import Contact from "$lib/components/sections/Contact.svelte";
	import Hero from "$lib/components/sections/About.svelte";
	import Projects from "$lib/components/sections/Projects.svelte";
</script>

<div class="container mx-auto">
	<div class="flex">
		<SideNav />
		<main class="text-white mt-24 mr-36 min-h-screen">
			<Hero />
			<About />
			<Projects />
			<Contact />
		</main>
	</div>
</div>
