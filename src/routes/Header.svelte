<script lang="ts">
	import { Styles } from "../styles";

</script>

<div
	class="h-screen flex flex-col justify-center items-center"
>
	<div
		class={`flex flex-row justify-center min-w-[50%] backdrop-blur-sm drop-shadow-2xl rounded-2xl pt-20 pb-20 pl-8 pr-8 ${Styles.panelGradient}`}
	>
		<div class="text-7xl lg:text-9xl align-text-top font-extralight">I'M</div>
		<div class="flex flex-col justify-between pt-1 lg:pt-4">
			<div class="">
				<span class="text-2xl lg:text-5xl text-sky-800 font-bold">MATT ROGGE</span>
				<span class="text-xl lg:text-5xl">.</span>
			</div>
			<div class="flex-1 border-t-2 translate-y-1/2 border-slate-600" />
			<div class="flex flex-col justify-end">
				<div class="text-lg lg:text-4xl lg:pb-1">
					all about <span class="underline text-sky-800 font-bold">programming</span>.
				</div>
			</div>
		</div>
	</div>
</div>
