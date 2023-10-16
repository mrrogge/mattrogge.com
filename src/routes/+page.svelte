<script lang="ts">
	import GeneralInfoSection from '../lib/GeneralInfoSection.svelte';
	import Header from '../lib/Header.svelte';
	import SkillsSection from '../lib/skills/SkillsSection.svelte';
	import ProjectSection from '../lib/ProjectSection.svelte';
	import ContactForm from '../lib/ContactForm.svelte';
	import AboutMeSection from '$lib/AboutMeSection.svelte';
	import StuffIKnowSection from '$lib/StuffIKnowSection.svelte';
	import StuffIveDoneSection from '$lib/StuffIveDoneSection.svelte';
</script>

<div class={`bg-[url("$lib/assets/pump-room.jpg")] bg-fixed bg-cover backdrop-blur-lg bg-no-repeat bg-top flex flex-col items-center`}>
	<div class="max-w-screen-xl">
		<Header />
		<div class="pl-8 pr-8 flex flex-col gap-1">
			<GeneralInfoSection />
			<AboutMeSection />
			<StuffIKnowSection />
			<StuffIveDoneSection />
			<ContactForm /> 
		</div>
	</div>
</div>
