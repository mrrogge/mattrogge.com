<script lang="ts">
	import { Styles } from '../styles';
	import ProjectCard from './ProjectCard.svelte';
</script>

<div class={`p-16 mt-1 flex flex-col gap-2 ${Styles.panelGradient} rounded-md`}>
	<p class="text-4xl w-1/4 text-center font-semibold">EXPERIENCE</p>
	<ProjectCard>
		<div slot="image" class="flex flex-col">
			<img src="graco_logo.svg" alt="Graco logo" />
			<div class="text-2xl text-center">Industrial SDKs</div>
		</div>
		<ul class="list-disc list-inside">
			<li>
				Spearheaded the Software Development Kit (SDK) project for integrators. These provide
				standardized code blocks and examples for controlling Graco products over a fieldbus
				connection (e.g. from a PLC). 6 different products are supported across both Rockwell and
				Siemens PLCs. Research showed these saved integrators 2-6 weeks of commissioning time per
				project.
			</li>
			<li>
				Created a custom build system for reproducing SDK releases. This CLI tool used Rockwell's
				ACM console software to generate .ACD files from an ACM project.
			</li>
			<li>
				Programmed a parser for Siemen's SCL language that generates human-friendly documentation
				(think doxygen for PLCs).
			</li>
			<li>
				Led various trainings and demonstrations, including two hour-long sessions at the Annual
				Integrator Symposium.
			</li>
		</ul>
	</ProjectCard>
	<ProjectCard>
		<div slot="image" class="flex flex-col">
			<img src="graco_logo.svg" alt="Graco logo" />
			<div class="text-xl text-center">CEO Award Winner 2021</div>
		</div>
		<div>
			Given to a select group of employees who consistently demonstrate outstanding performance and
			commitment to Graco's strategic initiatives.
		</div>
	</ProjectCard>
	<ProjectCard>
		<div slot="image">
			<div class="text-3xl font-extrabold text-center">BW Systems, Inc.</div>
		</div>
		<div>
		<p>
			Delivered a complex customized MES solution for a food-industry plant with a 24/7 production
			schedule.
		</p>
		<ul class="list-disc list-inside">
			<li>
				Consisted of: 6 Rockwell PLCs, 3 grinding lines, 7 packaging lines, and 17 HMI thin clients. Handled SCADA and data storage through IA Ignition and SQL Server DB.
			</li>
			<li>
				Contributed heavily to a code library of ~70k lines consisting of python and SQL.
			</li>
			<li>
				Coordinated project with customer during their facility relocation and ERP migration.
			</li>
		</ul>
	</div>
	</ProjectCard>
	<ProjectCard>
		<div slot="image">
			<div class="text-3xl font-extrabold text-center">Toastmasters, Inc.</div>
			<div class="text-2xl font-bold text-center">PUMPernickel Club</div>
		</div>
		<div>
			<ul class="list-disc list-inside">
				<li>
					Serving as Sergeant-at-Arms officer for 3 years running. This role involves facilitating weekly meetings for both in-person and remote members.
				</li>
				<li>
					Working towards the Presentation Mastery Pathway (currently Level 2). Through this project, I've honed my public speaking ability by delivering 9 total speeches.
				</li>
			</ul>
	</div>
	</ProjectCard>
</div>
