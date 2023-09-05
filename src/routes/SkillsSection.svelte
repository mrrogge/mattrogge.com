<script lang="ts">
	import SkillSelector from './SkillSelector.svelte';

	let selectedSkill: 1 | 2 | 3 = 1;

	type ExperienceLevel = 'EXPERT' | 'INTERMEDIATE' | 'DABBLED';
	type LangEntry = { lang: string; level: ExperienceLevel };

	const langs: readonly LangEntry[] = [
		{ lang: 'python', level: 'EXPERT' },
		{ lang: 'javascript', level: 'EXPERT' },
		{ lang: 'lua', level: 'EXPERT' },
		{ lang: 'C', level: 'INTERMEDIATE' },
		{ lang: 'C++', level: 'INTERMEDIATE' },
		{ lang: 'haxe', level: 'INTERMEDIATE' },
		{ lang: 'rust', level: 'INTERMEDIATE' },
		{ lang: 'pascal', level: 'EXPERT' },
		{ lang: 'bash', level: 'INTERMEDIATE' },
		{ lang: 'elixir', level: 'DABBLED' },
		{ lang: 'go', level: 'DABBLED' },
		{ lang: 'haskell', level: 'DABBLED' },
		{ lang: 'scala', level: 'DABBLED' }
	] as const;
</script>

<div class="p-16 flex flex-col gap-2 border">
	<div class="flex flex-row justify-between gap-12">
		<div class="relative flex-1">
			<SkillSelector {selectedSkill} onSelect={(index) => (selectedSkill = index)} />
		</div>
		<div class="flex-1 flex flex-col gap-4">
			{#if selectedSkill === 1}
				<div class="text-2xl">Industrial Automation: the catalyst</div>
				<p class="text-lg">
					While studying electrical engineering at the University of Minnesota, I started my
					controls engineering career as a co-op student with PaR Systems. This led to a full-time
					position where I honed my skills in system design and PLC programming.
				</p>
				<p class="text-lg">
					I've had the pleasure of working on many fascinating industrial systems throughout my
					career thus far. I strive to cast a wide net, learning about a variety of applications and
					technologies. Aerospace, adhesive materials, food processing and packaging, fluid
					handling...even pig farming!
				</p>
			{:else if selectedSkill === 2}
				<div class="text-2xl">Programming: the pillar</div>
				<p class="text-lg">
					Since my early childhood when I started writing BASIC on my mom's computer, I've been
					obsessed with programming! There's nothing like solving a complex problem using
					beautifully-written and well-organized code.
				</p>
				<p class="text-lg">
					My peers have called me a "programming polyglot" due to the many different languages I've
					explored:
				</p>
				<div class="flex flex-row flex-wrap gap-4">
					{#each langs as langEntry}
						<div class="flex flex-row gap-1 border border-slate-600 rounded-lg pl-1 bg-">
							<div class="p-1 font-mono">{langEntry.lang}</div>
							<div
								class="border-l border-slate-600 rounded-r-lg p-1 bg-gradient-to-r"
								class:from-yellow-400={langEntry.level === 'EXPERT'}
								class:via-yellow-100={langEntry.level === 'EXPERT'}
								class:to-yellow-400={langEntry.level === 'EXPERT'}
								class:from-blue-300={langEntry.level === 'INTERMEDIATE'}
								class:via-blue-100={langEntry.level === 'INTERMEDIATE'}
								class:to-blue-300={langEntry.level === 'INTERMEDIATE'}
								class:from-indigo-300={langEntry.level === 'DABBLED'}
								class:via-indigo-100={langEntry.level === 'DABBLED'}
								class:to-indigo-300={langEntry.level === 'DABBLED'}
							>
								{langEntry.level}
							</div>
						</div>
					{/each}
				</div>
			{:else if selectedSkill === 3}
				<div class="text-2xl">Design: the glue</div>
				<p class="text-lg">
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
