<script lang="ts">
  export let active: boolean;
  export let label: string;
  export let href: string;
</script>

<li class={active ? "active" : undefined}>
  <a aria-current={active ? "page" : undefined} {href}>{label}</a>
</li>
