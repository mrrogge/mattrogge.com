<script lang="ts">
	import type { SkillEntry } from './skills';
	import SkillBadge from './SkillBadge.svelte';
	import SkillSelector from './SkillSelector.svelte';
	import HmiControlsImg from '$lib/assets/2k-hmi-controls.png';
	import GTrackImg from '$lib/assets/gtrack-graph.png';
	import SiteRecursiveImg from '$lib/assets/the-glue-recursive.png';
	import SectionContainer from '../SectionContainer.svelte';

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
		{ desc: 'haxe', level: 'EXPERT' },
		{ desc: 'rust', level: 'INTERMEDIATE' },
		{ desc: 'pascal', level: 'EXPERT' },
		{ desc: 'bash', level: 'INTERMEDIATE' },
		{ desc: 'elixir', level: 'DABBLED' },
		{ desc: 'go', level: 'DABBLED' },
		{ desc: 'haskell', level: 'DABBLED' },
		{ desc: 'scala', level: 'DABBLED' }
	] as const;
</script>

<SectionContainer class="flex flex-col relative">
	<p class="sticky md:block top-0 z-20 text-4xl font-semibold text-center w-1/3">SKILLS</p>
	<div class="md:hidden max-w-[450px] sticky top-16 rounded-xl bg-zinc-50 z-10">
		<div class="bg-zinc-100 drop-shadow-lg rounded-xl p-1">
			<SkillSelector {selectedSkill} onSelect={(index) => (selectedSkill = index)} />
		</div>
	</div>
	<div class="flex flex-row justify-between align-top gap-12 min-h-[575px]">
		<div class="hidden md:block w-1/3">
			<div class="bg-zinc-100 drop-shadow-lg rounded-xl p-1">
				<SkillSelector {selectedSkill} onSelect={(index) => (selectedSkill = index)} />
			</div>
		</div>
		<div class="md:w-2/3">
			<div class="flex flex-col gap-4">
				{#if selectedSkill === 1}
					<div class="flex flex-col gap-4">
						<div class="text-2xl font-semibold">Industrial Automation: the catalyst</div>
						<p>
							While studying electrical engineering at the University of Minnesota, I started my
							controls engineering career as a co-op student with PaR Systems. This led to a
							full-time position where I honed my skills in system design and PLC programming.
						</p>
						<p>
							I've had the pleasure of working on many fascinating industrial systems throughout my
							career thus far. I strive to cast a wide net, learning about a variety of applications
							and technologies. Past projects have included Aerospace, adhesive materials, food
							processing and packaging, fluid handling...even pig farming!
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
							Since my early childhood when I started writing BASIC on my parents' home computer,
							I've been obsessed with programming! There's nothing like solving a complex problem
							using beautifully-written and well-organized code.
						</p>
						<p>
							I've been called a "programming polyglot" by my peers due to variety of languages I've
							explored:
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
							While not formally trained in design, I've learned a lot on the job designing HMIs,
							SCADA systems, and web/mobile frontends. Through this experience, I developed a
							passion for crafting creative user interfaces.
						</p>
						<p>
							My style tends to be pragmatic and <span class="font-mono">functional</span>, but I
							still like to keep it
							<span
								class="inline-block p-2 transform-gpu skew-x-12 -skew-y-3 italic font-mono font-semibold rounded-bl-xl rounded-tr-xl bg-gradient-to-r from-amber-300 to-sky-300 text-slate-950"
								>fun</span
							>.
						</p>
						<div class="carousel items-center h-[40lvh] bg-black/20 rounded-lg">
							<div id="design-example1" class="carousel-item w-full h-full relative flex justify-center">
								<img
									src={GTrackImg}
									class="object-contain w-full max-w-lg p-2 drop-shadow-lg rounded-lg"
									alt="screenshot of Graco Tracking mobile application"
								/>
								<div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
									<a href="#design-example3" class="btn btn-circle">{"<"}</a>
									<a href="#design-example2" class="btn btn-circle">{">"}</a>
								</div>
							</div>
							<div id="design-example2" class="carousel-item w-full h-full relative flex justify-center">
								<img
									src={HmiControlsImg}
									class="object-contain w-full max-w-lg p-2 drop-shadow-lg rounded-lg"
									alt="screenshot of Graco 2K HMI application"
								/>
								<div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
									<a href="#design-example1" class="btn btn-circle">{"<"}</a>
									<a href="#design-example3" class="btn btn-circle">{">"}</a>
								</div>
							</div>
							<div id="design-example3" class="carousel-item w-full h-full relative flex justify-center">
								<img
									src={SiteRecursiveImg}
									class="object-contain w-full max-w-lg p-2 drop-shadow-lg rounded-lg"
									alt="recursive screenshot of this website"
								/>
								<div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
									<a href="#design-example2" class="btn btn-circle">{"<"}</a>
									<a href="#design-example1" class="btn btn-circle">{">"}</a>
								</div>
							</div>
						</div>
					</div>
				{/if}
			</div>
		</div>
	</div>
</SectionContainer>
