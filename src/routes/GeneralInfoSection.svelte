<script>
	import ProfilePic from '../ProfilePic.svelte';
	import IconClockFill from '../icons/IconClockFill.svelte';
	import IconGeoAltFill from '../icons/IconGeoAltFill.svelte';
	import IconMortarboardFill from '../icons/IconMortarboardFill.svelte';
</script>

<div class="flex flex-col items-center gap-4 p-8 lg:p-16 bg-zinc-100 drop-shadow-sm">
	<div class="lg:hidden w-2/3 max-w-[200px]">
		<ProfilePic />
	</div>
	<div class="flex flex-row gap-4 items-center">
		<div class="hidden lg:block w-[200px]">
			<ProfilePic />
		</div>
		<div class="flex flex-col gap-2">
			<div class="flex flex-row gap-1">
				<span class="w-[24px] h-[24px] lg:w-[32px] lg:h-[32px]">
					<IconClockFill />
				</span>
				<div class="flex-1">
					<span class="inline text-md lg:text-2xl font-bold text-sky-700">12</span>
					<span class="inline text-md lg:text-2xl"> years professional experience </span>
				</div>
			</div>
			<div class="flex flex-row gap-1">
				<span class="w-[24px] h-[24px] lg:w-[32px] lg:h-[32px]">
					<IconGeoAltFill />
				</span>
				<span class="flex-1 text-md lg:text-2xl">Minneapolis, MN</span>
			</div>
			<div class="flex flex-row gap-1">
				<span class="w-[24px] h-[24px] lg:w-[32px] lg:h-[32px]">
					<IconMortarboardFill />
				</span>
				<div class="flex-1 flex flex-col">
					<div class="text-md lg:text-2xl">Bachelor of Science Electrical Engineering</div>
					<div class="text-md lg:text-2xl">University of Minnesota</div>
				</div>
			</div>
		</div>
	</div>
</div>
