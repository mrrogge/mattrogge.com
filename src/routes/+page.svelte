<script lang="ts">
	import GeneralInfoSection from './GeneralInfoSection.svelte';
import Header from './Header.svelte';
	import SkillsSection from './SkillsSection.svelte';
	import ProjectSection from './ProjectSection.svelte';

</script>

<div class="flex-1 flex flex-col">
	<Header />
	<GeneralInfoSection />
	<SkillsSection />
	<ProjectSection />
	<div class="p-16 mt-1 flex flex-col gap-2 border bg-zinc-100 rounded-md">
		<p class="text-2xl w-1/4 text-center font-semibold">...but wait, there's more...</p>
		<!-- 3 col full width, 1 col mobile -->

	</div>
	<div></div>
</div>
