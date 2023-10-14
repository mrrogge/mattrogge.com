<script lang="ts">
	import { Styles } from '../styles';

	let class_ = '';
	export { class_ as class };
</script>

<div
	class={`p-4 gap-4 rounded-xl text-slate-600 text-md lg:text-lg ${Styles.panelGradient} ${class_}`}
>
	<slot />
</div>
