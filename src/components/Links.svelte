<script lang="ts">
	import Link from './Link.svelte';
	export let data;
</script>

<style>
	nav {
		background: none;
		box-shadow: none;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		grid-template-rows: 1fr 1fr;
		gap: 15px 15px;
		grid-template-areas:
			". . . ."
			". . . .";
	}
</style>

<nav>
{#each data as linkData (linkData.url)}
	<Link data={linkData}/>
{:else}
<p>No links today... sorry :(
</p>
{/each}
</nav>