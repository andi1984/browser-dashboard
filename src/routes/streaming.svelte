<script context="module" lang="ts">
  import preloadFunc from "../preload";
  export const preload = preloadFunc;
</script>

<script lang="ts">
  import Links from "../components/Links.svelte";
  export let navData;
</script>

<svelte:head>
  <title>Streaming Dashboard</title>
</svelte:head>

<Links data={navData.links || []} />
