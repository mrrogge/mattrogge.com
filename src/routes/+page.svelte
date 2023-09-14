<script lang="ts">
	import GeneralInfoSection from './GeneralInfoSection.svelte';
	import Header from './Header.svelte';
	import SkillsSection from './SkillsSection.svelte';
	import ProjectSection from './ProjectSection.svelte';
	import ContactForm from './ContactForm.svelte';
</script>

<div class="bg-[url('/src/lib/img/winter-city-view.png')] bg-fixed bg-[length:1030px] lg:bg-[length:1500px] bg-no-repeat bg-top">
	<Header />
	<div class="bg-slate-200">
		<GeneralInfoSection />
		<SkillsSection />
		<!-- <ProjectSection /> -->
		<!-- <ContactForm />  -->
	</div>
</div>
