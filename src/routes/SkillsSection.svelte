<script lang="ts">
	import type { SkillEntry } from '../skills';
	import SkillBadge from './SkillBadge.svelte';
	import SkillSelector from './SkillSelector.svelte';
	import GracoLogo from '$lib/img/graco_logo.svg';
	import ProjectCard from './ProjectCard.svelte';
	import { Styles } from '../styles';

	let selectedSkill: 1 | 2 | 3 = 3;

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

<div class={`relative p-6 pt-6 mt-1 flex flex-col gap-6 border rounded-xl text-slate-600 ${Styles.panelGradient} ${Styles.text1}`}>
	<p class="text-4xl font-semibold text-center w-1/3">SKILLS</p>
	<div class="md:hidden max-w-[450px] sticky top-0 rounded-xl bg-zinc-50">
		<SkillSelector {selectedSkill} onSelect={(index) => (selectedSkill = index)} />
	</div>
	<div class="flex flex-row justify-between align-top gap-12 min-h-[575px]">
		<div class="hidden md:block w-1/3 ">
			<SkillSelector {selectedSkill} onSelect={(index) => (selectedSkill = index)} />
		</div>
		<div class="md:w-2/3">
			<div class="flex flex-col gap-4">
				{#if selectedSkill === 1}
				<div class="flex flex-col gap-4">
					<div class="text-2xl font-semibold">Industrial Automation: the catalyst</div>
					<p>
						While studying electrical engineering at the University of Minnesota, I started my
						controls engineering career as a co-op student with PaR Systems. This led to a full-time
						position where I honed my skills in system design and PLC programming.
					</p>
					<p>
						I've had the pleasure of working on many fascinating industrial systems throughout my
						career thus far. I strive to cast a wide net, learning about a variety of applications
						and technologies. Aerospace, adhesive materials, food processing and packaging, fluid
						handling...even pig farming!
					</p>
					<p>These are a few of the technologies I'm most familiar with:</p>
					<div class="flex flex-row flex-wrap gap-4">
						{#each industrialSkills as skill}
							<SkillBadge {skill} />
						{/each}
					</div>
				</div>
				{:else if selectedSkill === 2}
				<div class="flex flex-col gap-4">
					<div class="text-2xl font-semibold font-mono">Programming: the pillar</div>
					<p>
						Since my early childhood when I started writing BASIC on my mom's computer, I've been
						obsessed with programming! There's nothing like solving a complex problem using
						beautifully-written and well-organized code.
					</p>
					<p>
						My peers have called me a "programming polyglot" due to the many different languages
						I've explored:
					</p>
					<div class="flex flex-row flex-wrap gap-4">
						{#each langs as langEntry}
							<SkillBadge skill={langEntry} />
						{/each}
					</div>
				</div>
				{:else if selectedSkill === 3}
				<div class="flex flex-col gap-4">
					<div class="text-2xl font-semibold font-serif">Design: the glue</div>
					<p>
						Learned through necessity; maintained through passion. While not formally trained in
						design, I've learned a lot on job designing HMIs, SCADA systems, and web/mobile
						frontends. My style tends to be pragmatic and <span class="font-mono">functional</span>, but I still like to keep it <span
							class="inline-block p-2 transform-gpu skew-x-12 -skew-y-3 italic font-mono font-semibold rounded-bl-xl rounded-tr-xl bg-gradient-to-r from-amber-300 to-sky-300 text-slate-950"
							>fun</span
						>.
					</p>
					<div class="flex flex-row justify-center bg-zinc-50 drop-shadow-sm border rounded-lg p-6 gap-12">
						<div class="">
							<img
								src="src/lib/img/gtrack-graph.png"
								class="h-[25rem]"
								alt="screenshot of Graco Tracking mobile application"
							/>
						</div>
						<div class="flex flex-col gap-4">
							<div>
								<img
									src="src/lib/img/2k-hmi-controls.png"
									class="h-[12rem]"
									alt="screenshot of Graco 2K HMI application"
								/>
							</div>
							<div>
								<img
									src="src/lib/img/the-glue-recursive.png"
									class="h-[12rem]"
									alt="recursive screenshot of this website"
								/>
							</div>
						</div>
					</div>
				</div>
				{/if}
			</div>
		</div>
	</div>
</div>
