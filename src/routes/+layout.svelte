<script lang="ts">
  import '$style/app.postcss';
  import '$style/global.css';
  import NavBar from '$lib/nav/NavBar.svelte';
  import { onMount } from 'svelte';
  import { listen } from '@tauri-apps/api/event';

  let selected_text: string;

  // Listen for user selecting text
  // todo Get it from user under word hunt button, user set own shortcut
  onMount(async () => {
    const unlisten = await listen<string>(
      'selected-text',
      (event) => {
        selected_text = event.payload;
      }
    );

    return unlisten();
  });
</script>

<div>
  <NavBar />
  <slot />
</div>
