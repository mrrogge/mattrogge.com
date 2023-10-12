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
		'game design',
	];
</script>

<div class="h-screen flex flex-col justify-center items-center">
	<SectionContainer class="flex flex-row justify-center items-center min-w-[50%] min-h-[30%] py-8 px-6 gap-0 ">
		<div class="text-[25vw] lg:text-9xl align-text-top font-extralight min-h-20">I'M</div>
		<div class="flex-1 flex flex-col justify-center pt-1 lg:pt-4 min-w lg:min-w-[500px] min-h-20">
			<div class="">
				<span class="text-2xl text-[7vw] lg:text-5xl text-sky-800 font-bold">MATT ROGGE.</span>
			</div>
			<div class="flex-1 border-t-2 translate-y-1/2 border-slate-600" />
			<div class="flex flex-col justify-end">
				<div class="text-lg lg:text-4xl lg:pb-1 min-h-[4rem] lg:min-h-0">
					all about{' '}
					<span class="text-sky-800 font-bold inline"><AnimTypedText {strings} /></span>.
				</div>
			</div>
		</div>
	</SectionContainer>
</div>
