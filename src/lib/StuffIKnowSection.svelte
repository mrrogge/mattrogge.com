<script lang="ts">
	import SectionContainer from '$lib/SectionContainer.svelte';
	import SkillBadge from './skills/SkillBadge.svelte';
	import type { SkillEntry } from './skills/skills';

	const technologies: readonly SkillEntry[] = [
		{ desc: 'PLC programming', level: 'EXPERT' },
		{ desc: 'HMI programming', level: 'EXPERT' },
		{ desc: 'Control system design', level: 'INTERMEDIATE' },
		{ desc: 'Drive configuration', level: 'INTERMEDIATE' },
		{ desc: 'SQL/DB administration', level: 'EXPERT' }
	] as const;

	const products: readonly SkillEntry[] = [
		{ desc: 'Rockwell products', level: 'EXPERT' },
		{ desc: 'Siemens products', level: 'EXPERT' },
		{ desc: 'Mitsubishi/MELSEC products', level: 'DABBLED' },
		{ desc: 'IA Ignition', level: 'EXPERT' },
		{ desc: 'B&R HMIs', level: 'EXPERT' }
	];

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

<SectionContainer class="flex flex-col gap-2">
	<h2 class="text-4xl text-center">STUFF I KNOW</h2>
	<h3 class="text-3xl">Technologies</h3>
	<div class="flex flex-row flex-wrap">
		{#each technologies as technology}
			<SkillBadge skill={technology} />
		{/each}
	</div>
	<h3 class="text-3xl">Products</h3>
	<div class="flex flex-row flex-wrap">
		{#each products as product}
			<SkillBadge skill={product} />
		{/each}
	</div>
</SectionContainer>
