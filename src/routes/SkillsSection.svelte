<script lang="ts">
	import type { SkillEntry } from '../skills';
	import SkillBadge from './SkillBadge.svelte';
	import SkillSelector from './SkillSelector.svelte';

	let selectedSkill: 1 | 2 | 3 = 1;

	const industrialSkills: readonly SkillEntry[] = [
		{ desc: 'PLC programming', level: 'EXPERT' },
		{ desc: 'HMI programming', level: 'EXPERT' },
		{ desc: 'Control system design', level: 'INTERMEDIATE' },
		{ desc: 'Rockwell products', level: 'EXPERT' },
		{ desc: 'Siemens products', level: 'EXPERT' },
		{ desc: 'Mitsubishi/MELSEC products', level: 'DABBLED' },
		{ desc: 'Drive configuration', level: 'INTERMEDIATE' },
		{ desc: 'IA Ignition', level: 'EXPERT' },
		{ desc: 'B&R HMIs', level: 'EXPERT' },
		{ desc: 'SQL/DB administration', level: 'EXPERT' }
	] as const;

	const langs: readonly SkillEntry[] = [
		{ desc: 'python', level: 'EXPERT' },
		{ desc: 'javascript', level: 'EXPERT' },
		{ desc: 'lua', level: 'EXPERT' },
		{ desc: 'C', level: 'INTERMEDIATE' },
		{ desc: 'C++', level: 'INTERMEDIATE' },
		{ desc: 'haxe', level: 'INTERMEDIATE' },
		{ desc: 'rust', level: 'INTERMEDIATE' },
		{ desc: 'pascal', level: 'EXPERT' },
		{ desc: 'bash', level: 'INTERMEDIATE' },
		{ desc: 'elixir', level: 'DABBLED' },
		{ desc: 'go', level: 'DABBLED' },
		{ desc: 'haskell', level: 'DABBLED' },
		{ desc: 'scala', level: 'DABBLED' }
	] as const;
</script>

<div class="p-16 flex flex-col gap-2 border">
	<div class="flex flex-row justify-between align-top gap-12">
		<div class="w-1/3">
			<SkillSelector {selectedSkill} onSelect={(index) => (selectedSkill = index)} />
		</div>
		<div class="w-2/3 flex flex-col gap-4">
			{#if selectedSkill === 1}
				<div class="text-2xl">Industrial Automation: the catalyst</div>
				<p>
					While studying electrical engineering at the University of Minnesota, I started my
					controls engineering career as a co-op student with PaR Systems. This led to a full-time
					position where I honed my skills in system design and PLC programming.
				</p>
				<p>
					I've had the pleasure of working on many fascinating industrial systems throughout my
					career thus far. I strive to cast a wide net, learning about a variety of applications and
					technologies. Aerospace, adhesive materials, food processing and packaging, fluid
					handling...even pig farming!
				</p>
				<p>These are a few of the technologies I'm most familiar with:</p>
				<div class="flex flex-row flex-wrap gap-4">
					{#each industrialSkills as skill}
						<SkillBadge {skill} />
					{/each}
				</div>
				<p>Here are some of my most notable projects and achievements:</p>
				<div class="flex flex-row gap-2">
					<div class="w-1/4">GRACO IND SDKs</div>
					<div class="w-3/4">
						<ul class="list-disc list-inside">
							<li>
								Spearheaded the Software Development Kit (SDK) project for integrators. These
								provided standardized code blocks and examples for controlling Graco products over a
								fieldbus connection (e.g. from a PLC). 6 different products are supported across
								both Rockwell and Siemens PLCs. Research showed these saved integrators 2-6 weeks of development time per project.
							</li>
							<li>
								Created a custom build system for reproducing SDKs deterministically. This CLI tool
								used Rockwell's ACM console software to generate .ACD files from an ACM project.
							</li>
							<li>
								Programmed a parser for Siemen's SCL language that generates human-friendly
								documentation (think doxygen for PLCs).
							</li>
							<li>Led various trainings and demostrations, including two hour-long sessions at the Annual Integrator Symposium.</li>
						</ul>
					</div>
				</div>
				<div class="flex flex-row gap-2">
					<div class="w-1/4">GRACO CEO Award recipient 2021</div>
					<div class="w-3/4">Given to those who demostrate high-quality work as recognized by their peers.</div>
				</div>
				<div class="flex flex-row gap-2">

				</div>
			{:else if selectedSkill === 2}
				<div class="text-2xl">Programming: the pillar</div>
				<p>
					Since my early childhood when I started writing BASIC on my mom's computer, I've been
					obsessed with programming! There's nothing like solving a complex problem using
					beautifully-written and well-organized code.
				</p>
				<p>
					My peers have called me a "programming polyglot" due to the many different languages I've
					explored:
				</p>
				<div class="flex flex-row flex-wrap gap-4">
					{#each langs as langEntry}
						<SkillBadge skill={langEntry} />
					{/each}
				</div>
			{:else if selectedSkill === 3}
				<div class="text-2xl">Design: the glue</div>
				<p>
					Learned through necessity; maintained through passion. While not formally trained in
					design, I've learned a lot on job designing HMIs, SCADA systems, and web/mobile frontends.
					My style tends to be pragmatic and functional, but I still like to keep it <span
						class="inline-block p-2 transform-gpu skew-x-12 -skew-y-3 italic font-mono font-semibold rounded-bl-xl rounded-tr-xl bg-gradient-to-r from-amber-300 to-sky-300 text-slate-950"
						>fun</span
					>.
				</p>
			{/if}
		</div>
	</div>
</div>
