<script lang="ts">
	export let skillMatrixWidth = 100;
	export let skillMatrixHeight = 80;
	export let selectedSkill: 1 | 2 | 3 = 1;
	export let onSelect: (index: 1 | 2 | 3) => void;

	const skillMatrixX1 = (2 / 3) * skillMatrixWidth;
	const skillMatrixY2 = (2 / 3) * skillMatrixHeight;
	const skillMatrixX2 =
		skillMatrixY2 / Math.tan(Math.PI / 2 - Math.atan(skillMatrixX1 / skillMatrixHeight));
	const gap = 1;
</script>

<div class="p-2">
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="100%"
		height="auto"
		fill="currentColor"
		viewBox={`0 0 ${skillMatrixWidth} ${skillMatrixHeight}`}
	>
		<path
			class=" fill-slate-600 [&.skillSelected]:fill-rose-400 hover:fill-rose-200"
			class:skillSelected={selectedSkill === 1}			
			d={`M 0 0 L ${skillMatrixX1} ${skillMatrixHeight} L 0 ${skillMatrixHeight} L 0 0`}
			on:click={() => onSelect(1)}
			on:keydown={() => onSelect(1)}
		/>
		<text
			x={skillMatrixX1 / 4}
			y={(skillMatrixHeight * 2) / 3}
			font-size="4"
			text-anchor="middle"
			dominant-baseline="middle"
			pointer-events="none"
		>
			Industrial
		</text>
		<text
			x={skillMatrixX1 / 4}
			y={(skillMatrixHeight * 2) / 3 + 4}
			font-size="4"
			text-anchor="middle"
			dominant-baseline="middle"
			pointer-events="none">automation</text
		>
		<path
			class="fill-slate-600 [&.skillSelected]:fill-teal-400 hover:fill-teal-200"
			class:skillSelected={selectedSkill === 2}
			d={`M ${gap} 0 L ${skillMatrixWidth} 0 L ${skillMatrixX2+gap} ${skillMatrixY2} L ${gap} 0 `}
			on:click={() => onSelect(2)}
			on:keydown={() => onSelect(2)}
		/>
		<text
			x={skillMatrixWidth / 2}
			y={skillMatrixHeight / 4}
			font-size="4"
			font-family="monospace"
			text-anchor="middle"
			dominant-baseline="middle"
			pointer-events="none">Programming</text
		>
		<path
			class="fill-slate-600 hover:fill-blue-200 [&.skillSelected]:fill-blue-400"
			class:skillSelected={selectedSkill === 3}
			d={`M ${skillMatrixWidth} ${gap} L ${skillMatrixX2+gap*3/2} ${skillMatrixY2+gap/2} L ${skillMatrixX1+gap} ${skillMatrixHeight} L ${skillMatrixWidth} ${skillMatrixHeight} L ${skillMatrixWidth} ${gap}`}
			on:click={() => onSelect(3)}
			on:keydown={() => onSelect(3)}
		/>
		<text
			x={(skillMatrixWidth * 3) / 4}
			y={(skillMatrixHeight * 2) / 3}
			font-size="4"
			font-family="serif"
			text-anchor="middle"
			dominant-baseline="middle"
			pointer-events="none">Design</text
		>
	</svg>
</div>
