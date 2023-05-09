<script lang="ts">
	import { getContext, onMount } from "svelte";
    import type { Writable } from "svelte/store";


    onMount(() => {
        // themeChange(false);
    })

    const darkModeEnabled:Writable<boolean> = getContext("darkModeEnabled");

    function toggleTheme() {
        $darkModeEnabled = !$darkModeEnabled; 
    }

</script>

<div class="text-2xl border-primary border-2" on:click={toggleTheme} on:keypress={toggleTheme}>
    <span class="bg-base-100 text-base-content px-1">MATT</span>
    <span class="bg-base-content text-base-100 -ml-2 px-1">ROGGE</span>
</div>