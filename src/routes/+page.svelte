<script lang="ts">
	import SkillSelector from './SkillSelector.svelte';

	let selectedSkill: 1 | 2 | 3 = 1;

	type ExperienceLevel = "EXPERT" | "INTERMEDIATE" | "DABBLED";
	type LangEntry = {lang: string, level: ExperienceLevel};

	const langs:readonly LangEntry[] = [
		{lang: "python", level: "EXPERT"},
		{lang: "javascript", level: "EXPERT"},
		{lang: "lua", level: "EXPERT"},
		{lang: "C", level: "INTERMEDIATE"},
		{lang: "C++", level: "INTERMEDIATE"},
		{lang: "haxe", level: "INTERMEDIATE"},
		{lang: "rust", level: "INTERMEDIATE"},
		{lang: "pascal", level: "EXPERT"},
		{lang: "bash", level: "INTERMEDIATE"},
		{lang: "elixir", level: "DABBLED"},
		{lang: "go", level: "DABBLED"},
		{lang: "haskell", level: "DABBLED"},
		{lang: "scala", level: "DABBLED"}

	] as const;
</script>

<div class="flex-1 flex flex-col">
	<div
		class="flex flex-row justify-center pt-24 pb-24 bg-[url('/src/lib/img/winter-city-view.png')] bg-cover bg-top"
	>
		<div
			class="flex flex-row justify-center backdrop-brightness-110 backdrop-blur-sm drop-shadow-2xl rounded-2xl p-8"
		>
			<div class="text-9xl align-text-top font-extralight text-slate-600">I'M</div>
			<div class="flex flex-col justify-between pt-4">
				<div class="flex-1">
					<span class="text-5xl text-sky-800 font-bold">MATT ROGGE</span>
					<span class="text-5xl text-slate-600">.</span>
				</div>
				<div class="border-t-2 border-slate-600" />
				<div class="flex-1 flex flex-col justify-end">
					<div class="text-4xl pb-1 text-slate-600">
						all about <span class="underline text-sky-800 font-bold">programming</span>.
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="p-16 flex flex-col gap-2">
		<div class="flex flex-row text-slate-600 gap-2 align-middle">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="32"
				height="32"
				fill="currentColor"
				class="bi bi-clock-fill"
				viewBox="0 0 16 16"
			>
				<path
					d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"
				/>
			</svg>
			<div class="text-2xl font-bold text-sky-700">12</div>
			<div class="text-2xl">years experience</div>
		</div>
		<div class="flex flex-row text-slate-600 gap-2">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="32"
				height="32"
				fill="currentColor"
				class="bi bi-geo-alt-fill"
				viewBox="0 0 16 16"
			>
				<path
					d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"
				/>
			</svg>
			<div class="text-2xl">Minneapolis, MN</div>
		</div>
	</div>
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
					I've had the pleasure of working on many fascinating industrial systems throughout my career thus far. I strive to cast a wide net, learning about a variety of applications and technologies. Aerospace, adhesive materials, food processing and packaging, fluid handling...even pig farming!
				</p>
				{:else if selectedSkill === 2}
				<div class="text-2xl">Programming: the pillar</div>
				<p class="text-lg">
					Since my early childhood when I started writing BASIC on my mom's computer, I've been obsessed with programming! There's nothing like solving a complex problem using beautifully-written and well-organized code.
				</p>
				<p class="text-lg">
					My peers have called me a "programming polyglot" due to the many different languages I've explored:
				</p>
				<div class="flex flex-row flex-wrap gap-4">
					{#each langs as langEntry}
					<div class="flex flex-row gap-1 border border-slate-600 rounded-lg pl-1 bg-">
						<div class="p-1 font-mono">{langEntry.lang}</div>
						<div class="border-l border-slate-600 rounded-r-lg p-1"
						class:bg-yellow-400={langEntry.level === "EXPERT"}
						class:bg-blue-300={langEntry.level === "INTERMEDIATE"}
						class:bg-indigo-300={langEntry.level === "DABBLED"}
						>{langEntry.level}</div>
					</div>
					{/each}
				</div>
				{:else if selectedSkill === 3}
				<div class="text-2xl">Design: the glue</div>
				<p class="text-lg">
					Learned through necessity; maintained through passion. While not formally trained in design, I've learned a lot on job designing HMIs, SCADA systems, and web/mobile frontends. My style tends to be pragmatic and functional, but I still like to keep it <span class="inline-block p-2 transform-gpu skew-x-12 -skew-y-3 italic font-mono font-semibold rounded-bl-xl rounded-tr-xl bg-gradient-to-r from-amber-300 to-sky-300 text-slate-950">fun</span>.
				</p>
				{/if}
			</div>
		</div>
	</div>
</div>
