<script lang="ts">
	import AnimTypedText from './AnimTypedText.svelte';
	import SectionContainer from './SectionContainer.svelte';

	const strings = [
		'automation',
		'industrial controls',
		'programming',
		'engineering',
		'public speaking',
		'user experience',
		'music',
		'game design'
	];
</script>

<div class="h-screen flex flex-row justify-center items-center px-2">
	<SectionContainer
		class="flex-1 flex flex-row justify-center items-center max-w-screen-sm min-h-[30%]"
	>
		<div class="flex-1 flex flex-row justify-center items-start gap-2">
			<div class="flex-1 flex flex-col justify-center gap-1">
				<div class="text-center text-[10vw] leading-[10vw] sm:text-[3.5rem] sm:leading-[3.5rem]">
					I'm{' '}<span class="inline text-sky-800 font-bold">MATT ROGGE</span>.
				</div>
				<div class="border-t translate-y-1/2 border-slate-600" />
				<div
					class="text-center text-[7vw] leading-[7vw] sm:text-[2.8rem] sm:leading-[2.8rem]"
				>
					I'm all about{' '}
					<span class="text-sky-800 font-bold block"><AnimTypedText {strings} />.</span>
				</div>
			</div>
		</div>
	</SectionContainer>
</div>
