<script lang="ts">
	import type { SkillEntry } from '../skills';
	import { Styles } from '../styles';

	export let skill: SkillEntry;

	const gradientClasses = "bg-gradient-to-b from-zinc-50 to-zinc-300";
</script>

<div class={`flex flex-row gap-1 ${gradientClasses} drop-shadow-sm rounded-lg pl-1 text-sm lg:text-md`}>
	<div class="p-1 font-mono font-semibold">{skill.desc}</div>
	<div
		class="border-l border-slate-600 rounded-r-lg p-1 bg-gradient-to-r via-30%"
		class:from-yellow-400={skill.level === 'EXPERT'}
		class:via-yellow-100={skill.level === 'EXPERT'}
		class:to-yellow-400={skill.level === 'EXPERT'}
		class:from-blue-300={skill.level === 'INTERMEDIATE'}
		class:via-blue-100={skill.level === 'INTERMEDIATE'}
		class:to-blue-300={skill.level === 'INTERMEDIATE'}
		class:from-indigo-300={skill.level === 'DABBLED'}
		class:via-indigo-100={skill.level === 'DABBLED'}
		class:to-indigo-300={skill.level === 'DABBLED'}
	>
		{skill.level}
	</div>
</div>
