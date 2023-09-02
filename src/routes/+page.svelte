<script lang="ts">
    import ProfilePic from "$lib/img/matt-rogge-profile2.png";
    import PlcPic from "$lib/img/plc.jpg";
    import { fly } from "svelte/transition";

    let skill_popup = false;
</script>

<div class="flex flex-row space-x-8 mb-4">
    <div class="bg-primary rounded-full w-1/4 h-1/4 flex-none">
        <img src={ProfilePic} alt="Matt Rogge" class=" grayscale-[50%] drop-shadow-2xl rounded-full"/>
    </div>
    <div class="flex-1">
        <h1 class="text-3xl font-thin">I'm <span class="font-bold text-primary">MATT ROGGE</span>.</h1>
        <div class="bg-slate-500 p-[1px]"></div>
        <p class="text-lg">ENGINEER</p>
        <p class="text-base pb-8">I have 10 years experience in the industrial automation field.</p>
        <p class="font-light">Current employment:</p>
        <p>Automation Controls Engineer</p>
        <p>Industrial Division</p>
        <p>Graco Inc.</p>
            <p>Minneapolis, MN</p>
    </div>
</div>

<h2 class="text-2xl text-primary text-center">AREAS OF EXPERTISE</h2>
<div class="grid grid-cols-3 gap-5 mb-20 relative">
    <div class="card card-compact glass bg-base-200" on:click={() => skill_popup = true}>
        <figure><img src={PlcPic}></figure>
        <div class="card-body">
            <h3 class="card-title text-base">PLC programming</h3>
        </div>
    </div>
    <div class="card card-compact glass bg-base-200">
        <figure><img src={PlcPic}></figure>
        <div class="card-body">
            <h3 class="card-title text-base">HMI programming</h3>
        </div>
    </div>
    <div class="card card-compact glass bg-base-200">
        <figure><img src={PlcPic}></figure>
        <div class="card-body">
            <h3 class="card-title text-base">Control systems</h3>
        </div>
    </div>
    <div class="card card-compact glass bg-base-200">
        <figure><img src={PlcPic}></figure>
        <div class="card-body">
            <h3 class="card-title text-base">Electrical design</h3>
        </div>
    </div>
    <div class="card card-compact glass bg-base-200">
        <figure><img src={PlcPic}></figure>
        <div class="card-body">
            <h3 class="card-title text-base">Software design</h3>
        </div>
    </div>
    <div class="card card-compact glass bg-base-200">
        <figure><img src={PlcPic}></figure>
        <div class="card-body">
            <h3 class="card-title text-base">Database administration</h3>
        </div>
    </div>

    {#if skill_popup}
    <div class="absolute bg-black bg-opacity-90 border-white border-4 inset-0 max-w-full" on:click={() => skill_popup = false} transition:fly={{x:100, duration:400}}>test test test</div>
    {/if}
</div>

<h2 class="text-4xl text-center text-primary mb-10">Let's get in touch</h2>
<form>
    <div class="flex flex-col">
        <label>Name<input type="text" class="input input-bordered"></label>
        <label>Email<input type="email" class="input input-bordered"></label>
        <label>What can I do for you?<textarea class="textarea textarea-bordered textarea-lg w-full max-w-xs" ></textarea></label>
    </div>
</form>


