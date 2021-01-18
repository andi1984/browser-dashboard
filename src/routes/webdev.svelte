<script lang="ts">
	import navigationData from '../nav.json';
  import { stores } from '@sapper/app';
	import Links from '../components/Links.svelte';

	const { page } = stores();
  const { path } = $page;
	const navData = (navigationData[path.slice(1)||"private"])||{};
</script>


<svelte:head>
  <title>Webdev Dashboard</title>
</svelte:head>

<Links data={navData.links||[]} />