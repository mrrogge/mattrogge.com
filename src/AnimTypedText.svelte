<script lang="ts">
	import { onDestroy, onMount } from "svelte";

    export let strings: string[] = []

    type ScrollStateKind = 'typing' | 'post-typing' | 'deleting' | 'post-deleting';

    $: stringIndex = 0;
    $: charIndex = 0;
    $: currentStringFull = strings[stringIndex];
    $: currentString = currentStringFull.slice(0, charIndex);
    let updateInterval: NodeJS.Timeout | null = null;
    let delayTimeout: NodeJS.Timeout | null = null;
    let state: ScrollStateKind;
    $: state = 'typing';
    $: showCursor = false;
    let cursorInterval: NodeJS.Timeout | null = null;
    $: borderColorClass = showCursor ? "border-white" : "border-transparent";

    onMount(() => {
        updateInterval = setInterval(() => {
            switch (state) {
                case "typing": {
                    charIndex = Math.min(charIndex + 1, currentStringFull.length);
                    if (charIndex === currentStringFull.length) {
                        state = 'post-typing';
                    }
                    break;   
                }
                case "post-typing": {
                    if (delayTimeout !== null) {
                        break;
                    }
                    delayTimeout = setTimeout(() => {
                        if (delayTimeout !== null) {
                            clearTimeout(delayTimeout);
                            delayTimeout = null;
                            state = 'deleting';
                        }
                    }, 1500);
                    break;
                }
                case "deleting": {
                    charIndex = Math.max(charIndex - 1, 0);
                    if (charIndex === 0) {
                        state = 'post-deleting';
                    }
                    break;   
                }
                case "post-deleting": {
                    if (delayTimeout !== null) {
                        break;
                    }
                    delayTimeout = setTimeout(() => {
                        if (delayTimeout !== null) {
                            clearTimeout(delayTimeout);
                            delayTimeout = null;
                            stringIndex++;
                            if (stringIndex >= strings.length) {
                                stringIndex = 0;
                            }
                            state = 'typing';
                        }
                    }, 500);
                    break;
                }
            }
                     
        }, 60);

        cursorInterval = setInterval(() => {
            showCursor = !showCursor;
        }, 500);
    })

    onDestroy(() => {
        if (updateInterval !== null) {
            clearInterval(updateInterval);
        }
        if (delayTimeout !== null) {
            clearTimeout(delayTimeout);
        }
        if (cursorInterval !== null) {
            clearInterval(cursorInterval);
        }
    })


</script>

<span class:border-white={showCursor} class={`inline min-w-[4px] border-r-4 ${borderColorClass}`}>
    {"\u200b"}{currentString}
</span>