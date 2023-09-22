<script lang="ts">
	import AnimTypedText from '../AnimTypedText.svelte';
	import { Styles } from '../styles';

	const shuffle = <T>(array: T[]) => {
		let currentIndex = array.length;
		let randomIndex: number;
		while (currentIndex > 0) {
			currentIndex--;
			randomIndex = Math.floor(Math.random() * currentIndex);
			[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
		}
	};
	const strings = [
		'programming',
		'automation',
		'game design',
		'retro gaming',
		'music',
		'public speaking',
		'user experience',
		'engineering',
		'industrial controls'
	];
	shuffle(strings);
</script>

<div class="h-screen flex flex-col justify-center items-center">
	<div
		class={`flex flex-row justify-center min-w-[50%] backdrop-blur-sm drop-shadow-2xl rounded-2xl pt-20 pb-20 pl-8 pr-8 ${Styles.panelGradient}`}
	>
		<div class="text-7xl lg:text-9xl align-text-top font-extralight">I'M</div>
		<div class="flex flex-col justify-between pt-1 lg:pt-4 lg:min-w-[500px]">
			<div class="">
				<span class="text-2xl lg:text-5xl text-sky-800 font-bold">MATT ROGGE</span>
				<span class="text-xl lg:text-5xl">.</span>
			</div>
			<div class="flex-1 border-t-2 translate-y-1/2 border-slate-600" />
			<div class="flex flex-col justify-end">
				<div class="text-lg lg:text-4xl lg:pb-1 min-h-[4rem] lg:min-h-0">
					all about{' '}
					<span class="underline text-sky-800 font-bold inline"><AnimTypedText {strings} /></span>.
				</div>
			</div>
		</div>
	</div>
</div>
