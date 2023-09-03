<script lang="ts">
	const skillMatrixWidth = 100;
	const skillMatrixHeight = skillMatrixWidth * 0.8;
	const skillMatrixX1 = (2 / 3) * skillMatrixWidth;
	const skillMatrixY2 = (2 / 3) * skillMatrixHeight;
	const skillMatrixX2 =
		skillMatrixY2 / Math.tan(Math.PI / 2 - Math.atan(skillMatrixX1 / skillMatrixHeight));

	let selectedSkill: 1 | 2 | 3 = 1;
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
	<div class="p-16 flex flex-col gap-2 border relative">
		<div class="relative">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="40%"
				height="auto"
				fill="currentColor"
				viewBox={`0 0 ${skillMatrixWidth} ${skillMatrixHeight}`}
				on:click={() => console.log('clicked')}
				on:keydown={() => console.log('keydown')}
			>
				<path
					class=" fill-slate-600 [&.skillSelected]:fill-rose-400 hover:fill-rose-200"
					class:skillSelected={selectedSkill === 1}
					stroke="white"
					stroke-opacity="1"
					stroke-width="1"
					d={`M 0 0 L ${skillMatrixX1} ${skillMatrixHeight} L 0 ${skillMatrixHeight} L 0 0`}
					on:click={() => {
						selectedSkill = 1;
					}}
					on:keydown={() => {
						selectedSkill = 1;
					}}
				/>
				<text x={skillMatrixX1/4} y={skillMatrixHeight *2/3 } font-size=4 text-anchor="middle" dominant-baseline="middle" pointer-events="none" >
					Industrial
				</text>
				<text x={skillMatrixX1/4} y={skillMatrixHeight *2/3+ 4} font-size=4 text-anchor="middle" dominant-baseline="middle" pointer-events="none">automation</text>
				<path
					class="fill-slate-600 [&.skillSelected]:fill-teal-400 hover:fill-teal-200"
					class:skillSelected={selectedSkill === 2}
					stroke="white"
					stroke-opacity="1"
					stroke-width="1"
					d={`M 0 0 L ${skillMatrixWidth} 0 L ${skillMatrixX2} ${skillMatrixY2} L 0 0 `}
					on:click={() => {
						selectedSkill = 2;
					}}
					on:keydown={() => {
						selectedSkill = 2;
					}}
				/>
				<text x={skillMatrixWidth/2} y={skillMatrixHeight/4} font-size=4 text-anchor="middle" dominant-baseline="middle" pointer-events="none">Programming</text>
				<path
					class="fill-slate-600 hover:fill-blue-200 [&.skillSelected]:fill-blue-400"
					class:skillSelected={selectedSkill === 3}
					stroke="white"
					stroke-opacity="1"
					stroke-width="1"
					d={`M ${skillMatrixWidth} 0 L ${skillMatrixX2} ${skillMatrixY2} L ${skillMatrixX1} ${skillMatrixHeight} L ${skillMatrixWidth} ${skillMatrixHeight} L ${skillMatrixWidth} 0`}
					on:click={() => {
						selectedSkill = 3;
					}}
					on:keydown={() => {
						selectedSkill = 3;
					}}
				/>
				<text x={skillMatrixWidth * 3/4} y={skillMatrixHeight * 2/3} font-size=4 text-anchor="middle" dominant-baseline="middle" pointer-events="none">Design</text>
			</svg>
		</div>
	</div>
</div>
