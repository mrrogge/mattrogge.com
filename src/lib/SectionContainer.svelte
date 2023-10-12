<script lang="ts">
	import { Styles } from '../styles';

	let class_ = '';
	export { class_ as class };
</script>

<div
	class={`p-6 gap-4 rounded-xl text-slate-600 ${Styles.panelGradient} ${Styles.text1} ${class_}`}
>
	<slot />
</div>
