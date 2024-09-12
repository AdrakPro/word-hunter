<script>
  import '$style/app.postcss';
  import '$style/global.css';
  import NavBar from '$lib/nav/NavBar.svelte';
  import setupTextGrabber from '$utils/textGrabber.ts';
  import { onMount } from 'svelte';

  onMount(async () => {
    await setupTextGrabber();
  });
</script>

<div>
  <NavBar />
  <slot />
</div>
