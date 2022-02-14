<script lang="ts">
  import NavItem from "./NavItem.svelte";
  export let segment: string;
</script>

<nav>
  <ul>
    <NavItem active={segment === undefined} label="Privat" href="." />
    <NavItem active={segment === "finance"} label="Finance" href="finance" />
    <NavItem active={segment === "webdev"} label="Webdev" href="webdev" />
    <NavItem
      active={segment === "streaming"}
      label="Streaming"
      href="streaming"
    />
  </ul>
</nav>

<style>
  nav {
    margin-bottom: 5px;
  }
</style>
