<script>
  import '$style/app.postcss'
  import '$style/global.css';
  import NavBar from '$lib/nav/NavBar.svelte';
</script>

<div>
  <NavBar />
  <slot />
</div>
