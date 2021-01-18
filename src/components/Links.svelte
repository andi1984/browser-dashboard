<script lang="ts">
	export let data;
</script>

{#each data as link }
	<a href="{link.url}">{link.url}</a>
{:else}
<p>No links today... sorry :(
</p>
{/each}