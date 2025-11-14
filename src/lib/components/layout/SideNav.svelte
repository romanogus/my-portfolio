<script lang="ts">
	import profilePic from "$lib/assets/images/profile.png";
</script>

<aside
	class="sticky top-24 w-2xl h-full flex flex-col gap-12 items-center mt-24 mx-48 text-white"
>
	<header class="flex flex-col gap-8 w-full items-center">
		<img
			alt="profile pic"
			class="size-36 rounded-full"
			draggable={false}
			oncontextmenu={(event) => event.preventDefault()}
			ondragstart={(event) => event.preventDefault()}
			src={profilePic}
		/>
		<div class="flex flex-col gap-2 text-center">
			<h1 class="font-semibold text-4xl">Gustavo Romano</h1>
			<h2 class="font-light text-xl">Frontend Software Engineer</h2>
		</div>
	</header>
	<nav>
		<ul class="flex flex-col gap-4 text-xl">
			<li>
				<a href="#about">About</a>
			</li>
			<li>
				<a href="#experience">Experience</a>
			</li>
			<li>
				<a href="#projects">Projects</a>
			</li>
		</ul>
	</nav>

	<div></div>
</aside>
