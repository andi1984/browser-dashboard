<script lang="ts">
  export let segment: string;
</script>

<style>
  nav {
    margin-bottom: 5px;
  }
</style>

<nav>
  <ul>
    <li>
      <a aria-current={segment === undefined ? "page" : undefined} href="."
        >Privat</a
      >
    </li>
    <li>
      <a aria-current={segment === "webdev" ? "page" : undefined} href="webdev"
        >Webdev</a
      >
    </li>
    <li>
      <a
        aria-current={segment === "streaming" ? "page" : undefined}
        href="streaming">Streaming</a
      >
    </li>

    <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
    <!-- <li>
      <a
        rel="prefetch"
        aria-current={segment === 'blog' ? 'page' : undefined}
        href="blog">blog</a>
    </li> -->
  </ul>
</nav>
