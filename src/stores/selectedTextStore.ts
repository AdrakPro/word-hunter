import { writable } from 'svelte/store';

const selected_text = writable<string>('');

export default selected_text;
