<script lang="ts">
	import GeneralInfoSection from '../lib/GeneralInfoSection.svelte';
	import Header from '../lib/Header.svelte';
	import SkillsSection from './SkillsSection.svelte';
	import ProjectSection from './ProjectSection.svelte';
	import ContactForm from '../lib/ContactForm.svelte';
</script>

<div class={`bg-[url("$lib/assets/pump-room.jpg")] bg-fixed bg-cover backdrop-blur-lg bg-no-repeat bg-top`}>
	<Header />
	<div class="pl-8 pr-8">
		<GeneralInfoSection />
		<SkillsSection />
		<ProjectSection />
		<ContactForm /> 
	</div>
</div>
