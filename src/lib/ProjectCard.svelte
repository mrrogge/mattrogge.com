<div class="flex flex-row items-stretch gap-2 drop-shadow-md rounded-lg bg-zinc-50 p-6">
    <div class="w-1/4 p-6 border flex flex-col justify-center justify-items-center rounded-2xl">
        <slot name="image" />
    </div>
    <div class="w-3/4 pl-8 flex flex-col justify-center">
        <slot />
    </div>
</div>