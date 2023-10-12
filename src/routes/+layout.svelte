<script lang="ts">
	import { writable } from 'svelte/store';
	import '../app.css';
	import { setContext } from 'svelte';
	import SocialLinks from '../lib/SocialLinks.svelte';

	const darkModeEnabled = writable(false);
	setContext('darkModeEnabled', darkModeEnabled);
</script>

<div class="bg-slate-200 text-slate-600 relative">
	<slot />
	<div class="fixed top-0 right-0 bg-slate-950/30 rounded-bl-xl p-1">
		<SocialLinks />
	</div>
</div>
