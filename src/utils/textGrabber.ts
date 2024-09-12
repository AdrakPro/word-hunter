import { onDestroy } from 'svelte';
import { listen } from '@tauri-apps/api/event';
import selected_text from '$stores/selectedTextStore.ts';

export default async function setupTextGrabber() {
  let unlisten = () => {};

  // Listen for user selecting text
  unlisten = await listen<string>('selected-text', (event) => {
    selected_text.set(event.payload);
  });

  onDestroy(() => unlisten());
}
