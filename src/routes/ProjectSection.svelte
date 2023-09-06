<script lang="ts">
	import ProjectCard from './ProjectCard.svelte';
</script>

<div class="p-16 mt-1 flex flex-col gap-2 border bg-zinc-100 rounded-md">
	<p class="text-4xl w-1/4 text-center font-semibold">PROJECTS / ACHIEVEMENTS</p>
	<ProjectCard>
		<div slot="image" class="flex flex-col">
			<img src="src/lib/img/graco_logo.svg" alt="Graco logo" />
			<div class="text-2xl text-center">SDK</div>
		</div>
		<ul class="list-disc list-inside">
			<li>
				Spearheaded the Software Development Kit (SDK) project for integrators. These provide
				standardized code blocks and examples for controlling Graco products over a fieldbus
				connection (e.g. from a PLC). 6 different products are supported across both Rockwell and
				Siemens PLCs. Research showed these saved integrators 2-6 weeks of development time per
				project.
			</li>
			<li>
				Created a custom build system for reproducing SDK releases. This CLI tool used Rockwell's
				ACM console software to generate .ACD files from an ACM project.
			</li>
			<li>
				Programmed a parser for Siemen's SCL language that generates human-friendly documentation
				(think doxygen for PLCs).
			</li>
			<li>
				Led various trainings and demostrations, including two hour-long sessions at the Annual
				Integrator Symposium.
			</li>
		</ul>
	</ProjectCard>
	<ProjectCard>
		<div slot="image" class="flex flex-col">
			<img src="src/lib/img/graco_logo.svg" alt="Graco logo" />
			<div class="text-xl text-center">CEO Award Winner 2021</div>
		</div>
		<div>
			Given to a select group of employees who consistently demonstrate outstanding performance and
			commitment to Graco's strategic initiatives.
		</div>
	</ProjectCard>
</div>
